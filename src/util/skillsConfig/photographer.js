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
export const photographerConfig = [
  {
    id: CheckboxFieldsType.photographerTypeKey,
    label: 'Photographer',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_photographerType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'animal', label: 'Animal photographer' },
        { key: 'boudoir', label: 'Boudoir photographer' },
        { key: 'concert', label: 'Concert photographer' },
        { key: 'sports', label: 'Sports photographer' },
        { key: 'fine-art', label: 'Fine art photographer' },
        { key: 'architecture', label: 'Architecture photographer' },
        { key: 'street', label: 'Street photographer' },
        { key: 'real-estate', label: 'Real estate photographer' },
        { key: 'wedding', label: 'Wedding photographer' },
        { key: 'birthday', label: 'Birthday photographer' },
        { key: 'medical', label: 'Medical photographer' },
        { key: 'coperate', label: 'Coperate event photographer' },
        { key: 'vehicle', label: 'Vehicle photographer' },
        { key: 'product', label: 'Product digital photographer' },
        { key: 'travel', label: 'Travel photographer' },
        { key: 'journalism', label: 'Photojournalist' },
        { key: 'aerial', label: 'Aerial (drone) photographer' },
        { key: 'stock', label: 'Stock photographer' },
        { key: 'nature', label: 'Nature photographer' },
        { key: 'family', label: 'Family photographer' },
        { key: 'child', label: 'Baby and child photographer' },
        { key: 'newborn', label: 'Newborn photographer' },
        { key: 'school', label: 'School photographer' },
        { key: 'portrait', label: 'Portrait photographer' },
        { key: 'branding', label: 'Branding photographer' },
        { key: 'press', label: 'Press photographer' },
        { key: 'macro', label: 'Macro photographer' },
        { key: 'micro', label: 'Micro photographer' },
        { key: 'film', label: 'Film camera photographer' },
        { key: 'astro', label: 'Astrophotographer' },
        { key: 'communication', label: 'Photographic communication' },
        { key: 'food', label: 'Food photographer' }
      ]
    }
  },

  {
    // Do you Provide Video services as well?
    id: DropdownFieldsType.photoToVideoServiceKey,
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
