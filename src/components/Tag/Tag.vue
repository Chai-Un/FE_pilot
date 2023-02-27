<template>
  <div
    class="flex h-[17px] bg-orange-400 rounded text-xxs text-orange-900 px-[6px] py-[2px]"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  name: 'PTag'
}
</script>
