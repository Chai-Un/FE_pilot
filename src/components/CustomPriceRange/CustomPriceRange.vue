<template>
  <div class="flex justify-start flex-col">
    <div
      class="justify-between w-full flex items-center m-0 mt-4 rounded-t-md border border-solid border-neutral-400 border-b-transparent pt-6 px-4 pb-4"
    >
      <button
        class="min-w-[116px] h-6 flex w-fit items-center rounded p-0 border-none cursor-pointer bg-neutral-400"
      >
        <div
          class="min-w-[58px] h-6 rounded px-1 py-2 justify-center items-center border border-solid border-neutral-400 bg-white flex"
        >
          <div class="font-semibold text-lxs">STONE</div>
        </div>
        <div
          class="min-w-[58px] h-6 rounded px-1 py-2 justify-center items-center border border-solid border-neutral-400 bg-neutral-400 flex"
        >
          <div class="font-semibold text-lxs text-neutral-600">KLAY</div>
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
    </div>
    <div class="grid auto-rows-auto gap-y-4 mt-4">
      <InputPrice />
      <InputPrice />
    </div>
    <div
      class="mt-4 grid auto-rows-auto gap-y-4 p-6 rounded-md border border-solid border-neutral-400"
    >
      <!-- <div class="h-6 justify-between flex w-full items-center">
        <div class="flex items-center gap-x-2">
          <div class="text-sm font-semibold text-neutral-500">Deposit Ratio</div>
          <div class="sc-tegty0-1 DvmOQ">
            <div class="sc-17suybh-0 fNPprW">
              <img src="@/assets/notice.svg" alt="Notice" />
            </div>
          </div>
        </div>
        <div class="text-sm font-medium text-neutral-500 text-end">
          49.9% STONE <br />/ 50.1% KLAY
        </div>
      </div> -->

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
          {{ calculatorPercentRatio(34.0498, 34.0498 + 52.1332) }} STONE Test<br />/
          {{ calculatorPercentRatio(52.1332, 34.0498 + 52.1332) }} KLAY Test
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
          {{ `X${genRandFeeBoost(9, 12)}` }}
        </div>
      </div>

      <div class="h-6 justify-between flex w-full items-center">
        <div class="flex items-center gap-x-2">
          <div class="text-sm font-semibold">Estimated APR</div>
        </div>
        <!-- <div class="text-lg font-medium font-bold text-end">68.67%</div> -->
        <div class="text-lg font-medium font-bold text-end">{{ calculatorEstimatedAPR(1, 2) }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import InputPrice from '../InputPrice/InputPrice.vue'
import { calculatorPercentRatio, genRandFeeBoost, calculatorEstimatedAPR } from '@/utils/helper'
</script>
<style lang="scss" scoped></style>
