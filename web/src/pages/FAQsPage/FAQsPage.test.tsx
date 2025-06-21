import { render } from '@redwoodjs/testing/web'

import FaQsPage from './FaQsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('FaQsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FaQsPage />)
    }).not.toThrow()
  })
})
