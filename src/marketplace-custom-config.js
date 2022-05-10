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

export const filters = [
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
        { key: '480', label: '8 hours', shortLabel: '8h' },
      ],
    },
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
      step: 5,
    },
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
    config: {},
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
      searchMode: 'enum',
      options: [
        { key: 'none', label: 'None' },
        // { key: 'dj', label: 'DJ' },
        { key: 'photographer', label: 'Photographer' },
        // { key: 'video-grapher', label: 'Video Grapher' },
      ],
    },
  },
  {
    id: 'photographerType',
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
        { key: 'food', label: 'Food photographer' },
      ],
    },
  },
  {
    id: 'ownStudio',
    config: {
      options: [
        { key: 'yes', label: 'Yes' },
        { key: 'no', label: 'No' },
      ],
    },
  },
  {
    id: 'soundLightExp',
    config: {
      options: [
        { key: 'yes', label: 'Yes' },
        { key: 'no', label: 'No' },
        { key: 'maybe', label: 'Willing to learn' },
      ],
    },
  },
];

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
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
