import candles from '@/api/candles.js'

export function getBasket(): number[] {
  const basketString = sessionStorage.getItem('basketIds')
  const basket: number[] = basketString ? JSON.parse(basketString) : []

  return basket
}

export function getBasketCandlesInfos(basketIds: number[]) {
  const basketToDisplay = []
  console.log(basketIds)

  basketIds.forEach((element) => {
    candles.forEach((candle: { id: number }) => {
      if (candle.id === element) {
        basketToDisplay.push(candle)
      }
    })
  })

  return basketToDisplay
}
export function removeItemFromBasket(candleId: number) {
  const basket = getBasket()
  const index = basket.indexOf(candleId)
  basket.splice(index, 1)

  sessionStorage.setItem('basketIds', JSON.stringify(basket))
}
