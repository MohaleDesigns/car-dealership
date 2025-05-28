import { render } from '@redwoodjs/testing/web'

import BrandsCard from './BrandsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BrandsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BrandsCard />)
    }).not.toThrow()
  })
})
