<template>
  <div class="flex flex-col">
    <div
      class="flex min-h-[72px] pt-5 pb-5 pl-[40px] pr-[40px] mdl:pt-5 mdl:pb-5 mdl:pl-[72px] mdl:pr-[72px] bg-neutral-900 justify-between items-center"
    >
      <img src="@/assets/logo.svg" alt="App logo" />
      <div class="flex flex-row justify-between items-center gap-12 font-semibold hidden md:flex">
        <span class="text-orange-900">POOL</span>
        <span class="text-neutral-500 hover:text-orange-900 hover:cursor-pointer">SWAP</span>
        <span class="text-neutral-500 hover:text-orange-900 hover:cursor-pointer">PORTFOLIO</span>
        <span class="text-neutral-500 hover:text-orange-900 hover:cursor-pointer">STONE</span>
        <span class="text-neutral-500 hover:text-orange-900 hover:cursor-pointer">DASHBOARD</span>
      </div>
      <span
        class="text-orange-900 rounded-full border-orange-900 border-[1px] justify-center text-sm font-semibold p-2 pt-1 pb-1 min-w-[160px] hidden md:flex hover:cursor-pointer"
      >
        Connect Wallet
      </span>
      <img class="show md:hidden" src="@/assets/menu.svg" alt="Menu" />
    </div>
    <news-and-tips></news-and-tips>
  </div>
</template>
<script lang="ts" setup>
import NewsAndTips from '@/components/Common/NewsAndTips.vue'
</script>
