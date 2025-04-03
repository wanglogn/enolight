<template>
  <div
    class="animate-show custom-width font-normal text-sm  flex flex-col text-black translate-y-20 sm:translate-y-40 "
  >
    <SvgoLogo
      :fontControlled="false"
      class="sm:w-[200px] sm:h-[46px] w-[90px] h-[20px] delay-500 sm:mb-16 mb-8"
    />

    <h2 class="delay-700 sm:mb-8 mb-2 text-[18px] sm:text-[30px]">{{ $t("s2_2") }}</h2>
    <h2 class="delay-[800ms] sm:mb-8 mb-2 text-[10px] sm:text-[15px]">{{ $t("s2_3") }}</h2>
    <h2 class="delay-[900ms] sm:mb-20 mb-8 text-[10px] sm:text-[15px]">{{ $t("s2_4") }}</h2>

  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="
        https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
      "
    />
    
    <source
      media="(min-width: 640px)"
      srcset="
        https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
      "
      alt="EnoLight简介背景图片第二页_电脑版"
    />
    <img
      class="img-bg"
      src="https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="EnoLight简介背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";

const { makeImgHost } = useImgHost();
</script>
