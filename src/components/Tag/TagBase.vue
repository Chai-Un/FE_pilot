<template>
  <div
    class="flex h-[17px] rounded text-xxs text-neutral-900 border border-neutral-900 px-[6px] py-[2px]"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  name: 'PTagBase'
}
</script>
