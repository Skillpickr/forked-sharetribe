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
export const musicianConfig = [
  {
    id: DropdownFieldsType.musicianSoloKey,
    label: 'Type of musician',
    type: 'SelectMultipleFilter',
    group: 'primary',
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
        { key: 'xylophone', label: 'Xylophone' }
      ]
    }
  },

  {
    id: CheckboxFieldsType.musicianGenreKey,
    label: 'Musical Genre',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_musicianGenre'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'a-cappella ', label: 'A cappella' },
        { key: 'blues', label: 'Blues' },
        { key: 'classical', label: 'Classical' },
        { key: 'ceremonial', label: 'Ceremonial Music' },
        { key: 'children', label: "Children's Music" },
        { key: 'disco', label: 'Disco' },
        { key: 'electronic', label: 'Electronic' },
        { key: 'folk', label: 'Folk' },
        { key: 'funk', label: 'Funk' },
        { key: 'gospel', label: 'Gospel' },
        { key: 'heavy-metal', label: 'Heavy Metal' },
        { key: 'hiphop', label: 'Hip Hop' },
        { key: 'jazz', label: 'Jazz' },
        { key: 'latin', label: 'Latin' },
        { key: 'metal', label: 'Metal' },
        { key: 'middle-eastern', label: 'Middel Eastern' },
        { key: 'neo-soul', label: 'Neo/Soul' },
        { key: 'new age', label: 'New Age' },
        { key: 'pop', label: 'Pop' },
        { key: 'r-b', label: 'R&B' },
        { key: 'reggae', label: 'Reggae' },
        { key: 'rock', label: 'Rock' },
        { key: 'ska', label: 'Ska' },
        { key: 'world', label: 'World Music' }
      ]
    }
  },
  {
    id: CheckboxFieldsType.musicianTypeKey,
    label: 'Type of musician',
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
        { key: 'studio', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.studio' }) },
        { key: 'live', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.live' }) },
        { key: 'private', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.private' }) },
        { key: 'corporate', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.corporate' }) },
        { key: 'band', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.band' }) },
        { key: 'session', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.session' }) },
        { key: 'teacher', label: intl.formatMessage({ id: 'MarketplaceConfig.musicianType.teacher' }) }
      ]
    }
  }
]
