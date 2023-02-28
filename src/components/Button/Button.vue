<template>
  <button
    class="flex rounded text-lxs px-2 py-1 bg-orange-300 text-orange-900 hover:text-white hover:bg-orange-900 items-center justify-center"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup></script>
<script lang="ts">
export default {
  name: 'PButton'
}
</script>
