import React from 'react'
import config from '../../config'
import { twitterPageURL } from '../../util/urlHelpers'
import { StaticPage, TopbarContainer } from '../../containers'
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  IntroLetters
} from '../../components'

import css from './WelcomePage.module.css'
import image from './about-us.jpg'

const WelcomePage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config
  const siteTwitterPage = twitterPageURL(siteTwitterHandle)

  // prettier-ignore
  return (
    <StaticPage
      title="Welcome to | SkillPickr"
      schema={{
        '@context': 'http://schema.org',
        '@type': ['Organization', 'WepPage'],
        url: 'https://skillpickr.com',
        logo: 'https://github.com/Skillpickr/public/blob/c179bac2e57f0e605e8df4fa2eb2487d13f0a642/skillpickr-logo-black-499x499.jpeg',
        description:
          'SkillPickr is a purpose driven startup, working on becoming an all in one solution for people living a creative multidisciplinary life.',
        name: 'About page'
      }}>
      <LayoutSingleColumn className={css.background}>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          {/* <h1 className={css.pageTitle}>SkillPickr - About us</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." /> */}

          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <IntroLetters
                text="HEJ, Hvor er vi glade for at se dig her!"
              />
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  )
}

export default WelcomePage
