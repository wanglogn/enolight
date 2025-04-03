<template>
  <div
    class="absolute top-1/2 -translate-y-[100%] left-1/2 -translate-x-1/2 text-white flex flex-col"
  >
    <div class="flex items-center justify-center sm:mb-7 mb-6">
      <span
        class="block rounded-full bg-white sm:w-1 sm:h-1 w-[2px] h-[2px] sm:mx-3 mx-2"
      ></span>
      <SvgoLogo
        :fontControlled="false"
        class="sm:h-[20px] h-[15px] text-white"
      />
    </div>
    <h1
      class="sm:text-[56px] text-[32px] sm:leading-[56px] leading-[32px] font-semibold flex space-x-6 items-center"
    >
      <span class="shrink-0">{{ $t("s1_1") }}</span>
      <span class="shrink-0">{{ $t("s1_2") }}</span>
    </h1>
  </div>

  

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="
        https://images.pexels.com/photos/251603/pexels-photo-251603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
      "
      alt="enolight首页背景图片_手机版"
    />
    
    
    <source
      media="(min-width: 640px)"
      srcset="
      https://images.pexels.com/photos/251603/pexels-photo-251603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
        
      "
      alt="enolight首页背景图片_电脑版"
    />
    <img
      class="img-bg"
      src="https://images.pexels.com/photos/251603/pexels-photo-251603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="low网速版"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";

const { makeImgHost } = useImgHost();
</script>
