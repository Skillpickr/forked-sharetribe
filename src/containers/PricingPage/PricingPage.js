import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './PricingPage.module.css';
import image from './pricing.jpg';

const PricingPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Pricing"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'PricingPage',
        "description": 'Skillpickr Prices',
        "name": 'Pricing Page',
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Question 1?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Answer: Lorem ipsum"
            }
          }
        ]
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
              <p>It does not cost anything to sign up, create a profile or a listing. </p>
            </div>

            <div className={css.contentMain}>
              <h2>General</h2>
              <p>
              It costs a commission fee for both seller and buyer when a booking is confirmed and a transaction is made. 
              It is only when the booking request has been confirmed that SkillPickr will charge a commission fee. 
              The commission fee is used to maintain and continue to develop SkillPickr as a tool, service and community to all lovers of creativity.  
              Commission 
              </p>
              <p><strong>SkillPickr earner </strong></p>
              <p>A commission of <strong>15%</strong> will be deducted from the total price once you have confirmed the booking 
              </p>
              <p><strong>SkillPickr flyer</strong></p>
              <p>A commission of <strong>10%</strong> will be added to the total price once the SkillPickr earner has confirmed the booking</p>


              <p><strong>For more information or help go look in our help center. For help center click here</strong></p>

              {/* <h3 id="contact" className={css.subtitle}>
                Contact
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

export default PricingPage;
