import BigNumber from 'bignumber.js'

export const formatNumber = (num: string | number, decimalPlaces = 2) => {
  return new BigNumber(num).toFormat(decimalPlaces)
}
