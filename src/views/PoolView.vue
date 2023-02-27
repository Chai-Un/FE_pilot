<template>
  <div class="flex flex-col gap-6 pt-6 pb-[48px] bg-neutral-300">
    <div
      class="flex flex-col pt-6 pb-8 w-full max-w-[672px] mx-auto rounded-lg border border-blue-300 shadow bg-white"
    >
      <div
        class="flex flex-col sm:flex-row px-6 mb-6 gap-6 justify-between items-start sm:items-center"
      >
        <span class="text-2xl font-bold">POOL</span>
        <div class="flex flex-row gap-2 w-[100%] sm:w-auto">
          <Input placeholder="Token name">
            <template #input-prepend>
              <img class="w-[16px] h-[16px]" src="@/assets/search.svg" alt="Sort Icon" />
            </template>
          </Input>
          <div
            class="flex rounded-md min-w-[32px] min-h-[32px] items-center justify-center border border-neutral-400 hover:cursor-pointer"
          >
            <img class="w-[20px] h-[20px]" src="@/assets/sort.svg" alt="Sort Icon" />
          </div>
        </div>
      </div>
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
                STONE / KLAY
              </span>
              <Tag class="ml-2 sm:ml-4 font-semibold">0.2%</Tag>
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
            <span class="text-lg font-semibold text-orange-900">164.4%</span>
          </div>
          <div
            class="flex flex-row items-center sm:items-start justify-between sm:justify-start sm:flex-col gap-1 sm:gap-[6px] items-start pool-info"
          >
            <span class="text-xxs font-semibold text-neutral-500">Total Liquidity</span>
            <span class="text-lxs font-semibold text-neutral-500">$315,130 </span>
          </div>
          <div
            class="flex flex-row items-center sm:items-start justify-between sm:justify-start sm:flex-col gap-1 sm:gap-[6px] items-start pool-info"
          >
            <span class="text-xxs font-semibold text-neutral-500">24h Volume</span>
            <span class="text-lxs font-semibold text-neutral-500">$57,673</span>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full max-w-[672px] m-auto px-4 grid grid-cols-1 sm:grid-cols-3">
      <div class="flex justify-start">
        <Button variant="secondary-outlined" class="gap-1">
          <Icon name="ic-plus" size="0 0 24 24" />
          Create
        </Button>
      </div>
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Input from '@/components/Input/Input.vue'
import Tag from '@/components/Tag/Tag.vue'
import TagBase from '@/components/Tag/TagBase.vue'
import Button from '@/components/Button/Button.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import Icon from '@/components/Icon/Icon.vue'
</script>

<style lang="scss" scoped>
.pool-info {
  @apply sm:pr-4 sm:border-r sm:border-neutral-200;
  &:last-child {
    @apply pr-0 border-none;
  }
}
</style>
