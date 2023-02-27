import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import api from '@/services/api'

export interface Token {
  symbol: string
  address: string
  name: string
  decimals: number
  isStable: boolean
  isVerified: boolean
  price: number
  __typename: 'Token'
}

export interface Pool {
  address: string
  factoryAddress: string
  token0: Token
  token1: Token
  swapFee: number
  protocolFee: number
  tickSpacing: number
  totalValueLocked: number
  tradingVolume24H: number
  isVerified: boolean
  isVisible: boolean
  createdTime: number
  airdrops: any[]
  yieldVolume24H: number
  __typename: 'Pool'
}

export const usePoolStore = defineStore('pool', () => {
  const currentPools = ref<Pool[] | null>(null)

  const pools = computed(() => currentPools.value)

  const fetchPools = async () => {
    try {
      const { data } = await api.get<Pool[]>('polls')
      currentPools.value = data
    } catch (error) {
      console.error(error)
    }
  }

  return { currentPools, pools, fetchPools }
})
