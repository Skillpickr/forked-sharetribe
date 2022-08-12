import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '..';

import css from './SectionCategories.module.css';

import creativeImage from './images/creative.jpg';
import knowledgeImage from './images/knowledge.jpg';
import performanceImage from './images/performance.jpg';
import mediaImage from './images/media.jpg';

//Knowledge Photo by mentatdgt from Pexels
// Media Photo by Lê Minh from Pexels
// Performance Photo by Yan Krukov from Pexels
// Creative Photo by Jordan Benton from Pexels

class CategoryImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(CategoryImage);

const categoryLink = (title, subTitle, image, searchQuery, isComingSoon) => {
  const nameText = <span className={css.categoryName}>{title}</span>;
  const subText = <span className={css.categoryName}>{subTitle}</span>;
  return (
    <NamedLink
      name="SearchPage"
      to={{ search: searchQuery }}
      className={css.category}
      disabled={isComingSoon}
    >
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={title} className={css.categoryImage} />
        </div>
      </div>
      <div className={classNames(css.linkText, { [css.comingSoon]: isComingSoon })}>
        <FormattedMessage id="SectionCategories.categories" values={{ category: nameText }} />
        <p>
          <FormattedMessage
            id="SectionCategories.subCategories"
            values={{ subCategory: subText }}
          />
        </p>
      </div>
    </NamedLink>
  );
};

const SectionCategories = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionCategories.title" />
      </div>
      <div className={css.categories}>
        {categoryLink(
          'Performance & Entertainment',
          '(e.g. DJ)',
          performanceImage,
          '?pub_skill=dj',
          false
        )}
        {/* {categoryLink('Performance & Entertainment',performanceImage,'?pub_category=p-and-e',true)} */}
        {categoryLink(
          'Creative',
          '(e.g. Photographer)',
          creativeImage,
          '?pub_skill=photographer',
          false
        )}
        {/* {categoryLink('Creative', creativeImage, '?pub_category=creative', false)} */}
      </div>
      <div className={css.categories}>
        {categoryLink('Knowledge', '', knowledgeImage, '?pub_category=knowledge', true)}
        {categoryLink('Media Production', '', mediaImage, '?pub_category=media-production', true)}
      </div>
    </div>
  );
};

SectionCategories.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionCategories.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionCategories;
