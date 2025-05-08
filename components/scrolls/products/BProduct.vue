<template>
  <div
    class="relative animate-show custom-width text-[#E9DFD6] h-full flex flex-col justify-start items-center sm:pt-40 pt-14 text-black sm:flex sm:flex-row sm:justify-center sm:items-center"
  >
      <div class=" delay-[600ms] pb-[10px] flex flex-col justify-start items-center sm:w-[400px]">
      <img
      class="w-[15rem] h-100 "
      src="~assets/enolight代表.jpg"
      alt="EnoLight代表介绍背景图片"
      />
      <h4 class=" flex flex-col justify-center items-center" >{{ $t("daibiao3") }}</h4>
    </div>
    
    <h3 class="delay-[600ms]  text-[18px] font-normal sm:w-[700px] sm:text-[25px] sm:leading-[60px]">
        {{ $t("daibiao") }}<br>{{ $t("daibiao1") }}<br>{{ $t("daibiao2") }}
      </h3>
    
       
</div>

  
</template>

<script setup>
import useImgHost from "~/hooks/useImgHost";
import Popover from "~/components/Popover.vue";
import { useIsMobile } from "@/hooks/useIsMobile";
const isMobile = useIsMobile();

const { makeImgHost } = useImgHost();
</script>
