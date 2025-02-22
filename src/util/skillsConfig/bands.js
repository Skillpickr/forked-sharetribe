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

export const bandConfig = [
  {
    id: CheckboxFieldsType.bandTypeKey,
    label: 'Type of band events',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_bandType'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'ceremony', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.ceremony' }) },
        { key: 'reception', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.reception' }) },
        { key: 'evening', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.evening' }) },
        { key: 'privateParty', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.privateParty' }) },
        { key: 'corporate', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.corporate' }) },
        { key: 'wedding', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.wedding' }) },
        { key: 'birthday', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.birthday' }) },
        { key: 'christmas', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.christmas' }) },
        { key: 'newYear', label: intl.formatMessage({ id: 'MarketplaceConfig.bandType.newYear' }) }
      ]
    }
  },
  {
    id: CheckboxFieldsType.bandGenreKey,
    label: 'Band Genre',
    type: 'SelectMultipleFilter',
    group: 'secondary',
    queryParamNames: ['pub_bandGenre'],
    config: {
      // Optional modes: 'has_all', 'has_any'
      // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
      searchMode: 'has_all',
      // "key" is the option you see in Flex Console.
      // "label" is set here for this web app's UI only.
      // Note: label is not added through the translation files
      // to make filter customizations a bit easier.
      options: [
        { key: 'acousticBand', label: 'Acoustic band' },
        { key: 'alternativeBand', label: 'Alternative band' },
        { key: 'blueBand', label: 'Blues band' },
        { key: 'coverBand', label: 'Cover band' },
        { key: 'discoFunkBand', label: 'Disco & Funk band' },
        { key: 'danceClubGroup', label: 'Dance & Ibiza Club group' },
        { key: 'festivalBand', label: 'Festival band' },
        { key: 'folkRockBand', label: 'Folk-rock band' },
        { key: 'functionBand', label: 'Function band' },
        { key: 'hiphopBand', label: 'Hip hop group' },
        { key: 'indieBand', label: 'Indie band' },
        { key: 'mumfordBand', label: 'Mumford folk band' },
        { key: 'originalArtist', label: 'Original artist' },
        { key: 'partyBand', label: 'Party band' },
        { key: 'popBand', label: 'Pop band' },
        { key: 'gospelBand', label: 'R&B / Gospel Soul band' },
        { key: 'roamingBand', label: 'Roaming band' },
        { key: 'rockBAnd', label: 'Rock band' },
        { key: 'rockNRollBand', label: 'Rock n roll band' },
        { key: 'soulBand', label: 'Soul & Motown band' },
        { key: 'vintageBand', label: 'Vintage band' },
        { key: 'stringDuo', label: 'String duo' },
        { key: 'stringTrio', label: 'String trio' },
        { key: 'stringQuartet', label: 'String quartet' },
        { key: 'stringEnsemble', label: 'String ensemble' },
        { key: 'electricStringEnsemble', label: 'Electric string ensemble' },
        { key: 'jazzBand', label: 'Jazz band' },
        { key: 'bigBand', label: 'Big band' },
        { key: 'gypsyBand', label: 'Gypsy jazz band' },
        { key: 'jazzFusionBand', label: 'Jazz fusion band' },
        { key: 'jazzDuo', label: 'Jazz duo' },
        { key: 'jazzTrio', label: 'Jazz trio' },
        { key: 'latinJazzBand', label: 'Latin jazz band' },
        { key: 'newOrleansBand', label: 'New Orleans band' },
        { key: 'swingJiveBand', label: 'Swing & Jive band' },
        { key: 'vintageJazzBand', label: 'Vintage jazz band' },
        { key: 'ratPackBand', label: 'Rat Pack jazz band' },
        { key: 'popDuo', label: 'Pop duo' },
        { key: 'popTrio', label: 'Pop trio' },
        { key: 'acousticDuo', label: 'Acoustic duo' },
        { key: 'acousticTrio', label: 'Acoustic trio' },
        { key: 'rockDuo', label: 'Rock duo' },
        { key: 'rockTrio', label: 'Rock trio' },
        { key: 'classicalDuo', label: 'Classical duo' },
        { key: 'classicalEnsemble', label: 'Classical ensemble' },
        { key: 'classicalTrio', label: 'Classical trio' },
        { key: 'fluteHarpDuo', label: 'Flute and harp duo' },
        { key: 'pianoTrio', label: 'Piano trio' },
        { key: 'saxophoneEnsemble', label: 'Saxophone ensemble' },
        { key: 'windEnsemble', label: 'Wind ensemble' },
        { key: 'orchestra', label: 'Orchestra' },
        { key: 'showChoir', label: 'Show choir' },
        { key: 'gospelChoir', label: 'Gospel choir' },
        { key: 'choir', label: 'Choir' },
        { key: 'carolSingers', label: 'Carol singers' },
        { key: 'aCapellaGroup', label: 'A cappella group' },
        { key: 'barbershopQuartet', label: 'Barbershop quartet' },
        { key: 'churchChoir', label: 'Church choir' },
        { key: 'earlyMusicVocalEnsemble', label: 'Early music vocal ensemble' },
        { key: 'singingWaiters', label: 'Singing waiters' },
        { key: 'musicalTheatreCompany', label: 'Musical theatre company' },
        { key: 'operaCompany', label: 'Opera company' },
        { key: 'pipeBand', label: 'Pipe band' },
        { key: 'ceilidhBand', label: 'Ceilidh band' },
        { key: 'folkBand', label: 'Folk band' },
        { key: 'celticFolkBand', label: 'Celtic folk band' },
        { key: 'bluegrassBand', label: 'Bluegrass band' },
        { key: 'countryBand', label: 'Country band' },
        { key: 'americanaBand', label: 'Americana band' },
        { key: 'brassBand', label: 'Brass band' },
        { key: 'brassQuintet', label: 'Brass quintet' },
        { key: 'balkanBrassBand', label: 'Balkan brass band' },
        { key: 'bavarianBand', label: 'Bavarian oompah band' },
        { key: 'marchingBand', label: 'Marching band' },
        { key: 'balkanBand', label: 'Balkan band' },
        { key: 'frenchGroup', label: 'French group' },
        { key: 'klezmerBand', label: 'Klezmer band' },
        { key: 'spanishFolkBand', label: 'Spanish folk band' },
        { key: 'mariachiBand', label: 'Mariachi band' },
        { key: 'cubanBand', label: 'Cuban band' },
        { key: 'brazilianBand', label: 'Brazilian band' },
        { key: 'sambaBand', label: 'Samba band' },
        { key: 'steelDrumBand', label: 'Steel drums band' },
        { key: 'reggaeBand', label: 'Reggae band' },
        { key: 'skaBand', label: 'Ska band' },
        { key: 'caribbeanBand', label: 'Caribbean band' },
        { key: 'calypsoBand', label: 'Calypso band' },
        { key: 'afroBeatBand', label: 'Afrobeat band' },
        { key: 'africanEnsemble', label: 'African ensemble' },
        { key: 'classicalIndianEnsemble', label: 'Classical Indian ensemble' },
        { key: 'bollywoodEnsemble', label: 'Bollywood ensemble' },
        { key: 'tradChineseEnsemble', label: 'Traditional Chinese ensemble' },
        { key: 'tradArabicEnsemble', label: 'Traditional Arabic ensemble' },
        { key: 'earlyMusicEnsemble', label: 'Early music ensemble' },
        { key: '1950Band', label: '1950s tribute band' },
        { key: '1960Band', label: '1960s tribute band' },
        { key: '1970Band', label: '1970s tribute band' },
        { key: '1980Band', label: '1980s tribute band' },
        { key: '1990Band', label: '1990s tribute band' },
        { key: '2000Band', label: '2000s tribute band' },
        { key: 'abbaTributeBand', label: 'Tribute band - Abba' },
        { key: 'beatlesTributeBand', label: 'Tribute band - Beatles' },
        { key: 'queenTributeBand', label: 'Tribute band - Queen' }
      ]
    }
  }
  // {
  //   id: 'stagePlot',
  //   label: 'StagePlot',
  //   type: 'SelectSingleFilter',
  //   group: 'primary',
  //   queryParamNames: ['pub_stagePlot'],
  //   config: {
  //     // Schema type is enum for SelectSingleFilter
  //     // https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
  //     searchMode: 'has_all',
  //     options: [
  //       { key: '5', label: '5' },
  //       { key: '10', label: '10' },
  //       { key: '15', label: '15' },
  //       { key: '20', label: '20' }
  //     ]
  //   }
  // }
]
