<template>
  <div class="flex flex-row items-center justify-center">
    <span class='least'>
      <Icon name='ic-paging-first' size='0 0 13 12' />
    </span>
    <span class='prev'>
      <Icon name='ic-paging-prev' size='0 0 7 12' />
    </span>
    <span class='text-neutral-600 text-xs font-semibold mx-2'>Page 1 of 19</span>
    <span class='next'>
      <Icon name='ic-paging-next' size='0 0 7 12' />
    </span>
    <span class='last'>
      <Icon name='ic-paging-last' size='0 0 13 12' />
    </span>
  </div>
</template>
<script lang="ts" setup>
import Icon from '@/components/Icon/Icon.vue'
</script>
<script lang="ts">
export default {
  name: 'PPagination',
}
</script>
<style lang='scss' scoped>
.least,
.prev,
.next,
.last {
  @apply w-[32px] h-[32px] flex items-center justify-center hover:cursor-pointer hover:text-orange-900;
}
</style>
