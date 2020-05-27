import React from 'react'
import { VersionComponent } from '.'
import { render } from '@testing-library/react'
describe('ExampleComponent', () => {
  it('is truthy', () => {
    expect(VersionComponent).toBeTruthy()
  })
  it('asdf', () => {
    const { getByText } = render(<VersionComponent />)
    expect(getByText('v1.0.0')).toBeTruthy()
    // console.log(asFragment().)
    expect(getByText('v1.0.0')).toHaveProperty(
      'href',
      'https://gitlab.staplcotn.com/scca/stapl-logger/-/tags/v1.0.0'
    )
  })
})
