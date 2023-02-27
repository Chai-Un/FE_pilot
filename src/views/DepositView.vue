<template>
  <div>
    <div
      class="relative flex flex-col w-full max-w-screen-lg p-0 my-[48px] mx-auto items-center z-1 flex-1 min-h-screen"
    >
      <Stepper :total-steps="3" :current-step="1" />
      <div
        class="m-0 min-w-0 pt-6 px-6 pb-8 max-w-[500px] w-full rounded-lg border border-solid border-neutral-200 bg-white shadow-md"
      >
        <div class="flex w-full items-center justify-between">
          <div class="back">
            <img src="@/assets/back.svg" alt="Back" />
          </div>
          <div class="font-medium text-2xl">Set Price Range</div>
          <span class="w-10 h-10"></span>
        </div>

        <div
          class="flex flex-col justify-start mt-4 mb-0 mx-0 min-w-0 pb-4 w-full items-center gap-y-1.5 text-center text-gray-500 border-solid border-b border-b-neutral-200"
        >
          <div class="font-normal text-sm">Earn more swap fees with narrow price range</div>
          <div
            class="font-semibold text-[13px] hover:cursor-pointer hover:underline hover:text-orange-500"
          >
            How to Calculate APR
          </div>
        </div>

        <div class="swap-options">
          <div>
            <img src="@/assets/back.svg" alt="Back" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Stepper from '../components/Common/Stepper.vue'
export default {
  name: 'DepositView',
  components: {
    Stepper
  }
}
</script>

<style lang="scss" scoped></style>
