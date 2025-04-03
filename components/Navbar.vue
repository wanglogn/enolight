<template>
  <nav
    class="nav sm:flex h-[68px] custom-width sm:justify-between justify-end items-center fixed top-0 left-0 right-0 z-40 pointer-events-none"
    :class="[isInScrollPage && currentPage !== 1 ? 'hidden' : 'flex']">
    <!-- pc端首页遮盖层 -->
    <div class="nav-linear-mask z-1 fixed h-[68px] w-full left-0 top-0"
      :class="currentPage === 1 && isInScrollPage ? '2xl:block hidden' : 'hidden'"></div>

    <!-- logo -->
    <img class="h-[15px] sm:h-[20px] z-20 sm:relative absolute sm:left-0 sm:translate-x-0 transition duration-500"
      :class="[
        { invert: isInvert || !isCollapse },
        !isCollapse ? 'left-4 translate-x-0' : 'left-1/2 -translate-x-1/2',
        useRoute().path !== '/coverage' || !isCollapse ? '' : 'hidden sm:block',
      ]" src="/logo.svg" alt="EnoLight" />

    <!-- PC端nav-item -->
    <div class="sm:flex hidden absolute left-1/2 -translate-x-1/2 top-[15px] sm:space-x-1 lg:space-x-3 xl:space-x-[6vw]"
      :class="{ invert: isInvert }">
      <span
        class="pre-expander py-2 shrink-0 text-[16px] font-normal text-white border-2 box-border border-transparent hover:border-white rounded-xl duration-300 cursor-pointer px-3 break-keep"
        :class="[
          item.children ? `overflow-y-hidden flex flex-col relative` : '',
          isInScrollPage && currentPage === 7 ? 'hover:bg-black' : '',
          ['/privacy', '/protocol'].includes(useRoute().path)
            ? 'hover:bg-black'
            : '',
        ]" v-for="item in navList" :key="item.name" @click="item.page ? navigate(item.page) : ''">
        <span class="text-center">{{ $t(item.name) }}</span>

        <div v-if="item.children" class="expander">
          <div class="expander-content">
            <ul v-if="item.children" class="text-center mt-2 flex flex-col space-y-2">
              <li class="hover:underline cursor-pointer" v-for="child in item.children" :key="child.name"
                @click="navigate(child.page)">
                {{ $t(child.name) }}
              </li>
            </ul>
          </div>
        </div>
      </span>
    </div>

    <!-- <div class="flex items-center space-x-5"> -->
      <I18n class="sm:relative sm:right-4 absolute left-4" :class="{ invert: isInvert }" />
    <!-- </div> -->

    <!-- 小屏——下拉菜单按钮 -->
    <ChevronDownIcon @click="toggleCollapse" class="w-6 sm:hidden block z-20"
      :class="isCollapse ? 'text-white' : 'text-black'" />

    <!-- 小屏——下拉菜单 -->
    <div
      class="sm:hidden visible opacity-1 absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.5)] z-10 h-screen transition duration-300"
      :class="{ 'invisible opacity-0': isCollapse }" @click.self="toggleCollapse">
      <div class="bg-white custom-width pt-[65px]">
        <ul class="flex flex-col">
          <!-- 次级菜单 -->
          <li class="text-base font-semibold text-black border-b border-black py-[12px]"
            v-for="(item, index) in navList" :key="item.name" @click="
              item.children
                ? toggleMobSubMenu(index)
                : handleMobMenuClick(item.page)
              ">
            <template v-if="item.children">
              <div class="flex justify-between items-center">
                <span>{{ $t(item.name) }}</span>
                <div class="transition origin-center w-4 h-4" :class="{ 'rotate-45': currentOpenedMenu === index }">
                  <IconMenuItem :fontControlled="false" class="w-[14px]" />
                </div>
              </div>
              <div class="flex flex-col max-h-0 overflow-hidden transition-all duration-300 pl-8"
                :class="{ 'max-h-72': currentOpenedMenu === index }">
                <span v-for="child in item.children" :key="child.name" class="py-1 first:pt-2 font-normal" @click.stop="
                  navigate(child.page);
                toggleCollapse();
                ">{{ $t(child.name) }}</span>
              </div>
            </template>

            <template v-else>
              {{ $t(item.name) }}
            </template>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import IconMenuItem from "~/assets/icons/menu-item.svg";
import Popover from "@/components/Popover.vue";
import { Bars3Icon as ChevronDownIcon } from "@heroicons/vue/24/outline";
import { usePageNavigation } from "@/hooks/usePageNavigation";

const { goToPage, currentPage, isInScrollPage } = usePageNavigation();

const isInvert = computed(() => {
  return isInScrollPage && (currentPage.value !== 4);
});

// 导航栏，name为i18n的key，page为对应的页面，通过goToPage跳转
const navList = [
  { name: "nav_1", page: 2 },
  {
    name: "nav_2",
    children: [
      {
        name: "nav_2_1",
        page: 3,
      },
      {
        name: "nav_3_1",
        page: 4,
      },

    ],
  },
  {
    name: "nav_3",
    children: [
      {
        name: "nav_3_2",
        page: 5,
      },
      {
        name: "nav_4_1",
        page: 6,
      },
    ],
  },
  {
    name: "nav_4",
    page: 7,
  },
];

const isCollapse = ref(true);

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
  currentOpenedMenu.value = null;
};

function navigate (page) {
  goToPage(page);
}

// 小屏次级下拉菜单
const currentOpenedMenu = ref(null);
function toggleMobSubMenu (index) {
  if (currentOpenedMenu.value === index) {
    currentOpenedMenu.value = null;
  } else {
    currentOpenedMenu.value = index;
  }
}

// 小屏点击主级下拉菜单
function handleMobMenuClick (page) {
  navigate(page);
  toggleCollapse();
}
</script>

<style scoped>
.nav * {
  pointer-events: auto;
}

.nav-linear-mask {
  background: linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
}

.hover-container:hover .popover-content {
  visibility: visible;
  opacity: 1;
}

.expander {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.5s;
  overflow: hidden;
}

.expander-content {
  min-height: 0;
  transition: visibility 0.5s;
  visibility: hidden;
}

.pre-expander:hover .expander {
  grid-template-rows: 1fr;
}

.pre-expander:hover .expander .expander-content {
  visibility: visible;
}
</style>
