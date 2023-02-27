<template>
  <div class="m-w-0 mb-6 mx-0 flex-col w-full flex item-centers">
    <ol
      class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-base gap-x-1 justify-center"
    >
      <li
        v-for="(item, index) in totalSteps"
        class="flex items-center m-[0px] min-w-[0px] w-[52px] h-[4px] bg-neutral-200"
        :class="{ activated: index + 1 <= currentStep }"
        :key="index"
      ></li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  totalSteps: number
  currentStep: number
}>()
</script>

<style lang="scss" scoped>
li {
  &.activated {
    @apply bg-orange-600;
  }
}
</style>
