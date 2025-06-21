import { render } from '@redwoodjs/testing/web'

import FormTextTextarea from './FormTextTextarea'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormTextTextarea', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormTextTextarea />)
    }).not.toThrow()
  })
})
