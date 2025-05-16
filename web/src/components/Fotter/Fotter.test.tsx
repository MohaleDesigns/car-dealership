import { render } from '@redwoodjs/testing/web'

import Fotter from './Fotter'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Fotter', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Fotter />)
    }).not.toThrow()
  })
})
