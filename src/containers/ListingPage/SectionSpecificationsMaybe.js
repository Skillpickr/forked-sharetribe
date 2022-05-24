import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { ExternalLink } from '../../components';

import css from './ListingPage.module.css';

const SectionSpecificationsMaybe = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { soundLightExp, ownStudio, publicData } = props;
  const selectedSoundLightExp =
    publicData && publicData.soundLightExp ? publicData.soundLightExp : null;
  const selectedOwnStudio = publicData && publicData.ownStudio ? publicData.ownStudio : null;
  const homepageUrl = publicData && publicData.url ? publicData.url : null;

  // Don't return anything if public data doesn't contain view field
  // That's why we named this component as SectionViewMaybe
  if (!publicData || !selectedSoundLightExp || !selectedOwnStudio) {
    return null;
  }

  // Find selected options label
  const soundLightExpConfig = soundLightExp.find(o => o.key === selectedSoundLightExp);
  const soundLightExpLabel = soundLightExpConfig ? soundLightExpConfig.label : null;
  const ownStudioConfig = ownStudio.find(o => o.key === selectedOwnStudio);
  const ownStudioLabel = ownStudioConfig ? ownStudioConfig.label : null;

  return soundLightExpLabel || ownStudioLabel || homepageUrl ? (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.specificationsTitle" />
      </h2>

      {soundLightExpLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.soundLightExp"
            values={{ soundLightExp: soundLightExpLabel }}
          />
        </p>
      )}
      {ownStudioLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
      {homepageUrl && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.homepageUrl" />
          <ExternalLink href={homepageUrl}>{homepageUrl}</ExternalLink>
        </p>
      )}
    </div>
  ) : null;
};

export default SectionSpecificationsMaybe;
