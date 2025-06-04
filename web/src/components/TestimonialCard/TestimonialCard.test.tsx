import { render } from '@redwoodjs/testing/web'

import TestimonialCard from './TestimonialCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TestimonialCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TestimonialCard />)
    }).not.toThrow()
  })
})
