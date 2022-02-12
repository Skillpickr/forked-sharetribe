import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.module.css';

import copenhagenImage from './images/Copenhagen.jpg';
import aarhusImage from './images/Aarhus.jpg';
import odenseImage from './images/Odense.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Copenhagen',
          copenhagenImage,
          '?address=Copenhagen%2C%20Capital%20RegionDenmark%2C%20Denmark&bounds=55.727852%2C12.822593%2C55.588413%2C12.499474'
        )}
        {locationLink(
          'Aarhus',
          aarhusImage,
          '?address=Odense%2C%20RegionSouthern%20Denmark%2C%20Denmark&bounds=55.482592%2C10.576854%2C55.288122%2C10.221037'
        )}
        {locationLink(
          'Odense',
          odenseImage,
          '?address=Aarhus%2C%20Central%20Denmark%20Region%2C%20Denmark&bounds=56.240905%2C10.255086%2C56.117521%2C10.114294'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
