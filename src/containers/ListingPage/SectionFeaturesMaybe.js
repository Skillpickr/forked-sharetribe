import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { PropertyGroup } from '../../components';

import css from './ListingPage.module.css';

const SectionFeaturesMaybe = props => {
  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { optionLabel, selectedSubOptions, selectedConfigSubOptions } = props;


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
