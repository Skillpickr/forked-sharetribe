/*
 * Marketplace specific configuration.
 *
 * Every filter needs to have following keys:
 * - id:     Unique id of the filter.
 * - label:  The default label of the filter.
 * - type:   String that represents one of the existing filter components:
 *           BookingDateRangeFilter, KeywordFilter, PriceFilter,
 *           SelectSingleFilter, SelectMultipleFilter.
 * - group:  Is this 'primary' or 'secondary' filter?
 *           Primary filters are visible on desktop layout by default.
 *           Secondary filters are behind "More filters" button.
 *           Read more from src/containers/SearchPage/README.md
 * - queryParamNames: Describes parameters to be used with queries
 *                    (e.g. 'price' or 'pub_amenities'). Most of these are
 *                    the same between webapp URLs and API query params.
 *                    You can't change 'dates', 'price', or 'keywords'
 *                    since those filters are fixed to a specific attribute.
 * - config: Extra configuration that the filter component needs.
 *
 * Note 1: Labels could be tied to translation file
 *         by importing FormattedMessage:
 *         <FormattedMessage id="some.translation.key.here" />
 *
 * Note 2: If you need to add new custom filter components,
 *         you need to take those into use in:
 *         src/containers/SearchPage/FilterComponent.js
 *
 * Note 3: If you just want to create more enum filters
 *         (i.e. SelectSingleFilter, SelectMultipleFilter),
 *         you can just add more configurations with those filter types
 *         and tie them with correct extended data key
 *         (i.e. pub_<key> or meta_<key>).
 */
import { Categories, Skills } from './util/category'
import { bandConfig } from './util/skillsConfig/bands'
import { photographerConfig } from './util/skillsConfig/photographer'
import { musicianConfig } from './util/skillsConfig/musician'
import { djConfig } from './util/skillsConfig/dj'

const filterConfig = [
  {
    id: 'dates-length',
    label: 'Dates',
    type: 'BookingDateRangeLengthFilter',
    group: 'primary',
    // Note: BookingDateRangeFilter is fixed filter,
    // you can't change "queryParamNames: ['dates'],"
    queryParamNames: ['dates', 'minDuration'],
    config: {
      // A global time zone to use in availability searches. As listings
      // can be in various time zones, we must decide what time zone we
      // use in search when looking for available listings within a
      // certain time interval.
      //
      // If you have all/most listings in a certain time zone, change this
      // config value to that.
      //
      // See: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
      searchTimeZone: 'Etc/UTC',

      // Options for the minimum duration of the booking
      options: [
        { key: '0', label: 'Any length' },
        { key: '60', label: '1 hour', shortLabel: '1h' },
        { key: '120', label: '2 hours', shortLabel: '2h' },
        { key: '240', label: '4 hours', shortLabel: '4h' },
        { key: '480', label: '8 hours', shortLabel: '8h' }
      ]
    }
  },
  {
    id: 'price',
    label: 'Price',
    type: 'PriceFilter',
    group: 'primary',
    // Note: PriceFilter is fixed filter,
    // you can't change "queryParamNames: ['price'],"
    queryParamNames: ['price'],
    // Price filter configuration
    // Note: unlike most prices this is not handled in subunits
    config: {
      min: 0,
      max: 1000,
      step: 5
    }
  },
  {
    id: 'keyword',
    label: 'Keyword',
    type: 'KeywordFilter',
    group: 'primary',
    // Note: KeywordFilter is fixed filter,
    // you can't change "queryParamNames: ['keywords'],"
    queryParamNames: ['keywords'],
    // NOTE: If you are ordering search results by distance
    // the keyword search can't be used at the same time.
    // You can turn on/off ordering by distance from config.js file.
    config: {}
  },
  {
    id: 'category',
    label: 'Category',
    type: '',
    group: 'primary',
    queryParamNames: ['pub_category'],
    config: {
      // Schema type is enum for SelectSingleFilter
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      options: [
        { key: Categories.creative, label: 'Creative' },
        { key: Categories.performance, label: 'Performance and Entertainment' },
        { key: Categories.audioProd, label: 'Audio Production' },
        { key: Categories.knowledge, label: 'Knowledge' }
      ]
    }
  },
  {
    id: 'skill',
    label: 'Skill',
    type: 'SelectSingleFilter',
    group: 'primary',
    queryParamNames: ['pub_skill'],
    config: {
      // Schema type is enum for SelectSingleFilter
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      options: [
        { key: Skills.photographer, label: 'Photographer' },
        { key: Skills.dj, label: 'DJ' },
        { key: Skills.musician, label: 'Musician' },
        { key: Skills.band, label: 'Band' }
      ]
    }
  }
]
export const filters = filterConfig.concat(bandConfig, photographerConfig, musicianConfig, djConfig)

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Note: queryParamName 'sort' is fixed,
  // you can't change it since Flex API expects it to be named as 'sort'
  queryParamName: 'sort',

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  // Keyword filter is sorting the results already by relevance.
  // If keyword filter is active, we need to disable sorting.
  conflictingFilters: ['keyword'],

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' }
  ]
}
