import React, { useState } from 'react';
import { FormattedMessage } from '../../util/reactIntl';
import { ExternalLink } from '../../components';

import css from './ListingPage.module.css';

const SectionSpecificationsMaybe = props => {
  const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20;

  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const { soundLightExp, ownStudio, djGearForPlaying, songRequest, publicData, skillType } = props;

  const homepageUrl = publicData && publicData.url ? publicData.url : null;
  const playingStyle = publicData && publicData.playingStyle ? publicData.playingStyle : null;
  const gear = publicData && publicData.gear ? publicData.gear : null;
  const technicalRider = publicData && publicData.technicalRider ? publicData.technicalRider : null;
  const cateringRider = publicData && publicData.cateringRider ? publicData.cateringRider : null;

  // Don't return anything if public data doesn't contain view field
  // That's why we named this component as SectionViewMaybe
  if (!publicData ) {
    return null;
  }

  // Find selected options label
  const selectedSoundLightExp =
  publicData && publicData.soundLightExp ? publicData.soundLightExp : null;
  const soundLightExpConfig = soundLightExp.find(o => o.key === selectedSoundLightExp);
  const soundLightExpLabel = soundLightExpConfig ? soundLightExpConfig.label : null;

  const selectedOwnStudio = publicData && publicData.ownStudio ? publicData.ownStudio : null;
  const ownStudioConfig = ownStudio.find(o => o.key === selectedOwnStudio);
  const ownStudioLabel = ownStudioConfig ? ownStudioConfig.label : null;

  const selectedDjGearForPlaying = publicData && publicData.djGearForPlaying ? publicData.djGearForPlaying: null;
  const djGearForPlayingConfig = djGearForPlaying.find(o => o.key === selectedDjGearForPlaying);
  const djGearForPlayingLabel = djGearForPlayingConfig ? djGearForPlayingConfig.label : null;

  const selectedSongRequest = publicData && publicData.songRequest ? publicData.songRequest: null;
  const songRequestConfig = songRequest.find(o => o.key === selectedSongRequest);
  const songRequestLabel = songRequestConfig ? songRequestConfig.label : null;

  const djComponent = (
    <div>
      {djGearForPlayingLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.djGearForPlaying"
            values={{ djGearForPlaying: djGearForPlayingLabel }}
          />
        </p>
      )}
      {songRequestLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.songRequest"
            values={{ songRequest: songRequestLabel }}
          />
        </p>
      )}
      {playingStyle && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.playingStyle" values={{ style: playingStyle }}/>
        </p>
      )}
      {technicalRider && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.technicalRider" values={{ technical: technicalRider }}/>
        </p>
      )}
      {cateringRider && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.cateringRider" values={{ catering: cateringRider }}/>
        </p>
      )}
    </div>
  )

  const photographerComponent = (
    <div>
      {soundLightExpLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.soundLightExp"
            values={{ soundLightExp: soundLightExpLabel }}
          />
        </p>
      )}

      {ownStudioLabel &&  (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
    </div>
  )

  const [state] = useState(skillType);

  return soundLightExpLabel || ownStudioLabel || homepageUrl || djGearForPlayingLabel ? (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.specificationsTitle" />
      </h2>

       {/* Photogapher */}
      {state.includes('photographer') && photographerComponent}

      {/* DJ */}
      {state.includes('dj') && djComponent}


      {homepageUrl && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.homepageUrl" />
          <ExternalLink href={homepageUrl}>{homepageUrl}</ExternalLink>
        </p>
      )}

      {gear && (
          <p className={css.description}>
            <FormattedMessage id="ListingPage.gear" values={{ gear: gear }} />
          </p>
      )}
    </div>
  ) : null;
};

export default SectionSpecificationsMaybe;
