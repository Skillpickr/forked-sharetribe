import React from 'react'
import { fakeIntl } from '../../util/test-data'
import { renderDeep } from '../../util/test-helpers'
import TopbarDesktop from './TopbarDesktop'

const noop = () => null

// A hack to get the tooltip random className Uuid to be t00000000-0000-4000-8000-000000000000
jest.mock('crypto', () => ({
  randomBytes: (num) => new Array(num).fill(0),
}));

describe('TopbarDesktop', () => {
  it('data matches snapshot', () => {
    window.google = { maps: {} }
    const topbarProps = {
      isAuthenticated: true,
      currentUserHasListings: true,
      name: 'John Doe',
      onSearchSubmit: noop,
      intl: fakeIntl,
      onLogout: noop
    }
    const tree = renderDeep(<TopbarDesktop {...topbarProps} />)
    delete window.google
    expect(tree).toMatchSnapshot()
  })
})
