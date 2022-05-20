import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';

import css from './ListingPage.module.css';

const getSkillInfo = (skillOptions, key) => {
  return skillOptions.find(c => c.key === key);
};

const SectionHeading = props => {
  const { richTitle, showContactUser, listingSkill, skillOptions, onContactUser } = props;

  const skill = getSkillInfo(skillOptions, listingSkill);
  const showSkill = skill && !skill.hideFromListingInfo;

  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {showSkill ? <span>{skill.label}</span> : null}
          {showContactUser ? (
            <span className={css.contactWrapper}>
              {showSkill ? <span className={css.separator}>•</span> : null}
              <InlineTextButton
                rootClassName={css.contactLink}
                onClick={onContactUser}
                enforcePagePreloadFor="SignupPage"
              >
                <FormattedMessage id="ListingPage.contactUser" />
              </InlineTextButton>
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
