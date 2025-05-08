<template>
  <div
    class="relative animate-show custom-width text-[#F6EFE6] h-full flex justify-between items-start sm:pt-40 pt-14 "
  >
    <div class="delay-500 py-20 pl-[10px] sm:pl-[30px]">
      
      <h3 class="delay-600 sm:text-[28px] sm:font-normal sm:pb-[60px] sm:leading-[50px]">
        {{ $t("s4_1_1") }}<br>{{ $t("s4_1_2") }}
      </h3><br>
      <h2 class=" sm:text-[34px] text-[24px] font-semibold sm:pb-[42px]">
        {{ $t("s4_2") }}
      </h2>
      <h3 class="delay-800 sm:text-[24px] sm:font-normal sm:leading-[50px]">
        {{ $t("s4_2_1") }}<br>{{ $t("s4_2_2") }}<br>{{ $t("s4_2_3") }}
      </h3>
      
      
    </div>

    
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="https://images.pexels.com/photos/6347621/pexels-photo-6347621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    />
    
    <source
      media="(min-width: 640px)"
        srcset="https://images.pexels.com/photos/6347621/pexels-photo-6347621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="网红运营背景图第四页_电脑版"
    />
    <img
      class="img-bg"
      src="https://images.pexels.com/photos/6347621/pexels-photo-6347621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      alt="专业运营"
    />
  </picture>
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";
import Popover from "~/components/Popover.vue";
import { useIsMobile } from "@/hooks/useIsMobile";
const isMobile = useIsMobile();

const { makeImgHost } = useImgHost();
</script>
