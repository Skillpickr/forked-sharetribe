import React from 'react'
import { FormattedMessage } from '../../util/reactIntl'
import { richText } from '../../util/richText'

import css from './ListingPage.module.css'

const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20

const SectionDescriptionMaybe = (props) => {
  const { publicData } = props
  const track = publicData && publicData.track ? publicData.track : null
  const bonus = publicData && publicData.bonus ? publicData.bonus : null

  return bonus || track ? (
    <div>
      {bonus && (
        <div className={css.sectionDescription}>
          <h2 className={css.descriptionTitle}>
            <FormattedMessage id="ListingPage.bonusTitle" />
          </h2>
          <p className={css.description}>
            {richText(bonus, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord
            })}
          </p>
        </div>
      )}
      {track && (
        <div className={css.sectionDescription}>
          <h2 className={css.descriptionTitle}>
            <FormattedMessage id="ListingPage.trackRecordTitle" />
          </h2>
          <p className={css.description}>
            {richText(track, {
              longWordMinLength: MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION,
              longWordClass: css.longWord
            })}
          </p>
        </div>
      )}
    </div>
  ) : null
}

export default SectionDescriptionMaybe
