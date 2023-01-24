import { CheckboxFieldsType, DropdownFieldsType } from '../featuresFields'
import config from '../../config'
import { createIntl, createIntlCache } from 'react-intl'

import { messagesInLocale } from '../../intl'

const cache = createIntlCache()
const intl = createIntl(
  {
    locale: config.locale,
    messages: messagesInLocale()
  },
  cache
)
export const videographerConfig = [
  {
    id: CheckboxFieldsType.videographerTypeKey,
    label: 'Videographer',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_videographerType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'brand', label: 'Brand documentary' },
        { key: 'brandAwareness', label: 'Brand Awareness Videos' },
        { key: 'Event', label: 'Event Videography' },
        { key: 'product', label: 'Product videos' },
        { key: 'documentary', label: 'Documentary films' },
        { key: 'wedding', label: 'Wedding Videography' },
        { key: 'Drone', label: 'Drone videography' },
        { key: 'promotional', label: 'Promotional videos' },
        { key: 'tutorial', label: 'Tutorial videos' },
        { key: 'review', label: 'Review videos' },
        { key: 'testimonial', label: 'Testimonial videos' },
        { key: 'b2b', label: 'Business to Busines (B2B) videos' },
        { key: 'realEstate', label: 'Real Estate videography' },
        { key: 'advertisement', label: 'Advertisement Videography' }
      ]
    }
  },

  {
    // Do you Provide Photo services as well?
    id: DropdownFieldsType.videoToPhotoServiceKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.yes' }) },
        { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.no' }) }
      ]
    }
  },
  {
    // Knowledge with interactive videos?
    id: DropdownFieldsType.videoInteractiveKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.yes' }) },
        { key: 'no', label: intl.formatMessage({ id: 'MarketplaceConfig.ownStudioKey.no' }) }
      ]
    }
  }
]
