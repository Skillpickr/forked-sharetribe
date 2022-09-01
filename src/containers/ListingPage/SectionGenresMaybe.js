import React from 'react'
import { FormattedMessage } from '../../util/reactIntl'
import { PropertyGroup } from '../../components'

import css from './ListingPage.module.css'

const SectionGenresMaybe = (props) => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { selectedGenres, selectedConfigGenreOptions } = props

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.musicalGenre" />
      </h2>
      <PropertyGroup
        id="ListingPage.skillType"
        options={selectedConfigGenreOptions}
        selectedOptions={selectedGenres}
        twoColumns={selectedConfigGenreOptions.length > 5}
      />
    </div>
  )
}

export default SectionGenresMaybe
