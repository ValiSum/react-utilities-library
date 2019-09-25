import { getRating } from './getRating'

describe('getRating', () => {
  it('test 1', () => {
    const result = getRating({
      index: 0,
      type: 'empty'
    })

    expect(result).toEqual(0)
  })

  it('test 2', () => {
    const result = getRating({
      index: 3,
      type: 'half'
    })

    expect(result).toEqual(5)
  })

  it('test 3', () => {
    const result = getRating({
      index: 3,
      type: 'full'
    })

    expect(result).toEqual(6)
  })
})
