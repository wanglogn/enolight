<template>
  
  <div
    class="animate-show custom-width font-normal text-sm flex flex-col text-black translate-y-20 "
  >
    <h2
      class="delay-700  text-[18px] sm:text-[35px] py-5  font-normal leading-6 sm:leading-[45px]"
    >
      {{ $t("zhongri") }}<br>{{ $t("zhongri1") }}<br>{{ $t("zhongri2") }}<br>{{ $t("zhongri3") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-4 mb-2 text-[25px] sm:text-[30px] font-medium py-5">
      {{ $t("server") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[18px] sm:text-[25px] font-medium">
      {{ $t("server1") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[13px] sm:text-[20px] font-normal">
      {{ $t("server1_1") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[18px] sm:text-[25px] font-medium">
      {{ $t("server2") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[13px] sm:text-[20px] font-normal">
      {{ $t("server2_1") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[18px] sm:text-[25px] font-medium">
      {{ $t("server3") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[13px] sm:text-[20px] font-normal">
      {{ $t("server3_1") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[18px] sm:text-[25px] font-medium">
      {{ $t("server4") }}
    </h2>
    <h2 class="delay-[800ms] sm:mb-5 mb-2 text-[13px] sm:text-[20px] font-normal">
      {{ $t("server4_1") }}
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
