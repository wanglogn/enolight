<template>
  <div
    class="relative animate-show custom-width text-[#FFE4C0] sm:text-[#F6EFE6] h-full flex justify-between items-start sm:pt-40 pt-14"
  >
    <div class="delay-500">
      <h2 class="sm:text-[50px] text-[22px] font-semibold mb-1 sm:mb-3">
        {{ $t("s4_1") }}
      </h2>
      <h3 class="delay-150 sm:text-[24px] text-[14px] font-normal">
        {{ $t("s4_1_1") }}
      </h3>
      <h2 class="sm:text-[50px] text-[22px] font-semibold mb-1 sm:mb-3">
        {{ $t("s4_2") }}
      </h2>
      <h3 class="delay-150 sm:text-[24px] text-[14px] font-normal">
        {{ $t("s4_2_1") }}
      </h3>
    </div>

    <Popover class="delay-500" :type="isMobile ? 'dialog' : 'popover'">
      <template #content>
        <div class="bg-black w-[120px] p-2 rounded-md">
          <img
            class="sm:rounded-md rounded-[3px]"
            src="/qr/wx.jpg"
            alt="二维码"
          />
          <span class="block text-white text-center text-sm mt-2">{{
            $t("scan_wx")
          }}</span>
        </div>
      </template>
    </Popover>
  </div>

  <picture>
    <source
      media="(max-width: 639px)"
      srcset="https://c.pxhere.com/photos/24/7e/mountain_cloud_sunset_sunrise_mountain_range-19749.jpg!d"
    />
    <source
      media="(min-width: 640px)"
      srcset="https://c.pxhere.com/photos/24/7e/mountain_cloud_sunset_sunrise_mountain_range-19749.jpg!d"
    />
    <img
      class="img-bg"
      src="https://c.pxhere.com/photos/24/7e/mountain_cloud_sunset_sunrise_mountain_range-19749.jpg!d"
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
