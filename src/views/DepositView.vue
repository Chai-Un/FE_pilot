<template>
  <div
    class="relative flex flex-col w-full p-0 py-[48px] mx-auto items-center z-1 flex-1 min-h-screen bg-neutral-300"
  >
    <Stepper :total-steps="3" :current-step="1" />
    <div
      class="m-0 min-w-0 pt-6 px-6 pb-8 max-w-[500px] w-full rounded-lg border border-solid border-neutral-200 bg-white shadow-md"
    >
      <div class="flex w-full items-center justify-between">
        <div class="back" @click="() => router.push('/pool')">
          <img src="@/assets/back.svg" alt="Back" />
        </div>
        <div class="font-medium text-2xl">Set Price Range</div>
        <span class="w-10 h-10"></span>
      </div>

      <div
        class="flex flex-col justify-start mt-4 mb-0 mx-0 min-w-0 pb-4 w-full items-center gap-y-1.5 text-center text-gray-500 border-solid border-b border-b-neutral-200"
      >
        <div class="font-light text-sm">Earn more swap fees with narrow price range</div>
        <div
          class="font-semibold text-lxs hover:cursor-pointer hover:underline hover:text-orange-500"
        >
          <a href="https://docs.pangeaswap.com/v/en/guide/add-liquidity#apr" target="_blank">
            How to Calculate APR
          </a>
        </div>
      </div>

      <div class="swap-options">
        <div class="flex my-4 mx-0 min-w-0 py-4 px-2 justify-between flex-wrap">
          <div class="flex gap-x-1">
            <img src="@/assets/stone.svg" alt="Stone" class="flex w-6" />
            <img src="@/assets/tokens/klay.png" alt="KLAY" class="flex w-6" />
            <div class="ml-2 font-semibold text-medium">
              {{ poolStore.selectedPool?.token0.symbol }} /
              {{ poolStore.selectedPool?.token1.symbol }}
            </div>
          </div>
          <div
            class="bg-orange-400 text-lxs font-semibold justify-center p-1.5 text-orange-900 rounded leading-none"
          >
            {{ (poolStore.selectedPool?.swapFee || 0) / 10000 }}%
          </div>
        </div>

        <div class="grid gap-y-2 row-auto min-w-0 m-0">
          <!-- Active -->
          <button
            class="w-full p-4 bg-white rounded-lg border border-solid border-neutral-400 overflow-auto"
            :class="generateClass(PRICE_RANGE_TYPES.ACTIVE)"
            @click="selectPriceRange(PRICE_RANGE_TYPES.ACTIVE)"
          >
            <div class="flex h-[38px] justify-between items-center">
              <div class="font-medium text-[18px]">Active</div>
              <div class="w-[220px] ml-3 text-lxs font-normal text-start hidden description">
                <div>
                  Higher yields and higher risk <br />
                  Require frequent rebalancing
                </div>
              </div>
              <div class="w-[120px] flex justify-between items-center font-medium">
                <div class="text-sm">APR</div>
                <div class="text-lg">71.55%</div>
              </div>
            </div>
          </button>

          <!-- Passive -->
          <button
            class="w-full p-4 bg-white rounded-lg border border-solid border-neutral-400 overflow-auto"
            :class="generateClass(PRICE_RANGE_TYPES.PASSIVE)"
            @click="selectPriceRange(PRICE_RANGE_TYPES.PASSIVE)"
          >
            <div class="flex h-[38px] justify-between items-center">
              <div class="font-medium text-[18px]">Passive</div>
              <div class="w-[220px] ml-3 text-lxs font-normal text-start hidden description">
                <div>
                  Lower yields and lower risk <br />
                  Less frequent rebalancing
                </div>
              </div>
              <div class="w-[120px] flex justify-between items-center font-medium">
                <div class="text-sm">APR</div>
                <div class="text-lg">35.95%</div>
              </div>
            </div>
          </button>

          <!-- Custom -->
          <button
            class="w-full p-4 bg-white rounded-lg border border-solid border-neutral-400 overflow-auto"
            :class="generateClass(PRICE_RANGE_TYPES.CUSTOM)"
            @click="selectPriceRange(PRICE_RANGE_TYPES.CUSTOM)"
          >
            <div class="flex h-[38px] justify-between items-center">
              <div class="font-medium text-[18px]">Custom</div>
              <div class="w-[220px] ml-3 text-lxs font-normal text-start hidden description">
                <div>Recommended only if you understand concentrated liquidity</div>
              </div>
              <div class="w-[120px] flex justify-center items-center font-medium">
                <div>
                  <a
                    class="text-lxs hover:underline hidden guide"
                    href="https://docs.pangeaswap.com/v/en/guide/add-liquidity/add-liquidity-custom"
                    target="_blank"
                    >Read the guide</a
                  >
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      <!-- Custom Extra -->
      <template v-if="selectedPriceRange === PRICE_RANGE_TYPES.CUSTOM">
        <CustomPriceRange />
      </template>

      <button
        v-if="selectedPriceRange"
        class="w-full h-[64px] text-orange-800 bg-black px-4 py-6 text-center rounded-lg hover:text-orange-900 mt-4"
      >
        <div class="text-lg font-semibold">Next</div>
      </button>

      <button
        v-if="selectedPriceRange && selectedPriceRange === PRICE_RANGE_TYPES.CUSTOM"
        class="w-full h-[64px] text-neutral-500 px-4 py-6 text-center rounded-lg mt-4 bg-neutral-300"
      >
        <div class="text-lg font-medium">Invalid Range</div>
      </button>
      <div class="flex mt-4" v-if="selectedPriceRange === PRICE_RANGE_TYPES.CUSTOM">
        <div class="flex w-full gap-2 justify-center items-center">
          <Icon name="ic-warning" class="text-red-800" />
          <div class="text-lxs font-medium text-red-800">
            The min price must be lower than the max price.
          </div>
        </div>
      </div>
    </div>

    <div class="flex gap-x-1 items-center justify-center mt-6 mx-[38px] mb-[63px]">
      <div width="24px" height="24px" class="sc-bczRLJ sc-gsnTZi kuqsZg jnFvAE">
        <img src="@/assets/notice.svg" alt="Notice" />
      </div>
      <a
        class="color-neutral-600 text-lxs font-normal text-neutral-500 hover:text-orange-800 hover:underline"
        target="_blank"
        href="https://docs.pangeaswap.com/v/en/concentrated-liquidity/concentrated-liquidity-faq#what-happens-if-the-price-goes-above-or-below-my-position-limit"
      >
        What is the risk of providing liquidity within particular price ranges?
      </a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue'
