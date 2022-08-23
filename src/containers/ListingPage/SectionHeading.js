import React from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { InlineTextButton } from '../../components';

import css from './ListingPage.module.css';
import { Skills } from '../../util/category';

const getSkillInfo = (skillOptions, key) => {
  return skillOptions.find(c => c.key === key);
};

const SectionHeading = props => {
  const {
    richTitle,
    hostLink,
    showContactUser,
    listingSkill,
    skillOptions,
    onContactUser,
    musicianSoloist,
    musicianSoloistOptions,
  } = props;

  const skill = getSkillInfo(skillOptions, listingSkill);
  let skillTitle = '';
  if (musicianSoloist) {
    const type = getSkillInfo(musicianSoloistOptions, musicianSoloist);
    skillTitle = skill.label + ' • ' + type.label;
  } else {
    skillTitle = skill.label;
  }

  const showSkill = skill && !skill.hideFromListingInfo;

  return (
    <div className={css.sectionHeading}>
      <div className={css.heading}>
        <h1 className={css.title}>{richTitle}</h1>
        <div className={css.author}>
          {showSkill ? <span className={css.subTitle}>{skillTitle}</span> : null}
          <span className={css.separator}>•</span>
          <FormattedMessage id="ListingPage.hostedBy" values={{ name: hostLink }} />
          {showContactUser ? (
            <span className={css.contactWrapper}>
              <span className={css.separator}>•</span>
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
