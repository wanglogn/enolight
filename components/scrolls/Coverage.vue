<template>
  <div
    class="relative custom-width sm:text-6xl font-bold text-3xl text-white flex flex-col justify-center items-center h-full animate-show"
  >
    <h2
      class="delay-[600ms] font-semibold sm:mb-6 mb-4 delay-500 sm:text-[50px] text-2xl"
    >
      {{ $t("s6_hero") }}
    </h2>
    <h2
      class="delay-[700ms] font-semibold sm:mb-6 mb-4 delay-500 sm:text-[30px] text-2xl"
    >
      {{ $t("address") }}
    </h2>
    <h2
      class="delay-[800ms] font-semibold sm:mb-6 mb-4 delay-500 sm:text-[50px] text-2xl"
    >
      {{ $t("building") }}
    </h2>
    <h2
      class="delay-[900ms] font-semibold sm:mb-6 mb-4 delay-500 sm:text-[30px] text-2xl"
    >
      {{ $t("buildingfortime") }}
    </h2>
    <h2
      class="delay-[1000ms] font-semibold sm:mb-6 mb-4 delay-500 sm:text-[50px] text-2xl"
    >
      {{ $t("CEO") }}
    </h2>
    <h2
      class="delay-[1100ms] font-semibold sm:mb-6 mb-4 delay-500 sm:text-[30px] text-2xl"
    >
      {{ $t("CEOname") }}
    </h2>
    <div class="relative sm:w-[406px] w-[280px] delay-700">
      <form @submit.prevent="handleSearch">
        <!-- <input
          @focus="adjustPagePosition"
          @blur="handleInputBlur"
          class="text-xs p-3 pr-20 bg-white rounded-[24px] w-full sm:h-[48px] h-[43px] text-black outline-none border-4 focus:border-[#DAC7B7] border-white"
          type="search"
          v-model="codeInput"
          :placeholder="$t('s6_placeholder')"
          required
        /> -->

        <!-- <button
          type="submit"
          :class="codeInput ? 'text-white' : 'text-[rgba(255,255,255,0.5)]'"
          class="placeholder:font-normal placeholder:text-sm text-sm bg-black h-[32px] sm:px-5 px-4 absolute sm:right-3 right-2 sm:top-8 top-2 cursor-pointer rounded-[17px]"
        >
          确定
        </button> -->
      </form>
    </div>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="
        https://c.pxhere.com/photos/ce/41/skyline_tokyo_roppongi_japon-318009.jpg!d
      "
    />
    <source
      media="(min-width: 640px)"
      srcset="
        https://c.pxhere.com/photos/ce/41/skyline_tokyo_roppongi_japon-318009.jpg!d
      "
    />
    <img
      class="img-bg"
      src="https://c.pxhere.com/photos/ce/41/skyline_tokyo_roppongi_japon-318009.jpg!d"
      alt="公司地址"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";
import { usePageNavigation } from "~/hooks/usePageNavigation";

const { makeImgHost } = useImgHost();
const { adjustPagePosition } = usePageNavigation();

const codeInput = ref("");

function handleSearch() {
  window.location.href = "/coverage?sn=" + codeInput.value;
}

function handleInputBlur() {
  // 移动端输入框失焦时，恢复移位
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
</script>
