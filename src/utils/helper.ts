import BigNumber from 'bignumber.js'

export const calculatorPercentRatio = (price: number, amount: number) => {
  if (!price) return
  const priceBigNumber = new BigNumber(price)
  const amountBigNumber = new BigNumber(amount)
  const percent = priceBigNumber.dividedBy(amountBigNumber).toNumber() * 100
  return `${percent.toFixed(1)} %`
}

export const genRandFeeBoost = (minPrice = 10, maxPrice: number, decimalPlaces = 2) => {
  const minBigNumber = new BigNumber(minPrice).toNumber()
  const maxBigNumber = new BigNumber(maxPrice).toNumber()
  const rand = Math.random() * (maxBigNumber - minBigNumber) + minBigNumber
  return rand.toFixed(decimalPlaces)
}

export const calculatorEstimatedAPR = (minPrice: number, maxPrice: number, decimalPlaces = 2) => {
  if (!minPrice || !maxPrice) return
  const min = new BigNumber(minPrice)
  const max = new BigNumber(maxPrice)
  const percent = min.dividedBy(min.plus(max)).toNumber() * 100
  return formatCurrency(percent)
}

export const estimateAPR = (price: number, amount: number) => {
  if (!price) return
  const priceBigNumber = new BigNumber(price)
  const amountBigNumber = new BigNumber(amount)
  const percent = priceBigNumber.dividedBy(amountBigNumber).toNumber() * 100
  return `${percent.toFixed(1)} %`
}

export const formatCurrency = (value?: number, minimumFractionDigits = 2) => {
  if (!value) {
    return '0.00'
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: 2
  })
  return formatter.format(value)
}
