import { render } from '@redwoodjs/testing/web'

import FormInputOptions from './FormInputOptions'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormInputOptions', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormInputOptions />)
    }).not.toThrow()
  })
})
