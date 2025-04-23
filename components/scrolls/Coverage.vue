<template>
  <div
    class="relative animate-show custom-width text-black h-full flex-col justify-center items-start "
  >
    <h2
      class="delay-[600ms] font-normal text-[30px] delay-500 sm:text-[40px] pt-20 sm:pt-40  border-b-2 pb-4"
    >
      {{ $t("company_conent") }}
    </h2>

     <!-- 标题 -->
    <div class="flex flex-col justify-start items-start pt-10">
      <!-- list-div 1/4 -->
      <div class="flex flex-row gap-x-8 animate-show">
        <!-- right 1/2 -->
        <div class="delay-[600ms]  font-normal w-[100px] sm:w-[150px] sm:text-[20px] text-lg flex justify-between items-start">
          {{ $t("company_name") }}
        </div>
        <!-- left 2/2 -->
        <div class="delay-[600ms] w-[210px] sm:w-[600px] font-normal sm:text-[20px] text-lg flex justify-between items-start">
        {{ $t("s6_hero") }}
        </div>
      </div>
      <!-- list-div 2/4 -->
      <div class="flex flex-row gap-x-8 pt-10 sm:pt-12 animate-show">
        <!-- right 1/2 -->
        <div class="delay-[600ms] pt-[20px] font-normal w-[100px] sm:w-[150px] sm:text-[20px] text-lg flex justify-between items-start" >
        {{ $t("IP") }}
        </div>
        <!-- left 2/2 -->
        <div class="delay-[600ms] w-[210px] sm:w-[600px]  font-normal sm:text-[20px] text-lg flex justify-between items-start">
        {{ $t("address1") }} <br>{{ $t("address2") }}
        </div>
      </div>
      <!-- list-div 3/4 -->
      <div class="flex flex-row gap-x-8 pt-10 sm:pt-12 animate-show">
        <!-- right 1/2 -->
        <div class="delay-[600ms]  w-[100px] sm:w-[150px]  font-normal sm:text-[20px] text-lg flex justify-between items-start">
        {{ $t("CEO") }}
        </div>
        <!-- left 2/2 -->
        <div class="delay-[600ms] w-[210px] sm:w-[600px]  font-normal sm:text-[20px] text-lg flex justify-between items-start">
        {{ $t("CEOname") }}
        </div>
      </div>
      <!-- list-div 4/4 -->
      <div class="flex flex-row gap-x-8 pt-10 sm:pt-12 animate-show">
        <!-- right 1/2 -->
        <div class="delay-[600ms] w-[100px] sm:w-[150px] font-normal sm:text-[20px] text-lg flex justify-between items-start">
        {{ $t("plus1") }}
        </div>
        <!-- left 2/2 -->
        <div class="delay-[600ms] w-[210px] sm:w-[1000px] font-normal sm:text-[20px] text-lg flex justify-between items-start">
        {{ $t("plus1-1") }}
        </div>

      </div>
    </div>
  </div>
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