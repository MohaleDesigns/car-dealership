import { render } from '@redwoodjs/testing/web'

import CarDetailsPage from './CarDetailsPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('CarDetailsPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CarDetailsPage />)
    }).not.toThrow()
  })
})
