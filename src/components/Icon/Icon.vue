<template>
  <SvgSprite
    v-if="props.height && props.width"
    :symbol="name"
    :size="size"
    :height="props.height"
    :width="props.width"
    role="presentation"
    class="inline icon"
    url="/static/icons/icons.svg"
  />
  <SvgSprite
    v-else
    :symbol="name"
    :size="size"
    role="presentation"
    class="inline icon"
    url="/static/icons/icons.svg"
  />
</template>

<script lang="ts" setup>
import { defineProps, withDefaults } from 'vue'

interface Props {
  name: string
  size?: string
  viewBox?: string
  height?: string
  width?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '0 0 24 24'
})
</script>

<script lang="ts">
export default {
  name: 'PIcon'
}
</script>
