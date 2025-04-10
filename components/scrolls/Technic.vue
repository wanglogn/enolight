<script setup>
import { ChevronUpIcon } from "@heroicons/vue/24/outline";
import useImgHost from "~/hooks/useImgHost";
import img1 from "~/assets/aboutjob.jpg";

const { makeImgHost } = useImgHost();

const s3_active_idx = ref(1);
</script>
<template>
  <div
    class="relative animate-show custom-width text-[rgb(131,95,56)] h-full sm:pt-32  lg:-translate-y-10 2xl:translate-y-0 pt-[80px] ">
    <div class="delay-500 flex justify-between items-center">
      <h2 class="sm:text-[20px] text-[15px] font-semibold">
        {{ $t("s3_1") }}
      </h2>
    </div>
    <div class="delay-[600ms] flex justify-between">
      <h2 class="sm:text-[20px] text-[15px] font-semibold">
        {{ $t("s3_1_2") }}
      </h2>
    </div>
    <div class="delay-[700ms] flex justify-between items-center">
      <h2 class="sm:text-[20px] text-[15px] font-semibold">
        {{ $t("s3_1_3") }}
      </h2>
    </div>

    <!-- pc主体 -->
    <!-- 第一段 -->
    <div
      class="delay-710 mt-[8vh] sm:flex hidden animate-show h-[62vh] bg-white text-[rgb(131,95,56)] rounded-3xl overflow-hidden">
      <ul class="animate-show grow flex flex-col justify-center p-10 3xl:px-20">
        <li class="delay-[720ms]" :class="{ 'active-toggle': s3_active_idx === 1 }" @click="s3_active_idx = 1">
          <div class="flex justify-between items-center mb-6">
            <span class="text-xl font-medium">{{ $t("s3_2_1") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 1 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-base leading-8">
              {{ $t("s3_3_1") }}<br />{{ $t("s3_3_2") }}<br />{{ $t("s3_3_3")
              }}<br />{{ $t("s3_3_4") }}
              <div class=""></div>
            </div>
          </div>
        </li>

        <li class="delay-[730ms]" :class="{ 'active-toggle': s3_active_idx === 2 }" @click="s3_active_idx = 2">
          <div class="flex justify-between items-center my-6">
            <span class="text-xl font-medium">{{ $t("s3_4") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 2 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-base leading-8">
              {{ $t("s3_4_1") }}<br />{{ $t("s3_4_2") }}
            </div>
          </div>
        </li>

        <li class="delay-[740ms]" :class="{ 'active-toggle': s3_active_idx === 3 }" @click="s3_active_idx = 3">
          <div class="flex justify-between items-center my-6">
            <span class="text-xl font-medium">{{ $t("s3_6") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 3 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-base leading-8">
              {{ $t("s3_6_1") }}<br />{{ $t("s3_6_2") }}
            </div>
          </div>
        </li>

        <li class="delay-[750ms]" :class="{ 'active-toggle': s3_active_idx === 4 }" @click="s3_active_idx = 4">
          <div class="flex justify-between items-center my-6">
            <span class="text-xl font-medium">{{ $t("s3_7") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 4 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-base leading-8">
              {{ $t("s3_7_1") }}<br />{{ $t("s3_7_2") }}
            </div>
          </div>
        </li>

        <li class="delay-[760ms]" :class="{ 'active-toggle': s3_active_idx === 5 }" @click="s3_active_idx = 5">
          <div class="flex justify-between items-center my-6">
            <span class="text-xl font-medium">{{ $t("s3_5") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 5 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-base leading-7">
              {{ $t("s3_5_1") }}<br />{{ $t("s3_5_2") }}<br />{{ $t("s3_5_3") }}
            </div>
          </div>
        </li>
      </ul>

      <img loading="lazy" class="w-[380px] md:w-[450px] xl:w-[800px] 2xl:w-auto h-full object-cover object-center"
        src="~/assets/aboutjob.jpg" />
    </div>

    <!-- 移动主体 -->
    <div class="delay-700 sm:hidden block animate-show bg-white rounded-2xl px-6 py-6 mt-10">
      <ul class="flex flex-col justify-center items-center text-[19px] font-medium">
        <li class="border-b-2 border-[rgb(131,95,56)] pb-4 mb-6 w-full"
          :class="{ 'active-toggle': s3_active_idx === 1 }" @click="s3_active_idx = 1">
          <div class="flex justify-between items-center">
            <span>{{ $t("s3_2_1") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 1 }" />
          </div>
          <div class="expander mt-4">
            <div class="expander-content text-[13px] font-normal leading-[21px]">
              {{ $t("s3_3_1") }}<br />{{ $t("s3_3_2") }}<br />{{ $t("s3_3_3")
              }}<br />{{ $t("s3_3_4") }}
            </div>
          </div>
        </li>

        <li :class="{ 'active-toggle': s3_active_idx === 2 }" class="w-full mb-6" @click="s3_active_idx = 2">
          <div class="flex justify-between items-center">
            <span>{{ $t("s3_4") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 2 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-[13px] font-normal leading-[21px]">
              <div class="pt-4"></div>
              {{ $t("s3_4_1") }}<br />{{ $t("s3_4_2") }}
            </div>
          </div>
        </li>

        <li :class="{ 'active-toggle': s3_active_idx === 3 }" class="w-full mb-6" @click="s3_active_idx = 3">
          <div class="flex justify-between items-center">
            <span>{{ $t("s3_6") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 3 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-[13px] font-normal leading-[21px]">
              <div class="pt-4"></div>
              {{ $t("s3_6_1") }}<br />{{ $t("s3_6_2") }}
            </div>
          </div>
        </li>

        <li :class="{ 'active-toggle': s3_active_idx === 4 }" class="w-full mb-6"  @click="s3_active_idx = 4">
          <div class="flex justify-between items-center">
            <span>{{ $t("s3_7") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 4 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-[13px] font-normal leading-[21px]">
              <div class="pt-4"></div>
              {{ $t("s3_7_1") }}<br />{{ $t("s3_7_2") }}
            </div>
          </div>
        </li>

        <li :class="{ 'active-toggle': s3_active_idx === 5 }" class="w-full mb-6"  @click="s3_active_idx = 5">
          <div class="flex justify-between items-center">
            <span>{{ $t("s3_5") }}</span>
            <ChevronUpIcon class="w-6 transition" :class="{ 'rotate-180': s3_active_idx !== 5 }" />
          </div>
          <div class="expander">
            <div class="expander-content text-[13px] font-normal leading-[21px]">
              <div class="pt-4"></div>
              {{ $t("s3_5_1") }}<br />{{ $t("s3_5_2") }}<br />{{ $t("s3_5_3") }}
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>

  <picture>
    <source media="(max-width: 639px)" :srcset="makeImgHost('/mobile/bg-3-20231212.webp')" />
    <!-- 
    <source
      media="(min-width: 640px)"
      :srcset="makeImgHost('/bg3-20231212.jpg?imageMogr2/format/webp')"
      alt="业务内容介绍背景图片第三页_电脑版"
    />
  -->

    <source media="(min-width: 640px)" srcset="
        https://user0514.cdnw.net/shared/img/thumb/ai20246130000022image_TP_V.jpg
      " alt="业务内容介绍背景图片第三页_电脑版" />
    <img class="img-bg" :src="makeImgHost('/bg3-20231212.jpg?imageMogr2/format/webp')" alt="凭借光，重现光背景图片" />
  </picture>
</template>
