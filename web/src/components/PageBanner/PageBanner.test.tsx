import { render } from '@redwoodjs/testing/web'

import PageBanner from './PageBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PageBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PageBanner />)
    }).not.toThrow()
  })
})
