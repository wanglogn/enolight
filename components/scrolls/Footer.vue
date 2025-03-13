<template>
  <!-- pc 和 sp 统一的 footer -->
  <div
    class="custom-width flex flex-col h-full justify-between animate-show pt-20 pb-8"
  >
    <span
      class="delay-500 text-[26px] md:text-[26px] text-base font-medium flex items-center before:flex-grow after:flex-grow before:h-[2px] md:before:h-[2px] before:h-[1px] before:bg-black after:h-[2px] md:after:h-[2px] after:h-[1px] after:bg-black before:mr-[58px] md:before:mr-[58px] before:mr-[12px] after:ml-[58px] md:after:ml-[58px] after:ml-[12px]"
    >
      {{ $t("footer_title_pc") }}</span
    >
    <!-- 用户信息表单和地图 -->
    <div class="delay-[800ms] mt-5 flex flex-col md:flex-row">
      <form class="space-y-4 w-full md:w-1/2">
        <div>
          <label for="company" class="block text-sm font-medium text-gray-700">
            会社名</label>
          <input
            type="text"
            id="company"
            name="company"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700"
            >姓名</label
          >
          <input
            type="text"
            id="name"
            name="name"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700"
            >邮箱</label
          >
          <input
            type="email"
            id="email"
            name="email"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >电话号码</label
          >
          <input
            type="tel"
            id="phone"
            name="phone"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700"
            >询问内容</label
          >
          <div class="mt-2 space-y-2">
            <div class="flex items-start">
              <input
                id="estimate"
                name="inquiry"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="estimate" class="ml-2 block text-sm text-gray-700"
                >見積もり依頼</label
              >
            </div>
            <div class="flex items-start">
              <input
                id="influencer"
                name="inquiry"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="influencer" class="ml-2 block text-sm text-gray-700"
                >インフルエンサーリスト請求</label
              >
            </div>
            <div class="flex items-start">
              <input
                id="service"
                name="inquiry"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="service" class="ml-2 block text-sm text-gray-700"
                >サービス内容について</label
              >
            </div>
            <div class="flex items-start">
              <input
                id="other"
                name="inquiry"
                type="checkbox"
                class="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label for="other" class="ml-2 block text-sm text-gray-700"
                >その他</label
              >
            </div>
          </div>
        </div>
        <div>
          <label for="message" class="block text-sm font-medium text-gray-700"
            >留言</label
          >
          <textarea
            id="message"
            name="message"
            rows="4"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            class="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            提交
          </button>
        </div>
      </form>
      <div
        class="hidden md:flex items-center justify-center mt-6 md:mt-0 md:ml-6 w-full md:w-1/2"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.970847742759!2d139.7782553152582!3d35.68095958019427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188bf5f1f1f1f1%3A0x1f1f1f1f1f1f1f1f!2s〒103-0025%20東京都中央区日本橋茅場町２丁目8−1!5e0!3m2!1sja!2sjp!4v1614232922824!5m2!1sja!2sjp&q=35.68095958019427,139.7782553152582&markers=color:red%7Clabel:C%7C35.68095958019427,139.7782553152582"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          class="rounded-md shadow-md"
        ></iframe>
      </div>
    </div>
    <Copyright class="delay-1000 w-full" />
  </div>
</template>

<script setup>
import Copyright from "~/components/Copyright.vue";
import Popover from "~/components/Popover.vue";
</script>
