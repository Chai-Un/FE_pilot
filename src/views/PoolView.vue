<template>
  <div class="flex pt-6 pb-[48px] bg-neutral-300">
    <div
      class="flex flex-col pt-6 pb-8 w-[672px] mx-auto rounded-lg border border-blue-300 shadow bg-white"
    >
      <div class="flex flex-row px-6 mb-6 justify-between items-center">
        <span class="text-2xl font-bold">POOL</span>
        <div class="flex flex-row gap-2">
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
    </div>
  </div>
</template>


<script lang="ts" setup>
import Input from '@/components/Input/Input.vue'
</script>
