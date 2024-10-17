import candles from '@/api/candles.js'
import { basketItem } from '@/components/CandleCard.vue'

export function getBasket(): basketItem[] {
  const basketString = sessionStorage.getItem('basketIds')
  const basket: basketItem[] = basketString ? JSON.parse(basketString) : []

  return basket
}
export function getBasketIds(): number[] {
  const basketString = sessionStorage.getItem('basketIds')
  const basket: basketItem[] = basketString ? JSON.parse(basketString) : []

  const basketIds = []
  for (let i = 0; i < basket.length; i++) {
    const element = basket[i]
    basketIds.push(element['id'])
  }

  return basketIds
}

export function getBasketCandlesInfos(basketIds: number[]) {
  const basketToDisplay = []

  basketIds.forEach((element) => {

    const basketItem = getBasketItemById(element)

    candles.forEach((candle: { id: number }) => {
      if (candle.candleId === basketItem.candleId) {

        candle.id = basketItem.id
        candle['scent'] = basketItem.scent
        candle['color'] = basketItem.color
        
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

export function getBasketItemById(basketId: number) {
  const basket = getBasket()
  let basketItem = {}
  basket.forEach((element) => {
    if (element.id === basketId) {
      basketItem = element
    }
  })

  return basketItem
}

export function modifyBasketItem(candleId: any, attributeName: string, attribute: string) {
  const basket = JSON.parse(sessionStorage.getItem('basketIds') || '[]') as Array<{
    id: number
    [key: string]: unknown
  }>

  const basketItem = basket.find((item) => item.id === candleId)

  if (basketItem) {
    basketItem[attributeName] = attribute

    sessionStorage.setItem('basketIds', JSON.stringify(basket))
  }
}
