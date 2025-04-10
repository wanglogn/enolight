<template>
  <div
    class="animate-show custom-width font-normal text-sm flex flex-col text-black translate-y-20 sm:translate-y-40 py-20"
  >
    <h2
      class="delay-700 sm:mb-8 mb-2 text-[18px] sm:text-[30px] py-5 sm:py-0 font-medium"
    >
      {{ $t("中日") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-8 mb-2 sm:text-[10px] sm:text-[15px]">
      {{ $t("中日") }}
    </h2>
    <h2 class="delay-[900ms] sm:mb-20 mb-8 sm:text-[10px] sm:text-[15px]">
      {{ $t("中日") }}
    </h2>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="
        https://images.pexels.com/photos/7634759/pexels-photo-7634759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
      "
    />

    <source
      media="(min-width: 640px)"
      srcset="
        https://images.pexels.com/photos/7634759/pexels-photo-7634759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
      "
      alt="EnoLight简介背景图片第二页_电脑版"
    />
    <img
      class="img-bg"
      src="https://images.pexels.com/photos/7634759/pexels-photo-7634759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="EnoLight简介背景图片"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";

const { makeImgHost } = useImgHost();
</script>
