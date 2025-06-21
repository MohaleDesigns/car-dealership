import { render } from '@redwoodjs/testing/web'

import SecondaryButton from './SecondaryButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SecondaryButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SecondaryButton />)
    }).not.toThrow()
  })
})
