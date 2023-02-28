<template>
  <div
    class="w-full flex h-[80px] p-4 pl-6 rounded-md border border-solid bg-neutral-100"
    :class="{ 'border-orange-800 bg-orange-300': isFocus, 'border-neutral-100': !isFocus }"
  >
    <div class="flex justify-between w-full">
      <div class="align-baseline grid auto-rows-auto gap-y-2 w-[calc(100%-100px)]">
        <div class="gap-2 flex w-full align-center justify-start">
          <div class="text-sm font-medium text-orange-900">{{ type }} Price</div>
          <div class="text-[10px] font-medium text-neutral-500">
            <!-- TODO: -->
            <!-- {{ token0.symbol }} per 1 {{ token1.symbol }} -->
            A per 1 B
          </div>
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
          v-model="price"
        />
      </div>
      <div class="w-[68px] gap-1 flex align-center justify-start items-center">
        <button
          class="w-8 h-8 rounded-[5px] border border-solid border-transparent"
          @click="changePrice()"
          @blur="isFocus = false"
        >
          <Icon name="ic-abstract" class="hover:text-orange-800 hover:fill-orange-800" />
        </button>
        <button
          class="w-8 h-8 rounded-[5px] border border-solid border-transparent"
          @click="changePrice('PLUS')"
          @blur="isFocus = false"
        >
          <Icon name="ic-plus" class="hover:text-orange-800 hover:fill-orange-800" />
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
type METRIC = 'ABSTRACT' | 'PLUS'

const props = defineProps(['price', 'type'])
const emit = defineEmits(['update:price'])

const price = computed({
  get() {
    return props.price
  },
  set(value) {
    emit('update:price', value)
  }
})

const isFocus = ref<boolean>(false)
const changePrice = (type: METRIC = 'ABSTRACT') => {
  isFocus.value = true
  if (!price.value && type === 'ABSTRACT') return
  else emit('update:price', calculatePrice(type))
}

const calculatePrice = (method: METRIC, tokenIndent = 1) => {
  const indent = tokenIndent
  return method === 'ABSTRACT' ? price.value - indent : price.value + indent
}
</script>
<style lang="scss" scoped>
input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
