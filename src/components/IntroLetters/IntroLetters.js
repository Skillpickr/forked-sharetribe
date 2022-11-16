import React, { Component } from 'react'
import anime from 'animejs'
import styled from 'styled-components'
import { lazyLoadWithDimensions } from '../../util/contextHelpers'

import signImage from './image1.png'
import portraitImage from './Skillpickr_team_Cæcilie_1_round.png'
import { FormattedMessage, intlShape, injectIntl } from '../../util/reactIntl'

import css from './IntroLetters.module.css'
import { ExternalLink, NamedLink } from '../../components'

const IntroText = styled.p`
  position: absolute;
  top: 40%;
  font-weight: 900;
  font-size: 4vw;
  width: 50%;
  line-height: 70px;
`

const IntroQ = styled.p`
  font-weight: 900;
`

const Instruction = styled.p``

class LetterImage extends Component {
  render() {
    const { alt, ...rest } = this.props
    return <img alt={alt} {...rest} />
  }
}
const LazyImage = lazyLoadWithDimensions(LetterImage)

export class IntroLetters extends Component {
  componentDidMount() {
    anime
      .timeline({ loop: false })
      .add({
        targets: '.letter',
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        delay: (_, i) => 60 * (i + 1)
      })
      .add({
        targets: '.header',
        translateY: [0, '10vh'],
        duration: 500
      })
      .add({
        targets: '.header',
        translateY: [0, '-60vh']
      })
      .add({
        targets: '.introQ',
        opacity: [0, 1],
        easing: 'easeInOutExpo',
        duration: 500
      })

      .add({
        targets: '.instruction',
        easing: 'easeInOutExpo',
        opacity: [0, 0.8],
        duration: 6000
      })
  }

  render() {
    return (
      <React.Fragment>
        <div className={css.background}>
          <IntroText className="header">
            {this.props.text.split('').map((v, index) => (
              <span className="letter" key={index}>
                {v}
              </span>
            ))}
          </IntroText>
          <IntroQ className="introQ">
            <h2>Til SkillPickr søger vi lige nu i hele landet;</h2>
            <h3>
              DJ’s, Fotografer, Musikere såsom bands, trioer, duoer, solister, sangere, instrumentalister m.m. - Alle
              stile, typer og niveauer er velkommen.
            </h3>
            <h3>
              Er du nysgerrig på at vide mere, så læs videre nedenfor eller gå videre til
              <NamedLink name="SignupPage" className={css.signupLink}>
                <span className={css.signup}>
                  <FormattedMessage id="TopbarDesktop.signup" />
                </span>
              </NamedLink>
            </h3>
          </IntroQ>
          <Instruction className="instruction">
            <p>Først lidt om baggrunden for SkillPickr</p>
            <p>
              Jeg har arbejdet som projektleder indenfor event marketing i omkring 10 år og i løbet af de år har jeg
              brugt timer på at finde netop profiler som jer i både ind og udland. At finde en spansk guitarist, en
              allround DJ, gøgler, danser, fotograf, violinist, kor, osv. har altid bestået i at ringe til &quot;
              Hans&quot; som henviser til &quot;Christina&quot;, som desværre er optaget den dag, som henviser til osv.
              osv.
            </p>
            <p>
              Det vil jeg og min business partner Allan (begge er vi ex musikere) gerne lave om på. Det skal være
              lettere for de udøvende kreative og kunder at finde hinanden og arbejdsbetingelserne for de udøvende
              bedre. Vi satte os derfor for at lave en form for Airbnb/Etsy for udøvende kunstnere og kreative. År og
              blod, sved og tårer senere har vi nu en platform klar, som netop kan hvad Airbnb/Etsy kan, men for alle
              dejlige kreative som jer/os.
            </p>
            <p>
              Navnet er <strong>SkillPickr</strong> og vi har for nylig lanceret.
            </p>
            <p>
              Vi har store og små kunder, klar til at bruge sitet så snart de kan finde jer derinde, og det er her i
              kommer ind i billedet, for vi har brug for jer for at få det til at flyve. Derfor vil vi opfordre alle som
              synes at visionen har noget at byde ind med, til at bruge 10 minutter på at signe jer op via linket
              nedenfor.
            </p>
            <p>
              Det koster ikke noget at oprette sig, og der er dermed intet at tabe, det er en mulighed for at få lidt
              ekstra jobs i bogen. Det er nyt, det er anderledes, men det var Airbnb også, og{' '}
              <u>Hvor intet vover, intet vinder</u>
            </p>
            <p>
              Vores drøm er at skabe et tool og community som er meget mere end &apos;blot&apos; en booking platform. Vi
              ønsker, at du som kreativ her kan finde støtte og tools der giver dig adgang til f.eks. kontrakter,
              bogføring, markedsføring, fondsansøgninger, udgivelser, talentudvikling m.m.
            </p>
            <p>
              Hvad koster det tænker du? Vi tager 10% i kommission for ja selvfølgelig koster det noget, for det koster
              noget at drive og udvikle. Til gengæld er det &apos;no cure no pay&apos; princip, så vi tjener ikke noget
              med mindre i gør.
            </p>
            <p>
              <strong>
                Har i lyst til der findes et sådan sted at gå til, så kan det kun lykkedes med jeres hjælp, fordi uden
                jer er vi ingenting.
              </strong>
            </p>
            <p>
              Hjælp os med at hjælpe jer til flere jobs, ved at støtte op om SkillPickr. Vi arbejder konstant for at
              gøre SkillPickr bedre, så synes i det er noget lort, så sig det til os og forklar gerne hvorfor. Synes i
              noget er fedt, og noget skal være bedre så sig det til os. Kan i lide det vi arbejder for, så sign jer op
              og del gerne med jeres netværk også.
            </p>
            <p>
              Send endelig gerne feedback, spørgsmål eller andet til{' '}
              <a href="mailto:hello@skillpickr.com">hello@skillpickr.com</a>&nbsp;eller tag fat i os på 22462408.
            </p>
            <p>
              {' '}
              Vi håber, i vil tage godt imod vores initiativ og se dig og din profil, så tag initiativet og
              <NamedLink name="SignupPage" className={css.signupLink}>
                <span className={css}>registrer dig nu og her</span>
              </NamedLink>
            </p>
            <p>God dag fra os i SkillPickr</p>
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
          </Instruction>
        </div>
      </React.Fragment>
    )
  }
}
