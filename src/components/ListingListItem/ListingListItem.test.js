import React from 'react'
import { renderShallow } from '../../util/test-helpers'
import { createUser, createListing, fakeIntl } from '../../util/test-data'
import { shallow } from 'enzyme'
import { ListingListItem } from '../index'

const intl = {
  formatMessage: jest.fn()
}

describe('ListingListItem', () => {
  it('matches snapshot', () => {
    const listing = createListing('listing1', {}, { author: createUser('user1') })
    const tree = renderShallow(<ListingListItem listing={listing} intl={fakeIntl} />)
    expect(tree).toMatchSnapshot()
  })
  it('should render the component', () => {
    const wrapper = shallow(
      <ListingListItem
        className="test-class"
        rootClassName="test-root-class"
        intl={intl}
        listing={{}}
        renderSizes=""
        filtersConfig={{}}
        setActiveListing={jest.fn()}
      />
    )
    expect(wrapper).toMatchSnapshot()
  })
})
