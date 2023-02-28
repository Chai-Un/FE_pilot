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

export interface Paging {
  page: number
  limit: number
  canNext: boolean
  canPrev: boolean
}

export const usePoolStore = defineStore('pool', () => {
  const currentPools = ref<Pool[]>([])
  const paging = ref<Paging>({
    page: 0,
    limit: 10,
    canNext: false,
    canPrev: false
  })

  const currentPaging = computed(() => paging.value)
  const pools = computed(() => {
    const data = [...currentPools.value]
    return data.splice(paging.value.page * paging.value.limit, paging.value.limit)
  })
  const totalPage = computed(() => Math.round(currentPools.value.length / paging.value.limit))

  const fetchPools = async () => {
    try {
      const { data } = await api.get<Pool[]>('polls')
      currentPools.value = data
      const { page, limit } = paging.value
      paging.value.canNext = page * limit <= data.length
      paging.value.canPrev = false
    } catch (error) {
      console.error(error)
    }
  }

  const nextPage = () => {
    if (!paging.value.canNext) return
    paging.value.page += 1
    const { page, limit } = paging.value
    paging.value.canNext = currentPools.value.length - (page + 1) * limit > 0
    paging.value.canPrev = true
  }

  const prevPage = () => {
    if (!paging.value.canPrev) return
    paging.value.page -= 1
    paging.value.canPrev = paging.value.page > 0
    paging.value.canNext = true
  }

  const startPage = () => {
    if (!paging.value.canPrev) return
    paging.value.page = 0
    paging.value.canPrev = false
    const { page, limit } = paging.value
    paging.value.canNext = currentPools.value.length - (page + 1) * limit > 0
  }

  const lastPage = () => {
    if (!paging.value.canNext) return
    const { limit } = paging.value
    const totalLength = currentPools.value.length
    paging.value.page =
      totalLength % limit !== 0
        ? Math.floor(totalLength / limit)
        : Math.floor(totalLength / limit) - 1
    paging.value.canPrev = paging.value.page > 0
    paging.value.canNext = false
  }

  return {
    currentPools,
    pools,
    currentPaging,
    fetchPools,
    nextPage,
    prevPage,
    startPage,
    lastPage,
    totalPage
  }
})
