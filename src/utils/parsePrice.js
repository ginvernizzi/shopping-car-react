export const parsePrice = (priceString) => {
  let min = 150
  let max = 1000000

  if(!priceString.includes('o')){
    min = priceString.split('-')[0].trim().substring(1)
    max = priceString.split('-')[1].trim().substring(1)
  }
  return {min, max}
}