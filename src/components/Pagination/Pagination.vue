<template>
  <div class="flex flex-row items-center justify-center">
    <span class="least" :class="{ disabled: !props.canPrev }" @click="emits('start')">
      <Icon name="ic-paging-first" size="0 0 13 12" />
    </span>
    <span class="prev" :class="{ disabled: !props.canPrev }" @click="emits('prev')">
      <Icon name="ic-paging-prev" size="0 0 7 12" />
    </span>
    <span class="text-neutral-600 text-xs font-semibold mx-2"
      >Page {{ props.page + 1 }} of {{ totalPage }}
    </span>
    <span class="next" :class="{ disabled: !props.canNext }" @click="emits('next')">
      <Icon name="ic-paging-next" size="0 0 7 12" />
    </span>
    <span class="last" :class="{ disabled: !props.canNext }" @click="emits('last')">
      <Icon name="ic-paging-last" size="0 0 13 12" />
    </span>
  </div>
</template>
<script lang="ts" setup>
import { defineEmits } from 'vue'
import Icon from '@/components/Icon/Icon.vue'
import { Paging } from '@/stores/pool'

interface Props extends Paging {
  totalPage: number
  page: number
  canNext: boolean
  canPrev: boolean
}
const props = defineProps<Props>()
const emits = defineEmits(['next', 'prev', 'start', 'last'])
</script>
<script lang="ts">
export default {
  name: 'PPagination'
}
</script>
<style lang="scss" scoped>
.least,
.prev,
.next,
.last {
  @apply w-[32px] h-[32px] flex items-center justify-center hover:cursor-pointer hover:text-orange-900;
  &.disabled {
    pointer-events: none;
    @apply text-neutral-400;
  }
}
</style>
