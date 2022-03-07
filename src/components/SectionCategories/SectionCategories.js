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

class CategoryImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(CategoryImage);

//Knowledge Photo by mentatdgt from Pexels
// Media Photo by Lê Minh from Pexels
// Performance Photo by Yan Krukov from Pexels
// Creative Photo by Jordan Benton from Pexels

const categoryLink = (name, image, searchQuery, isComingSoon) => {
  const nameText = <span className={css.categoryName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.category} disabled={isComingSoon}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.categoryImage} />
        </div>
      </div>
      <div className={classNames(css.linkText, {[css.comingSoon]: isComingSoon})}>
      <FormattedMessage
          id="SectionCategories.categories"
          values={{ category: nameText }}
        />
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
          'Performance',
          performanceImage,
          '?address=Copenhagen%2C%20Capital%20RegionDenmark%2C%20Denmark&bounds=55.727852%2C12.822593%2C55.588413%2C12.499474',
          true
        )}
        {categoryLink(
          'Creative',
          creativeImage,
          '?address=Copenhagen%2C%20Capital%20RegionDenmark%2C%20Denmark&bounds=55.727852%2C12.822593%2C55.588413%2C12.499474',
          false
        )}
      </div>
      <div className={css.categories}>
        {categoryLink(
          'Knowledge',
          knowledgeImage,
          '?address=Copenhagen%2C%20Capital%20RegionDenmark%2C%20Denmark&bounds=55.727852%2C12.822593%2C55.588413%2C12.499474',
          true
        )}
        {categoryLink(
          'Media Production',
          mediaImage,
          '?address=Copenhagen%2C%20Capital%20RegionDenmark%2C%20Denmark&bounds=55.727852%2C12.822593%2C55.588413%2C12.499474',
          true
        )}
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
