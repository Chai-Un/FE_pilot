import { defineStore } from 'pinia'
import { ref } from 'vue'

export enum DepositSteps {
  STEP_1,
  STEP_2,
  STEP_3
}

export const useDepositStore = defineStore('deposit', () => {
  const currentStep = ref<DepositSteps>(DepositSteps.STEP_1)

  const changeStep = (step: DepositSteps) => {
    currentStep.value = step
  }

  return { currentStep, changeStep }
})
