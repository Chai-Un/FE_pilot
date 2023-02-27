<template>
  <button
    :class="props.variant"
    v-bind="$attrs"
  >
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
interface Props {
  variant?: 'primary';
}
const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
});
</script>
<script lang="ts">
export default {
  name: 'PButton'
}
</script>
<style scoped lang='scss'>
.primary {
  @apply flex rounded text-lxs px-2 py-1 bg-orange-300 text-orange-900 hover:text-white hover:bg-orange-900 items-center justify-center;
}
.secondary-outlined {
  @apply flex rounded text-lxs font-semibold h-[32px] pr-3 pl-[6px] py-2 bg-neutral-100 text-neutral-900 border border-neutral-400 hover:text-orange-900 hover:border-orange-900 items-center justify-center;
}
</style>