import Stepper from '../components/Common/Stepper.vue'
import CustomPriceRange from '../components/CustomPriceRange/CustomPriceRange.vue'
import Icon from '@/components/Icon/Icon.vue'
import { usePoolStore } from '@/stores/pool'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const poolStore = usePoolStore()

enum PRICE_RANGE_TYPES {
  ACTIVE = 'ACTIVE',
  PASSIVE = 'PASSIVE',
  CUSTOM = 'CUSTOM'
}

const selectedPriceRange = ref<PRICE_RANGE_TYPES | null>(null)

const selectPriceRange = (type: PRICE_RANGE_TYPES) => {
  if (selectedPriceRange.value === type) selectedPriceRange.value = null
  else selectedPriceRange.value = type
}

const generateClass = (type: PRICE_RANGE_TYPES) => {
  return {
    selected: selectedPriceRange.value === type,
    'not-selected': selectedPriceRange.value && selectedPriceRange.value !== type
  }
}

onBeforeMount(async () => {
  if (!poolStore.selectedPool) {
    await poolStore.fetchPools()
    const selectedPool = poolStore.allPools.find((item) => item.address === route.params.address)
    if (selectedPool) {
      poolStore.selectPool(selectedPool)
    }
  }
})
</script>

<style lang="scss" scoped>
.swap-options {
  button {
    &.selected {
      @apply text-orange-800 bg-orange-300 border-orange-800;

      .description,
      .guide {
        display: inline;
      }
    }

    &.not-selected {
      @apply bg-white border-neutral-400 text-neutral-400;
    }

    &:not(.selected):hover {
      @apply border-orange-800 text-black;
      .description {
        display: inline;
      }
    }
  }
}
</style>
