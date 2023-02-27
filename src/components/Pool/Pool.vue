<template>
  <div class="flex flex-col py-4 px-6 gap-6">
    <div class="flex flex-row justify-between">
      <div class="flex items-center">
        <div class="flex gap-1 min-w-[52px]">
          <img
            class="rounded-full shadowed object-contain h-[24px] w-[24px]"
            src="@/assets/stone.svg"
            alt="Stone logo"
          />
          <img
            class="rounded-full shadowed object-contain h-[24px] w-[24px]"
            src="@/assets/tokens/klay.png"
            alt="Stone logo"
          />
        </div>
        <div class="flex flex-wrap items-center">
          <span class="flex flex-nowrap ml-2 sm:ml-4 font-semibold leading-[23px] pt-[2px]">
            {{ props.pool.token0.symbol }} / {{ props.pool.token1.symbol }}
          </span>
          <Tag class="ml-2 sm:ml-4 font-semibold">{{ props.pool.swapFee / 1000000 }}</Tag>
          <TagBase class="ml-2 font-semibold leading-[12px]">STONE</TagBase>
        </div>
      </div>
      <Button class="block h-[32px] sm:h-[24px]">Add</Button>
    </div>
    <div
      class="border-t border-t-neutral-200 pt-4 gap-2 sm:gap-4 flex flex-col sm:grid sm:grid-cols-[minmax(auto,_148px)_minmax(auto,_148px)_minmax(auto,_132px)]"
    >
      <div
        class="flex flex-row items-center sm:items-start justify-between sm:justify-start sm:flex-col gap-1 items-start pool-info"
      >
        <span class="text-xxs font-semibold text-neutral-500">avg. Total APR </span>
        <span class="text-lg font-semibold text-orange-900">{{
          (props.pool.tradingVolume24H / props.pool.totalValueLocked) * 100
        }}</span>
      </div>
      <div
        class="flex flex-row items-center sm:items-start justify-between sm:justify-start sm:flex-col gap-1 sm:gap-[6px] items-start pool-info"
      >
        <span class="text-xxs font-semibold text-neutral-500">Total Liquidity</span>
        <span class="text-lxs font-semibold text-neutral-500"
          >${{ props.pool.totalValueLocked }}
        </span>
      </div>
      <div
        class="flex flex-row items-center sm:items-start justify-between sm:justify-start sm:flex-col gap-1 sm:gap-[6px] items-start pool-info"
      >
        <span class="text-xxs font-semibold text-neutral-500">24h Volume</span>
        <span class="text-lxs font-semibold text-neutral-500"
          >${{ props.pool.tradingVolume24H }}</span
        >
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Pool } from '@/stores/pool'
import Tag from '@/components/Tag/Tag.vue'
import TagBase from '@/components/Tag/TagBase.vue'
import Button from '@/components/Button/Button.vue'

interface Props {
  pool: Pool
}
const props = defineProps<Props>()
</script>
<script lang="ts">
export default {
  name: 'PPool'
}
</script>

<style lang="scss" scoped>
.pool-info {
  @apply sm:pr-4 sm:border-r sm:border-neutral-200;
  &:last-child {
    @apply pr-0 border-none;
  }
}
</style>
