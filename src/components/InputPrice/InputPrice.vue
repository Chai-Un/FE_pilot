<template>
  <div
    class="w-full flex h-[80px] p-4 pl-6 rounded-md border border-solid bg-neutral-100"
    :class="{ 'border-orange-800 bg-orange-300': isFocus, 'border-neutral-100': !isFocus }"
  >
    <div class="flex justify-between w-full">
      <div class="align-baseline grid auto-rows-auto gap-y-2 w-[calc(100%-100px)]">
        <div class="gap-2 flex w-full align-center justify-start">
          <div class="text-sm font-medium text-orange-900">Min Price</div>
          <div class="text-[10px] font-medium text-neutral-500">KLAY per 1 STONE</div>
        </div>
        <input
          inputmode="decimal"
          id="min-price-input"
          class="text-lg bg-transparent font-semibold outline-none border-none overflow-hidden caret-orange-900 p-0"
          autocomplete="off"
          autocorrect="off"
          pattern="^[0-9]*[.,]?[0-9]*$"
          placeholder="0.0"
          minlength="1"
          maxlength="79"
          spellcheck="false"
          type="number"
          @focus="isFocus = true"
          @blur="isFocus = false"
        />
      </div>
      <div class="w-[68px] gap-1 flex align-center justify-start items-center">
        <button class="w-8 h-8 rounded-[5px] border border-solid border-transparent">
          <img src="@/assets/abstract.svg" alt="Abstract" />
        </button>
        <button class="w-8 h-8 rounded-[5px] border border-solid border-transparent">
          <img src="@/assets/plus.svg" alt="Abstract" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const isFocus = ref<boolean>(false)
</script>
<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
