<template>
  <div
    class="relative animate-show custom-width text-black h-full flex-col justify-center items-start "
  >
    <h2
      class="delay-[600ms] font-normal text-[30px] delay-500 sm:text-[40px] pt-40 pt-14 border-b-2 pb-4"
    >
      {{ $t("company_conent") }}
    </h2>

     <!-- 标题 -->
    
  <div class="flex flex-row justify-start items-start  pt-10">
    <div class="flex flex-col w-[150px] gap-y-14 sm:[300px] sm:gap-y-12 animate-show">
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg ">
        {{ $t("company_name") }}
      </div>
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
        {{ $t("IP") }}
      </div>
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
        {{ $t("CEO") }}
      </div>
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
        {{ $t("plus1") }}
      </div>
    </div>

    <!-- 内容 -->
    <div class="flex flex-col  gap-y-8 w-[250px] sm:w-full sm:gap-y-10 animate-show">
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
        {{ $t("s6_hero") }}
      </div>
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
        {{ $t("address1") }}<br>{{ $t("address2") }}
      </div>
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
        {{ $t("CEOname") }}
      </div>
      <div class="delay-[600ms] font-normal sm:text-[20px] text-lg">
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