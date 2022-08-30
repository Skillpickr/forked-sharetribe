import React from 'react'
import config from '../../config'
import { twitterPageURL } from '../../util/urlHelpers'
import { StaticPage, TopbarContainer } from '..'
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink
} from '../../components'

import css from './ContactPage.module.css'
import image from './contact.jpg'

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config
  const siteTwitterPage = twitterPageURL(siteTwitterHandle)

  // prettier-ignore
  return (
    <StaticPage
      title="Contact"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'ContactPAge',
        "description": 'Contact SkillPickr',
        "name": 'Contact page',
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
              <p>SkillPickr is a purpose driven startup, working on becoming an all in one solution for people living a creative multidisciplinary life.</p>
            </div>

            <div className={css.contentMain}>
              <h2 className={css.subtitle}>Contact</h2>



              <p>Do you have feedback, questions or something else ? We would love to hear from you! 
                Please send us an email to <a href="mailto:hello@skillpickr.com">hello@skillpickr.com</a>. 
                We will get back to you as soon as possible. 
                The waiting time for a response can be up to 72 hours, but we always intend to respond earlier. 
                If you need us to get in touch with you by phone, please let us know by email. Remember to include your phone number and we will call you as soon as possible.

              </p>

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
}

export default AboutPage
