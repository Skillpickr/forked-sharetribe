import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionFeaturesMaybe = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { options, subOptions, publicData } = props;
  const selectedOption = publicData && publicData.skill ? publicData.skill : null;
  const selectedSubOptions =
    publicData && publicData.photographerType ? publicData.photographerType : [];

  // Don't return anything if public data doesn't contain view field
  // That's why we named this component as SectionViewMaybe
  if (!publicData || !selectedOption) {
    return null;
  }

  // Find selected options label
  const optionConfig = options.find(o => o.key === selectedOption);
  const optionLabel = optionConfig ? optionConfig.label : null;

  const selectedConfigSubOptions = subOptions.filter(o =>
    selectedSubOptions.find(s => s === o.key)
  );

  return (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.skill" values={{ skill: optionLabel.toLowerCase() }} />
      </h2>
      <PropertyGroup
        id="ListingPage.skillType"
        options={selectedConfigSubOptions}
        selectedOptions={selectedSubOptions}
        twoColumns={selectedConfigSubOptions.length > 5}
      />
    </div>
  );
};

export default SectionFeaturesMaybe;
