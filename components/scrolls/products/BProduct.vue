<template>
  <div
    class="relative animate-show custom-width text-[#E9DFD6] h-full flex justify-between items-start sm:pt-40 pt-14 text-black"
  >
    <div class="delay-500">
      <h2 class="sm:text-[50px] text-[22px] font-semibold mb-1 sm:mb-3">
        {{ $t("s代表介绍") }}
      </h2>
      <h3 class="delay-150 sm:text-[24px] text-[14px] font-normal">
        {{ $t("s代表介绍") }}
      </h3>
    </div>
    
    <div class="w-1/6">
      <img
      class=""
      src="~assets/enolight代表.jpg"
      alt="EnoLight代表介绍背景图片"
      />
    </div>
</div>

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="https://user0514.cdnw.net/shared/img/thumb/ai20246130000021image_TP_V.jpg"
    />
    <source
      media="(min-width: 640px)"
      srcset="
        https://user0514.cdnw.net/shared/img/thumb/ai20246130000021image_TP_V.jpg
      "
    />
    <img
      class="img-bg"
      src="https://user0514.cdnw.net/shared/img/thumb/ai20246130000021image_TP_V.jpg"
      alt="EnoLight代表介绍背景图片"
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
