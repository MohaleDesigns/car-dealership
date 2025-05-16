import { render } from '@redwoodjs/testing/web'

import CarCard from './CarCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CarCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CarCard />)
    }).not.toThrow()
  })
})
