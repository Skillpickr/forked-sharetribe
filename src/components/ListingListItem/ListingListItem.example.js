/* eslint-disable no-console */
import React from 'react'
import { createUser, createListing, fakeIntl } from '../../util/test-data'
import ListingListiItem from './ListingListiItem'

const listing = createListing('listing1', {}, { author: createUser('user1') })

const ListingCardWrapper = (props) => (
  <div style={{ maxWidth: '400px' }}>
    <ListingListiItem {...props} />
  </div>
)

export const ListingCardWrapped = {
  component: ListingCardWrapper,
  props: {
    intl: fakeIntl,
    listing
  }
}
