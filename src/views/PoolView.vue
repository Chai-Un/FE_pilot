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
          <Input
            placeholder="Token name"
            class="focus:text-orange-900"
            @change="handleTextSearch($event)"
            v-model="textSearch"
          >
            <template #input-prepend>
              <Icon size="0 0 16 16" name="ic-search" />
            </template>
          </Input>
          <div
            class="flex rounded-md min-w-[32px] min-h-[32px] items-center justify-center border border-neutral-400 hover:cursor-pointer"
          >
            <img class="w-[20px] h-[20px]" src="@/assets/sort.svg" alt="Sort Icon" />
          </div>
        </div>
      </div>
      <Pool
        v-for="(item, index) in poolStore.pools"
        :key="'pool' + index"
        :pool="item"
        @selectPool="selectPool($event)"
      />
    </div>
    <div class="w-full max-w-[672px] m-auto px-4 grid grid-cols-1 sm:grid-cols-3">
      <div class="flex justify-start">
        <Button variant="secondary-outlined" class="gap-1">
          <Icon name="ic-plus" size="0 0 24 24" />
          Create
        </Button>
      </div>
      <Pagination
        v-if="poolStore.totalPage"
        :page="poolStore.paging.page"
        :canNext="poolStore.paging.canNext"
        :canPrev="poolStore.paging.canPrev"
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
import { onBeforeMount, ref } from 'vue'
import { usePoolStore, type Pool as IPool } from '@/stores/pool'
import Input from '@/components/Input/Input.vue'
import Button from '@/components/Button/Button.vue'
import Pagination from '@/components/Pagination/Pagination.vue'
import Icon from '@/components/Icon/Icon.vue'
import Pool from '@/components/Pool/Pool.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const poolStore = usePoolStore()
const textSearch = ref('')

const selectPool = (pool: IPool) => {
  poolStore.selectPool(pool)
  router.push(`/pool/${pool.address}`)
}
const handleTextSearch = ($event: any) => {
  poolStore.setTextSearch($event)
}

onBeforeMount(async () => {
  await poolStore.fetchPools()
  textSearch.value = poolStore.textSearch
})
</script>
