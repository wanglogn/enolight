<template>
  <!-- pc 和 sp 统一的 footer -->
  <div
    class="custom-width flex flex-col h-full justify-between animate-show sm:pt-20 sm:pb-8 pt-4"
  >
    <span
      class="delay-500 text-[26px] md:text-[26px] text-base font-medium flex items-center before:flex-grow after:flex-grow before:h-[2px] md:before:h-[2px] before:h-[1px] before:bg-black after:h-[2px] md:after:h-[2px] after:h-[1px] after:bg-black before:mr-[58px] md:before:mr-[58px] before:mr-[12px] after:ml-[58px] md:after:ml-[58px] after:ml-[12px] pt-[60px] sm:pt-0"
    >
      {{ $t("footer_title_pc") }}</span
    >
    <!-- 用户信息表单 -->
    <div class="delay-[800ms] sm:mt-5 flex justify-center pt-2">
      <form @submit.prevent="handleSubmit" class="sm:space-y-4 w-full md:w-3/5">
        <div>
          <label for="company" class="block text-sm font-medium text-gray-700">
            {{ $t("company") }}<span class="text-red-500">*</span></label
          >
          <input
            type="text"
            id="company"
            name="company"
            v-model="form.company"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">{{
            $t("name")
          }}<span class="text-red-500">*</span></label>
          <input
            type="text"
            id="name"
            name="name"
            v-model="form.name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">{{
            $t("email")
          }}<span class="text-red-500">*</span></label>
          <input
            type="email"
            id="email"
            name="email"
            v-model="form.email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700">{{
            $t("phone")
          }}<span class="text-red-500">*</span></label>
          <input
            type="tel"
            id="phone"
            name="phone"
            v-model="form.phone"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700">{{
            $t("inquiry")
          }}</label>
          <div
            class="mt-2 sm:space-y-2 grid grid-rows-2 grid-flow-col gap-2 sm:flex flex-col"
          >
            <div class="flex items-start">
              <input
                id="estimate"
                name="inquiry"
                type="checkbox"
                v-model="form.inquiry.estimate"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="estimate" class="ml-2 block text-sm text-gray-700">{{
                $t("estimate")
              }}</label>
            </div>
            <div class="flex items-start">
              <input
                id="influencer"
                name="inquiry"
                type="checkbox"
                v-model="form.inquiry.influencer"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                for="influencer"
                class="ml-2 block text-sm text-gray-700"
                >{{ $t("influencer") }}</label
              >
            </div>
            <div class="flex items-start">
              <input
                id="service"
                name="inquiry"
                type="checkbox"
                v-model="form.inquiry.service"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="service" class="ml-2 block text-sm text-gray-700">{{
                $t("service")
              }}</label>
            </div>
            <div class="flex items-start">
              <input
                id="other"
                name="inquiry"
                type="checkbox"
                v-model="form.inquiry.other"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="other" class="ml-2 block text-sm text-gray-700">{{
                $t("other")
              }}</label>
            </div>
          </div>
        </div>
        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700 relative"
            >{{ $t("message") }}</label
          >
          <textarea
            id="message"
            name="message"
            v-model="form.message"
            sm:rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 overflow-auto resize-none"
            @blur="handleInputBlur"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full inline-flex justify-center py-2 px-4 border shadow-sm text-sm font-medium rounded-md text-black border-[2px] border-[#b2b2b2] bg-[#ffffff] hover:bg-[rgba(237,237,237,0.3)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {{ $t("submit") }}
          </button>
        </div>
      </form>
    </div>
    <Copyright class="delay-[800ms] w-full" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import Copyright from "~/components/Copyright.vue";
const { $message } = useNuxtApp()
import { useI18n } from "vue-i18n";
const { t } = useI18n();

const form = ref({
  company: "",
  name: "",
  email: "",
  phone: "",
  inquiry: {
    estimate: false,
    influencer: false,
    service: false,
    other: false,
  },
  message: "",
});

const handleInputBlur = () => {
  // 当输入框失去焦点时，滚动页面回到顶部
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleSubmit = async () => {
  // 收集未填写的字段
  const missingFields = [];

  if (!form.value.company) {
    missingFields.push(t("company_name"));
  }
  if (!form.value.name) {
    missingFields.push(t("name"));
  }
  if (!form.value.email) {
    missingFields.push(t("email"));
  }
  if (!form.value.phone) {
    missingFields.push(t("phone"));
  }

  // 如果有未填写的字段，显示提示
  if (missingFields.length > 0) {
    $message.error(`${t("message_tip")}：${missingFields.join("、")}`)
    return;
  }
  try {
    const formData = new URLSearchParams();
    formData.append("company", form.value.company);
    formData.append("name", form.value.name);
    formData.append("email", form.value.email);
    formData.append("phone", form.value.phone);
    formData.append("message", form.value.message);

    // 处理多选框，将所有选中的选项添加到 formData 中
    const inquiries = [];
    Object.keys(form.value.inquiry).forEach((key) => {
      if (form.value.inquiry[key]) {
        inquiries.push(key); // 这里的 key 就是复选框的名称
      }
    });
    formData.append("inquiry", inquiries.join(","));

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbxacZ-oH4ozRRT1mvDvPndkjoAYUIHMBLcBXmINfMkYrnMHTPNU-O2QzEFMQ-lEz1p8/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );
    $message.success(t("message_success"),()=>{

      // 提交成功后清空表单数据
      form.value = {
        company: "",
        name: "",
        email: "",
        phone: "",
        inquiry: {
          estimate: false,
          influencer: false,
          service: false,
          other: false,
        },
        message: "",
      };
    });
  } catch (error) {
    $message.error(t("message_error"))
  }
};
</script>
