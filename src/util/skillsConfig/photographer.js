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
        { key: 'animal', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.animal' }) },
        { key: 'boudoir', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.boudoir' }) },
        { key: 'concert', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.concert' }) },
        { key: 'sports', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.sports' }) },
        { key: 'fine-art', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.fineArt' }) },
        { key: 'architecture', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.architecture' }) },
        { key: 'street', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.street' }) },
        { key: 'real-estate', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.realEstate' }) },
        { key: 'wedding', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.wedding' }) },
        { key: 'birthday', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.birthday' }) },
        { key: 'medical', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.medical' }) },
        { key: 'coperate', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.coperate' }) },
        { key: 'vehicle', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.vehicle' }) },
        { key: 'product', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.product' }) },
        { key: 'travel', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.travel' }) },
        { key: 'journalism', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.journalism' }) },
        { key: 'aerial', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.aerial' }) },
        { key: 'stock', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.stock' }) },
        { key: 'nature', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.nature' }) },
        { key: 'family', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.family' }) },
        { key: 'child', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.child' }) },
        { key: 'newborn', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.newborn' }) },
        { key: 'school', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.school' }) },
        { key: 'portrait', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.portrait' }) },
        { key: 'branding', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.branding' }) },
        { key: 'press', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.press' }) },
        { key: 'macro', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.macro' }) },
        { key: 'micro', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.micro' }) },
        { key: 'film', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.film' }) },
        { key: 'astro', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.astro' }) },
        { key: 'communication', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.communication' }) },
        { key: 'food', label: intl.formatMessage({ id: 'MarketplaceConfig.photographerType.food' }) }
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
