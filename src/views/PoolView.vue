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
      <Pool v-for="(item, index) in poolStore.pools" :key="'pool' + index" :pool="item" />
    </div>
    <div class="w-full max-w-[672px] m-auto px-4 grid grid-cols-1 sm:grid-cols-3">
      <div class="flex justify-start">
        <Button variant="secondary-outlined" class="gap-1">
          <Icon name="ic-plus" size="0 0 24 24" />
          Create
        </Button>
      </div>
      <Pagination
        :page="poolStore.currentPaging.page"
        :canNext="poolStore.currentPaging.canNext"
        :canPrev="poolStore.currentPaging.canPrev"
        :totalPage="poolStore.totalPage"
        @next="poolStore.nextPage"
        @prev="poolStore.prevPage"
        @start="poolStore.startPage"
        @last="poolStore.lastPage"
      >
      </Pagination>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { usePoolStore } from '@/stores/pool'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import Icon from '@/components/Icon/Icon.vue'
import Pool from '@/components/Pool/Pool.vue'

const poolStore = usePoolStore()

onBeforeMount(async () => {
  await poolStore.fetchPools()
})
</script>
