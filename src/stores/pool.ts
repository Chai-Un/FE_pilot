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

export interface PoolState {
  allPools: Pool[]
  pools: Pool[]
  paging: Paging
  selectedPool?: Pool
}

export const usePoolStore = defineStore('pool', () => {
  const state = ref<PoolState>({
    allPools: [],
    pools: [],
    selectedPool: undefined,
    paging: {
      page: 0,
      limit: 10,
      canNext: false,
      canPrev: false
    }
  })

  const allPools = computed(() => state.value.allPools)
  const paging = computed(() => state.value.paging)
  const pools = computed(() => {
    const data = [...allPools.value]
    return data.splice(paging.value.page * paging.value.limit, paging.value.limit)
  })
  const totalPage = computed(() => Math.round(state.value.allPools.length / paging.value.limit))
  const selectedPool = computed(() => state.value.selectedPool)

  const fetchPools = async () => {
    try {
      const { data } = await api.get<Pool[]>('polls')
      state.value.allPools = data
      const { page, limit } = paging.value
      state.value.paging.canNext = page * limit <= data.length
      state.value.paging.canPrev = false
    } catch (error) {
      console.error(error)
    }
  }

  const nextPage = () => {
    if (!state.value.paging.canNext) return
    state.value.paging.page += 1
    const { page, limit } = state.value.paging
    state.value.paging.canNext = state.value.allPools.length - (page + 1) * limit > 0
    state.value.paging.canPrev = true
  }

  const prevPage = () => {
    if (!state.value.paging.canPrev) return
    state.value.paging.page -= 1
    state.value.paging.canPrev = state.value.paging.page > 0
    state.value.paging.canNext = true
  }

  const startPage = () => {
    if (!state.value.paging.canPrev) return
    state.value.paging.page = 0
    state.value.paging.canPrev = false
    const { page, limit } = state.value.paging
    state.value.paging.canNext = state.value.allPools.length - (page + 1) * limit > 0
  }

  const lastPage = () => {
    if (!state.value.paging.canNext) return
    const { limit } = state.value.paging
    const totalLength = state.value.allPools.length
    state.value.paging.page =
      totalLength % limit !== 0
        ? Math.floor(totalLength / limit)
        : Math.floor(totalLength / limit) - 1
    state.value.paging.canPrev = state.value.paging.page > 0
    state.value.paging.canNext = false
  }

  const selectPool = (selected: Pool) => {
    state.value.selectedPool = selected
  }

  return {
    allPools,
    pools,
    paging,
    fetchPools,
    nextPage,
    prevPage,
    startPage,
    lastPage,
    totalPage,
    selectPool,
    selectedPool
  }
})
