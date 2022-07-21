import {formatMoney} from './utils'

describe('formatMoney function', () => {
  test('validate format correctly for number', () => {
    expect(formatMoney(10000)).toEqual('$ 10,000')
  })

  test('validate format correctly for string', () => {
    expect(formatMoney('10000')).toEqual('$ 10,000')
  })
})