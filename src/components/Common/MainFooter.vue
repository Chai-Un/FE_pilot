<template>
  <div class="flex flex-row flex-wrap bg-neutral-900 py-[32px] px-[80px]">
    <div class="flex flex-row text-neutral-500 items-center">
      <Icon name="ic-logo" size="0 0 109 16" />
      <div class="flex flex-row gap-2">
        <span class="locale">ENG</span>
        <span class="locale">KOR</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Icon from '@/components/Icon/Icon.vue'
</script>
<script lang="ts">
export default {
  name: 'MainFooter'
}
</script>
<style scoped lang="scss">
.locale {
  @apply min-w-[62px] h-[32px] flex items-center justify-center
  font-semibold hover:text-orange-900 hover:cursor-pointer;
}
</style>
