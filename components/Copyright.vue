<template>
  <div class="custom-width">
    <!-- pc -->
    <div class="hidden sm:flex items-center justify-between text-xs text-black">
      <div class="flex space-x-5">
        <span>Copyright &copy; 2025 EnoLight </span>
       
      </div>

      <div>
        <a href="/privacy">
          <span>隐私协议</span>
        </a>
        <span class="mx-1">|</span>
        <a href="/protocol">
          <span>用户协议</span>
        </a>
      </div>
    </div>

    <!-- 移动 -->
    <div class="sm:hidden flex flex-col items-center text-[10px]">
      <div class="text-black mb-5">
        <a href="/privacy">
          <span>隐私协议</span>
        </a>
        <span class="mx-1">|</span>
        <a href="/protocol">
          <span>用户协议</span>
        </a>
      </div>

      <span class="text-black opacity-50 mb-3"
        >Copyright &copy; 2025 EnoLight
      </span>

      
    </div>
  </div>
</template>
