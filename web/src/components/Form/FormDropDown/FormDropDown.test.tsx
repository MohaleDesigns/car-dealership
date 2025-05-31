import { render } from '@redwoodjs/testing/web'

import FormDropDown from './FormDropDown'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormDropDown', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormDropDown />)
    }).not.toThrow()
  })
})
