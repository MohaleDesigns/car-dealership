import { render } from '@redwoodjs/testing/web'

import ServiceCard from './ServiceCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ServiceCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ServiceCard />)
    }).not.toThrow()
  })
})
