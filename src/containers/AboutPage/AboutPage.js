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
import image from './about-us.jpg';

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
              <p>SkillPickr is a purpose driven startup, working on becoming an all in one solution for people living a creative multidisciplinary life.</p>
            </div>

            <div className={css.contentMain}>
              <h2 className={css.subtitle}>Purpose</h2>
              <h3>
                WHY
              </h3>
              <p>
              Simply because we love and believe in people whose attitudes and approaches to problems and challenges bear the mark of creativity - of courage, of talent, of innovative problem solving              </p>

              <h3 >HOW</h3>
              <p>
              By offering a large space for anyone to unleash their skills or passion and empower them to live a multi disciplinary creative life. By nurturing, inspiring and encouraging creative minds, help them find work with more ease and turn their skills into successful business. By making it easy for people to get in touch and book the skills of creative minds without speed bumps.
              </p>

              <h3>WHAT</h3>
              <p>
                Based on a global tooling marketplace we work to support people living a multidisciplinary creative life by building tools that optimize their productivity, processes and workflow. This we do to help all creatives evolve their skill and make their business thrive, regardless of what level they are on. The marketplace also reduces the friction between users, saving time and money finding the right match. 
              </p>
              <h2 className={css.subtitle}>Guiding Principles</h2>
              <p>At SkillPickr, our guiding principles serve as our commitment to continue working passionately toward:</p>
              <p><strong>Sincerity</strong></p>
              <blockquote>"Because without sincerity there is no credibility, trust or growth"</blockquote>
              <p><strong>Curiosity</strong></p>
              <blockquote>"Because curiosity is key! Things happen when we start to pay attention to what is happening with curiosity and as a bonus, curiosity is interrelated with inner motivation and innovation"</blockquote>
              <p><strong>Self-discipline </strong></p>
              <blockquote>"Because we want to succeed!"</blockquote>
              <p><strong>Respect</strong></p>
              <blockquote>"Because it is such a good starting point for all kinds of relationships. It is also a gift and when given or received, something good comes along"</blockquote>
              <br></br>


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

export default AboutPage;
