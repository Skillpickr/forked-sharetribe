import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Skillpickr',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>SkillPickr - Passion led us here</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>A global C2C gig marketplace with different categories but with one thing in common.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                WHY
              </h2>

              <p>
              Simply because we love and believe in people whos attitudes and approaches to problems and challenges bear the mark of creativity - of courage, of talent, of innovative problem solving
              </p>

              <h3 className={css.subtitle}>HOW</h3>

              <p>
              By offering a large space for anyone to unleash their skills or passion and empower them to live a multi disciplinary creative life. 
              By nurturing, inspire and encourage creative minds, help them find work with more ease and turn their skills into successful business. By making it easy for people to get in touch and book the skillset of creative minds without speed bumps.
              </p>

              {/* <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Skillpickr
              </h3>
              <p>
                Skillpickr is brought to you by{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Sharetribe
                offers anyone a possibility to create a marketplace without restricting your own
                creativity. Do not hesitate to reach out and learn how to best turn your
                marketplace idea to reality.
              </p> */}
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
