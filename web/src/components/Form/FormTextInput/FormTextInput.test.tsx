import { render } from '@redwoodjs/testing/web'

import FormTextInput from './FormTextInput'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormTextInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormTextInput />)
    }).not.toThrow()
  })
})
