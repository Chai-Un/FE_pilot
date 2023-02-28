import BigNumber from 'bignumber.js';

export const calculatorPercentRatio = (price: any, amount: any) => {
  if (!price) return
  const priceBigNumber = new BigNumber(price)
  const amountBigNumber = new BigNumber(amount)
  const percent = (priceBigNumber.dividedBy(amountBigNumber)).toNumber() * 100
  return `${percent.toFixed(1)} %`
}

export const genRandFeeBoost = (min = 10, max: any, decimalPlaces = 2) => {
  const minBigNumber = new BigNumber(min).toNumber()
  const maxBigNumber = new BigNumber(max).toNumber()
  const rand = Math.random() * (maxBigNumber - minBigNumber) + minBigNumber;
  return rand.toFixed(decimalPlaces);
}

export const formatCurrency = (
  value?: number,
  minimumFractionDigits = 2,
) => {
  if (!value) {
    return '0.00';
  }

  const formatter = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: 2,
  });
  return formatter.format(value);
};