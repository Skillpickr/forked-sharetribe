import React from 'react'
import { renderDeep, renderShallow } from '../../util/test-helpers'
import SectionHero from './SectionHero'
import { userLocation } from '../../util/maps'

const noop = () => null

describe('SectionHero', () => {
  it('matches snapshot', () => {
    window.google = { maps: {} }
    const location = { search: '/s?' }
    const css = ''
    const heroProps = {
      history: { push: noop },
      location: {
        pathname: '/',
        search: '',
        hash: '',
        key: ''
      }
    }
    const tree = renderDeep(<SectionHero {...heroProps} location={location} className={css} />)
    delete window.google
    expect(tree).toMatchSnapshot()
  })
})
