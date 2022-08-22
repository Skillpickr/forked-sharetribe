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
import { Categories, Skills } from './util/category';
import { CheckboxFieldsType, DropdownFieldsType } from './util/featuresFields';

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
        { key: Categories.knowledge, label: 'Knowledge' },
      ],
    },
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
        { key: Skills.musicianSoloist, label: 'Musician' },
      ],
    },
  },
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
        { key: 'food', label: 'Food photographer' },
      ],
    },
  },
  {
    id: CheckboxFieldsType.djTypeKey,
    label: 'DJ',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_djType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'allround', label: 'All around DJ' },
        { key: 'wedding', label: 'Wedding DJ' },
        { key: 'radio', label: 'Radio DJ' },
        { key: 'club', label: 'Club DJ' },
        { key: 'mobile', label: 'Mobile DJ' },
        { key: 'turntablist', label: 'Turntablist' },
        { key: 'corporate', label: 'Corporate event DJ' },
        { key: 'birthday', label: 'Birthday DJ' },
      ],
    },
  },
  {
    id: DropdownFieldsType.musicianSoloKey,
    label: 'Musician',
    type: 'SelectSingleFilter',
    group: 'secondary',
    queryParamNames: ['pub_musicianSoloType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'accordion', label: 'Accordionist' },
        { key: 'sax-alto', label: 'Alto Saxophonist' },
        { key: 'bagpiper', label: 'Bagpiper' },
        { key: 'balaika', label: 'Balalaika' },
        { key: 'bandeneon', label: 'Bandoneon' },
        { key: 'banjo', label: 'Banjo' },
        { key: 'horn-baritone', label: 'Baritone horn' },
        { key: 'sax-baritone', label: 'Baritone Saxophonist' },
        { key: 'basson-baroque', label: 'Baroque Bassoonist' },
        { key: 'cello-baroque', label: 'Baroque Cellist' },
        { key: 'bass-double-baroque', label: 'Baroque double Bassist' },
        { key: 'flute-baroque', label: 'Baroque Flautist' },
        { key: 'oboe-baroque', label: 'Baroque Oboist' },
        { key: 'trumphet-baroque', label: 'Baroque Trumpeter' },
        { key: 'viola-baroque', label: 'Baroque Violist' },
        { key: 'violin-baroque', label: 'Baroque Violinist' },
        { key: 'clarinette-bass', label: 'Bass Clarinettist' },
        { key: 'flue-bass', label: 'Bass Flautist' },
        { key: 'guitar-bass', label: 'Bass Guitarist' },
        { key: 'sax-bass', label: 'Bass Saxophonist' },
        { key: 'trombone-bass', label: 'Bass Trombonist' },
        { key: 'bassoon', label: 'Bassoonist' },
        { key: 'beatbox', label: 'Beatboxing' },
        { key: 'bodhran', label: 'Bodhran' },
        { key: 'bouzouki', label: 'Bouzouki' },
        { key: 'cajon', label: 'Cajon' },
        { key: 'cavaquinho', label: 'Cavaquinho' },
        { key: 'ceilidh-caller', label: 'Ceilidh caller' },
        { key: 'celeste', label: 'Celeste' },
        { key: 'cello', label: 'Cellist' },
        { key: 'harp-celtic', label: 'Celtic Harpist' },
        { key: 'flute-china', label: 'Chinese Flautist' },
        { key: 'cittern', label: 'Cittern' },
        { key: 'clarinet', label: 'Clarinettist' },
        { key: 'guitar-classic', label: 'Classical Guitarist' },
        { key: 'clavichord', label: 'Clavichord' },
        { key: 'clavinet', label: 'Clavinet' },
        { key: 'composer', label: 'Composer' },
        { key: 'concertina', label: 'Concertina' },
        { key: 'conductor', label: 'Conductor' },
        { key: 'sax-contra', label: 'Contrabass Saxophonist' },
        { key: 'bassoon-contra', label: 'ContraBassoonist' },
        { key: 'anglais', label: 'Cor anglais' },
        { key: 'cornet', label: 'Cornettist' },
        { key: 'dhol', label: 'Dhol' },
        { key: 'didgeridoo', label: 'Didgeridoo' },
        { key: 'djembe', label: 'Djembe' },
        { key: 'bass-double', label: 'Double Bassist' },
        { key: 'drum', label: 'Drummer' },
        { key: 'cello-electic', label: 'Electric Cellist' },
        { key: 'guitar-electric', label: 'Electric Guitarist' },
        { key: 'violin-electric', label: 'Electric Violinist' },
        { key: 'euphonium', label: 'Euphoniumist' },
        { key: 'fiddler', label: 'Fiddler' },
        { key: 'horn-flugel', label: 'Flugelhorn' },
        { key: 'flute', label: 'Flautist' },
        { key: 'piano-forte', label: 'FortePianist' },
        { key: 'horn-french', label: 'French horn' },
        { key: 'glockenspiel', label: 'Glockenspiel' },
        { key: 'guitar', label: 'Guitarist' },
        { key: 'dulcimer-hammer', label: 'Hammered dulcimer' },
        { key: 'organ-hammond', label: 'Hammond Organist' },
        { key: 'harmonica', label: 'Harmonica' },
        { key: 'harp', label: 'Harpist' },
        { key: 'hapsichord', label: 'Harpsichordist' },
        { key: 'hurdy-gurdy', label: 'Hurdy-gurdy' },
        { key: 'perc-indian', label: 'Indian Percussionist' },
        { key: 'flute-irish', label: 'Irish Flautist' },
        { key: 'keyboard', label: 'Keyboardist' },
        { key: 'keytar', label: 'Keytar' },
        { key: 'kora', label: 'Kora' },
        { key: 'guitar-lapsteel', label: 'Lap steel Guitarist' },
        { key: 'lute', label: 'Lutist' },
        { key: 'mandolin', label: 'Mandolin' },
        { key: 'marimba', label: 'Marimba' },
        { key: 'harp-medieval', label: 'Medieval Harpist' },
        { key: 'melodeon', label: 'Melodeon' },
        { key: 'melodica', label: 'Melodica' },
        { key: 'director-musical', label: 'Musical director' },
        { key: 'horn-natural', label: 'Natural horn' },
        { key: 'oboe', label: 'Oboist' },
        { key: 'singer-opera', label: 'Opera singer' },
        { key: 'orchestrator', label: 'Orchestrator' },
        { key: 'organ', label: 'Organist' },
        { key: 'oud', label: 'Oud' },
        { key: 'perc', label: 'Percussionist' },
        { key: 'piano', label: 'Pianist' },
        { key: 'piccolo', label: 'Piccoloist' },
        { key: 'rapper', label: 'Rapper' },
        { key: 'sackbut', label: 'Sackbut' },
        { key: 'saxophone', label: 'Saxophonist' },
        { key: 'singer', label: 'Singer' },
        { key: 'singer-alto', label: 'Singer (alto)' },
        { key: 'singer-baritone', label: 'Singer (baritone)' },
        { key: 'singer-bass', label: 'Singer (bass)' },
        { key: 'singer-contraælto', label: 'Singer (contralto)' },
        { key: 'singer-countertenor', label: 'Singer (countertenor)' },
        { key: 'singer-mezzo', label: 'Singer (mezzo soprano)' },
        { key: 'singer-oktav', label: 'Singer (oktavist)' },
        { key: 'singer-soprano', label: 'Singer (soprano)' },
        { key: 'signer-tenor', label: 'Singer (tenor)' },
        { key: 'singer-guitar', label: 'Singing guitarist' },
        { key: 'singer-piano', label: 'Singing pianist' },
        { key: 'sitar', label: 'Sitar' },
        { key: 'guitar-slide', label: 'Slide Guitarist' },
        { key: 'drum-snare', label: 'Snare drum' },
        { key: 'sax-sopranino', label: 'Sopranino Saxophonist' },
        { key: 'sax-soprano', label: 'Soprano Saxophonist' },
        { key: 'sax-soprillo', label: 'Soprillo Saxophonist' },
        { key: 'sousaphone', label: 'Sousaphone' },
        { key: 'guitar-spanish', label: 'Spanish Guitarist' },
        { key: 'drum-steel', label: 'Steel Drummer' },
        { key: 'synth', label: 'Synthesiser' },
        { key: 'tambura', label: 'Tambura' },
        { key: 'horn-tenor', label: 'Tenor horn' },
        { key: 'sax-tenor', label: 'Tenor Saxophonist' },
        { key: 'theorbo', label: 'Theorbo' },
        { key: 'timpani', label: 'Timpanist' },
        { key: 'whistle-tin', label: 'Tin whistle' },
        { key: 'trombone', label: 'Trombonist' },
        { key: 'trumpet', label: 'Trumpeter' },
        { key: 'tuba', label: 'Tuba' },
        { key: 'pipe-uilleann', label: 'Uilleann pipes' },
        { key: 'ukulele', label: 'Ukulelist' },
        { key: 'vibraphone', label: 'Vibraphone' },
        { key: 'viol', label: 'Viol' },
        { key: 'violist', label: 'Violist' },
        { key: 'viola', label: 'Viola da gamba' },
        { key: 'violin', label: 'Violinist' },
        { key: 'xylophone', label: 'Xylophone' },
      ],
    },
  },
  {
    id: CheckboxFieldsType.musicalGenre,
    label: 'Musical Genre',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_musicalGenre'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'classical', label: 'Classical' },
        { key: 'ceremonial', label: 'Ceremonial Music' },
        { key: 'electronic', label: 'Electronic' },
        { key: 'folk', label: 'Folk' },
        { key: 'jazz', label: 'Jazz' },
        { key: 'other', label: 'Other' },
        { key: 'pop', label: 'Pop' },
        { key: 'rock', label: 'Rock' },
        { key: 'world', label: 'World Music' },
      ],
    },
  },
  {
    id: CheckboxFieldsType.musicianTypeKey,
    label: 'Musical Genre',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_musicianSoloType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'studio', label: 'Studio musician' },
        { key: 'live', label: 'Live musician' },
        { key: 'private', label: 'Private events' },
        { key: 'corporate', label: 'Corporate events' },
        { key: 'band', label: 'Band (Stand in)' },
      ],
    },
  },
  {
    id: DropdownFieldsType.ownStudioKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [{ key: 'yes', label: 'Yes' }, { key: 'no', label: 'No' }],
    },
  },
  {
    id: DropdownFieldsType.soundLightExpKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: 'Yes' },
        { key: 'no', label: 'No' },
        { key: 'maybe', label: 'Willing to learn' },
      ],
    },
  },
  {
    id: DropdownFieldsType.songRequestKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        { key: 'yes', label: 'Yes' },
        { key: 'no', label: 'No' },
        { key: 'depends', label: 'Ask me - depends on the type of the event' },
      ],
    },
  },
  {
    id: DropdownFieldsType.djGearForPlayingKey,
    type: '',
    group: 'secondary',
    queryParamNames: [''],
    config: {
      options: [
        {
          key: 'notIncluded',
          label: 'Gear for playing is to be provided and is not included in price',
        },
        { key: 'included', label: 'All gear included in price' },
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
