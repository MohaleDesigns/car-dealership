import { render } from '@redwoodjs/testing/web'

import SellACarPage from './SellACarPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SellACarPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SellACarPage />)
    }).not.toThrow()
  })
})
