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
  IntroLetters,
  NamedLink
} from '../../components'
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl'
import signImage from './image1.png'
import portraitImage from './Skillpickr_team_Cæcilie_1_round.png'
import logoImage from './logo_transparent_background.png'

import css from './WelcomePage.module.css'

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
              <img src={logoImage} alt={'title'} className={css.signedImage} />
              <p>
                <strong>Til SkillPickr søger vi som sagt, lige nu i hele landet</strong>{' '}
              </p>
              <ul>
                <li>DJ&apos;s</li>
                <li>Fotografer</li>
                <li>Musikere såsom bands, trioer, duoer, solister, sangere, instrumentalister m.m.</li>
                <li>
                  <strong> Alle stile, typer og niveauer er velkommen</strong>.
                </li>
              </ul>
              <p>
                <strong>
                  <NamedLink name="SearchPage" className={css.signupLink}>
                    <span className={css}>KLIK HER</span>
                  </NamedLink>
                  FOR AT SE SKILLPICKR PROFILER
                </strong>
              </p>
              <h2>Baggrunden</h2>
              <p>
                Hej :) Mit navn er Cæcilie, Co-Founder og CEO af SkillPickr. <br /> Jeg har arbejdet som projektleder
                indenfor event marketing i omkring 10 år og i løbet af de år har jeg brugt timer på at finde netop
                profiler som jer i både ind og udland. At finde en spansk guitarist, en allround DJ, gøgler, danser,
                fotograf, violinist, kor, osv. har altid bestået i at ringe til &quot;Hans&quot; som henviser til
                &quot;Christina&quot;, som desværre er optaget den dag, som henviser til osv. osv. <br /> Det vil jeg og
                min business partner Allan (begge er vi ex musikere) gerne lave om på. Det skal være lettere for de
                udøvende kreative og kunder at finde hinanden og arbejdsbetingelserne for de udøvende bedre.
              </p>
              <h2>HVAD OG HVORFOR:</h2>
              <p>
                Vi satte os derfor for at lave en form for Airbnb/Etsy for udøvende kunstnere og kreative. <br /> År og
                blod, sved og tårer senere har vi nu en platform klar, som netop kan hvad Airbnb/Etsy kan, men for alle
                dejlige kreative som jer/os. Navnet er SkillPickr og vi har for nylig lanceret.
              </p>
              <p>
                Vi har store og små kunder, klar til at bruge sitet så snart de kan finde jer derinde. Det er her i
                kommer ind i billedet, for vi har brug for jer for at få det til at flyve.
              </p>
              <p>
                Derfor vil vi opfordre alle som synes at visionen har noget at byde ind med, til at bruge 10 minutter på
                at signe jer op via linket nedenfor. Det koster ikke noget at oprette sig, og der er dermed intet at
                tabe, det er en mulighed for at få lidt ekstra jobs i bogen. Det er nyt, det er anderledes, men det var
                Airbnb også. Hvor intet vover, intet vinder. <br />
                Vores drøm er at skabe et tool og community som er meget mere end &apos;blot&apos; en booking platform.
                Vi ønsker, at du som kreativ her kan finde støtte og tools der giver dig adgang til f.eks. kontrakter,
                bogføring, markedsføring, fondsansøgninger, udgivelser, talentudvikling m.m.
              </p>
              <p>
                Hvad koster det tænker du? Vi tager 10% i kommission for ja selvfølgelig koster det noget, for det
                koster noget at drive og udvikle. Til gengæld er det &apos;no cure no pay&apos; princip, så vi tjener
                ikke noget med mindre i gør.
              </p>
              <p>
                Har i lyst til der findes et sådan sted at gå til, så kan det kun lykkedes med jeres hjælp, fordi uden
                jer er vi ingenting. Hjælp os med at hjælpe jer til flere jobs, ved at støtte op om SkillPickr.
              </p>
              <p>
                Vi arbejder konstant for at gøre SkillPickr bedre, så synes i det er noget lort, så sig det til os og
                forklar gerne hvorfor. Synes i noget er fedt, og noget skal være bedre så sig det til os. Kan i lide det
                vi arbejder for, så sign jer op og del gerne med jeres netværk også.
              </p>
              <p>
                Send endelig gerne feedback, spørgsmål eller andet til{' '}
                <a href="mailto:hello@skillpickr.com">hello@skillpickr.com</a>&nbsp;eller tag fat i os på 22462408.
              </p>
              <p>
                {' '}
                Vi håber, i vil tage godt imod vores initiativ og se dig og din profil på
                <NamedLink name="SignupPage" className={css.signupLink}>
                  <span className={css}> SkillPickr</span>
                </NamedLink>
              </p>
              <br></br>
              <p>God dag fra os i SkillPickr</p>
              <br></br>
              <br></br>
              <div className={css.signedContainer}>
                <div className={css.profileImage}>
                  <img src={portraitImage} alt={'title'} className={css} />
                </div>
                <div className={css.signed}>
                  <p>Cæcilie Fundal Månsson</p>
                  <img src={signImage} alt={'title'} className={css.signedImage} />
                  <p>Co-Founder & CEO</p>
                </div>
              </div>
              <img src={logoImage} alt={'title'} className={css.signedImage} />
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
