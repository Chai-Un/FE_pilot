<template>
  <div class="input-wrapper" :class="classes">
    <slot name="input-prepend" />
    <input
      v-bind="$attrs"
      :value="modelValue"
      class="h-[32px] w-full focus:outline-none py-[10px]"
      @input="handleInput"
      :disabled="disabled"
    />
    <slot name="input-append" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits, withDefaults, computed } from 'vue'

interface Props {
  modelValue?: unknown
  hasError?: boolean
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  hasError: false,
  disabled: false
})

const emits = defineEmits(['update:modelValue', 'change'])

const handleInput = ($event: Event) => {
  emits('update:modelValue', ($event.target as HTMLInputElement).value)
  emits('change', ($event.target as HTMLInputElement).value)
}

const classes = computed<object>(() => ({
  'has-error': props.hasError,
  disabled: props.disabled
}))
</script>

<script lang="ts">
export default {
  name: 'PInput',
  inheritAttrs: false
}
</script>

<style lang="scss" scoped>
.input-wrapper {
  @apply w-full border-neutral-200 bg-neutral-100 border-[1px] rounded-md flex items-center px-3 gap-2 text-sm;
  input {
    @apply bg-transparent;
  }
}
.has-error {
  @apply border-red-600;
}
</style>
