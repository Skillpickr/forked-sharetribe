import React, { useEffect, useState } from 'react';
import { string } from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';
import { NamedLink } from '../../components';

import css from './SectionHero.module.css';

const SectionHero = props => {
  const [mounted, setMounted] = useState(false);
  const { rootClassName, className } = props;

  useEffect(() => {
    setMounted(true);
  }, []);

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.heroContent}>
        <h1 className={classNames(css.heroMainTitle, { [css.heroMainTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.title" />
        </h1>
        {/*  <h2 className={classNames(css.heroSubTitle, { [css.heroSubTitleFEDelay]: mounted })}>
          <FormattedMessage id="SectionHero.subTitle" />
        </> */}
        <NamedLink
          name="SearchPage"
          to={{
            search:
              '?address=Denmark&bounds=57.805252798942%2C15.2971743987523%2C54.5011797001343%2C7.9729991066846',
          }}
          className={classNames(css.heroButton, { [css.heroButtonFEDelay]: mounted })}
        >
          <FormattedMessage id="SectionHero.browseButton" />
        </NamedLink>
      </div>
    </div>
  );
};

SectionHero.defaultProps = { rootClassName: null, className: null };

SectionHero.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHero;
