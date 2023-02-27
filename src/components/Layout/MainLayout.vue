<template>
  <MainHeader></MainHeader>
  <router-view />
  <MainFooter></MainFooter>
</template>
<script lang="ts" setup>
import MainHeader from '@/components/Common/MainHeader.vue'
import MainFooter from '@/components/Common/MainFooter.vue'
</script>
