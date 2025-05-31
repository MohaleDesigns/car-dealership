import { render } from '@redwoodjs/testing/web'

import LoanCalculator from './LoanCalculator'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LoanCalculator', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LoanCalculator />)
    }).not.toThrow()
  })
})
