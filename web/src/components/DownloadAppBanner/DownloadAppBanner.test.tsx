import { render } from '@redwoodjs/testing/web'

import DownloadAppBanner from './DownloadAppBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DownloadAppBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DownloadAppBanner />)
    }).not.toThrow()
  })
})
