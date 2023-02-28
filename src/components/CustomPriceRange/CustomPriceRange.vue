<template>
  <div class="flex justify-start flex-col">
    <div
      class="justify-between w-full flex items-center m-0 mt-4 rounded-t-md border border-solid border-neutral-400 border-b-transparent pt-6 px-4 pb-4"
    >
      <button
        class="min-w-[116px] h-6 flex w-fit items-center rounded p-0 border-none cursor-pointer bg-neutral-400"
      >
        <div
          class="min-w-[58px] h-6 rounded px-1 py-2 justify-center items-center border border-solid border-neutral-400 flex"
          :class="{ 'bg-white': !swithToken, 'bg-neutral-400': swithToken }"
          @click="swithToken = !swithToken"
        >
          <div class="font-medium text-lxs" :class="{ 'text-neutral-600': swithToken }">STONE</div>
        </div>
        <div
          class="min-w-[58px] h-6 rounded px-1 py-2 justify-center items-center border border-solid border-neutral-400 flex"
          :class="{ 'bg-white': swithToken, 'bg-neutral-400': !swithToken }"
          @click="swithToken = !swithToken"
        >
          <div class="font-medium text-lxs" :class="{ 'text-neutral-600': !swithToken }">KLAY</div>
        </div>
      </button>

      <button
        class="h-6 flex items-center justify-center py-1 px-2 text-center text-neutral-600 rounded border border-solid border-neutral-400 hover:text-orange-800 hover:border-orange-800"
      >
        <div class="font-medium text-lxs">Full Range</div>
      </button>
    </div>
    <div
      class="relative p-4 border border-solid border-b-1.5 flex flex-col w-full border-neutral-400 h-fit place-content-center rounded-b-md"
    >
      <div class="w-full">
        <div class="text-center justify-center">
          <div class="grid justify-center gap-y-1 mb-4">
            <div class="text-sm font-medium">Current Price</div>
            <div class="text-4.5 font-medium">1 STONE = 37.0877 KLAY</div>
          </div>
        </div>
      </div>

      <div class="flex justify-between">
        <div class="flex gap-x-1">
          <button>
            <Icon
              name="ic-zoom-in"
              class="w-8 h-8 border rounded p-1 bg-neutral-100 text-neutral-500 hover:text-white hover:bg-orange-800"
            />
          </button>
          <button>
            <Icon
              name="ic-zoom-out"
              class="w-8 h-8 border rounded p-1 bg-neutral-100 text-neutral-500 hover:text-white hover:bg-orange-800"
            />
          </button>
        </div>
        <button>
          <Icon
            name="ic-reset"
            class="w-8 h-8 border rounded p-1 bg-neutral-100 text-neutral-500 hover:text-white hover:bg-orange-800"
          />
        </button>
      </div>
    </div>
    <div class="grid auto-rows-auto gap-y-4 mt-4">
      <InputPrice v-model:price="minPrice" :type="'Min'" />
      <InputPrice v-model:price="maxPrice" :type="'Max'" />
    </div>
    <div
      class="mt-4 grid auto-rows-auto gap-y-4 p-6 rounded-md border border-solid border-neutral-400"
      :class="{
        'opacity-20 p-6 border rounded-md border-solid border-neutral-200 bg-white':
          minPrice > maxPrice
      }"
    >
      <div class="h-6 justify-between flex w-full items-center">
        <div class="flex items-center gap-x-2">
          <div class="text-sm font-semibold text-neutral-500">Deposit Ratio</div>
          <div class="sc-tegty0-1 DvmOQ">
            <div class="sc-17suybh-0 fNPprW">
              <img src="@/assets/notice.svg" alt="Notice" />
            </div>
          </div>
        </div>
        <div class="text-sm font-medium text-neutral-500 text-end">
          {{ maxPrice > minPrice? `49.9% STONE <br />/ 50.1% KLAY` : '-' }}
        </div>
      </div>

      <div class="h-6 justify-between flex w-full items-center">
        <div class="flex items-center gap-x-2">
          <div class="text-sm font-semibold text-neutral-500">Fee Boost</div>
          <div class="sc-tegty0-1 DvmOQ">
            <div class="sc-17suybh-0 fNPprW">
              <img src="@/assets/notice.svg" alt="Notice" />
            </div>
          </div>
        </div>
        <div class="text-sm font-medium text-neutral-500 text-end">
          {{ maxPrice > minPrice ? `X9.90` : '-' }}
        </div>
      </div>

      <div class="h-6 justify-between flex w-full items-center">
        <div class="flex items-center gap-x-2">
          <div class="text-sm font-semibold">Estimated APR</div>
        </div>
        <div class="text-lg font-medium font-bold text-end">
          {{ maxPrice > minPrice ? `68.67%` : '-' }}
        </div>
      </div>
    </div>

    <div v-if="checkEstimateAPR()" class="flex justify-start p-4 mt-4">
      <div class="grid gap-x-1 max-w-full auto-rows-auto">
        <div class="gap-2 flex align-center justify-start w-full">
          <Icon name="ic-warning" class="text-red-800" />
          <div class="text-red-800 text-sm font-medium">Cannot Receive Fees.</div>
        </div>
        <div class="pl-8">
          <div class="font-medium text-lxs text-neutral-500">
            Your position will be able to earn fees or be used in trades after the current price
            moves into your range.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import InputPrice from '../InputPrice/InputPrice.vue'
import Icon from '@/components/Icon/Icon.vue'

const minPrice = ref(400)
const maxPrice = ref(500)
const swithToken = ref(false)

const checkEstimateAPR = () => {
  return true
}
</script>
<style lang="scss" scoped></style>
