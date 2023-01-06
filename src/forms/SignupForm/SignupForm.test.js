import React from 'react'
import { renderDeep } from '../../util/test-helpers'
import { fakeIntl } from '../../util/test-data'
import SignupForm from './SignupForm'

const noop = () => null

// A hack to get the tooltip random className Uuid to be t00000000-0000-4000-8000-000000000000
jest.mock('crypto', () => ({
  randomBytes: (num) => new Array(num).fill(0)
}))

describe('SignupForm', () => {
  it('matches snapshot', () => {
    const tree = renderDeep(<SignupForm intl={fakeIntl} onOpenTermsOfService={noop} onSubmit={noop} />)
    expect(tree).toMatchSnapshot()
  })
})
