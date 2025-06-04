import { render } from '@redwoodjs/testing/web'

import FormMultiSelect from './FormMultiSelect'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FormMultiSelect', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FormMultiSelect />)
    }).not.toThrow()
  })
})
