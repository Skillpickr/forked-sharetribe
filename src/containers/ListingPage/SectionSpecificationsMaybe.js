import React, { useState } from 'react'
import { FormattedMessage } from '../../util/reactIntl'
import { ExternalLink } from '../../components'

import css from './ListingPage.module.css'
import { Skills } from '../../util/category'
import { PropertyGroup } from '../../components'

const SectionSpecificationsMaybe = (props) => {
  const MIN_LENGTH_FOR_LONG_WORDS_IN_DESCRIPTION = 20

  // Component's props should include all the possible options (from config)
  // and listing's publicData
  const {
    soundLightExp,
    ownStudio,
    djGearForPlaying,
    songRequest,
    photoToVideoService,
    videoToPhotoService,
    videoInteractiveService,
    editingService,
    publicData,
    skillType
  } = props

  const homepageUrl = publicData && publicData.url ? publicData.url : null
  const playingStyle = publicData && publicData.playingStyle ? publicData.playingStyle : null
  const gear = publicData && publicData.gear ? publicData.gear : null
  const technicalRider = publicData && publicData.technicalRider ? publicData.technicalRider : null
  const cateringRider = publicData && publicData.cateringRider ? publicData.cateringRider : null

  // Don't return anything if public data doesn't contain view field
  // That's why we named this component as SectionViewMaybe
  if (!publicData) {
    return null
  }

  // Shared
  const selectedSoundLightExp = publicData && publicData.soundLightExp ? publicData.soundLightExp : null
  const soundLightExpConfig = soundLightExp.find((o) => o.key === selectedSoundLightExp)
  const soundLightExpLabel = soundLightExpConfig ? soundLightExpConfig.label : null

  const selectedOwnStudio = publicData && publicData.ownStudio ? publicData.ownStudio : null
  const ownStudioConfig = ownStudio.find((o) => o.key === selectedOwnStudio)
  const ownStudioLabel = ownStudioConfig ? ownStudioConfig.label : null

  const selectedEditingService = publicData && publicData.editingService ? publicData.editingService : null
  const editingServiceConfig = editingService.find((o) => o.key === selectedEditingService)
  const editingServiceLabel = editingServiceConfig ? editingServiceConfig.label : null

  // Photographer

  const selectedPhotoToVideoService =
    publicData && publicData.photoToVideoService ? publicData.photoToVideoService : null
  const photoToVideoServiceConfig = photoToVideoService.find((o) => o.key === selectedPhotoToVideoService)
  const photoToVideoServiceLabel = photoToVideoServiceConfig ? photoToVideoServiceConfig.label : null

  // DJ
  const selectedDjGearForPlaying = publicData && publicData.djGearForPlaying ? publicData.djGearForPlaying : null
  const djGearForPlayingConfig = djGearForPlaying.find((o) => o.key === selectedDjGearForPlaying)
  const djGearForPlayingLabel = djGearForPlayingConfig ? djGearForPlayingConfig.label : null

  const selectedSongRequest = publicData && publicData.songRequest ? publicData.songRequest : null

  // Videographer
  const selectedVideoInteractiveService =
    publicData && publicData.videoInteractiveService ? publicData.videoInteractiveService : null
  const videoInteractiveServiceConfig = videoInteractiveService.find((o) => o.key === selectedVideoInteractiveService)
  const videoInteractiveServiceLabel = videoInteractiveServiceConfig ? videoInteractiveServiceConfig.label : null

  const selectedvideoToPhotoService =
    publicData && publicData.videoToPhotoService ? publicData.videoToPhotoService : null
  const videoToPhotoServiceConfig = videoToPhotoService.find((o) => o.key === selectedvideoToPhotoService)
  const videoToPhotoServiceLabel = videoToPhotoServiceConfig ? videoToPhotoServiceConfig.label : null

  const songRequestConfig = songRequest.find((o) => o.key === selectedSongRequest)
  const songRequestLabel = songRequestConfig ? songRequestConfig.label : null

  const djComponent = (
    <div>
      {djGearForPlayingLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.djGearForPlaying" values={{ djGearForPlaying: djGearForPlayingLabel }} />
        </p>
      )}
      {songRequestLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.songRequest" values={{ songRequest: songRequestLabel }} />
        </p>
      )}
      {playingStyle && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.playingStyle" />
          </p>
          <p className={css.description}>{playingStyle}</p>
        </div>
      )}
      {technicalRider && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.technicalRider" />
          </p>
          <p className={css.description}>{technicalRider}</p>
        </div>
      )}
      {cateringRider && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.cateringRider" />
          </p>
          <p className={css.description}>{cateringRider}</p>
        </div>
      )}
    </div>
  )

  const photographerComponent = (
    <div>
      {soundLightExpLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.soundLightExp" values={{ soundLightExp: soundLightExpLabel }} />
        </p>
      )}

      {ownStudioLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
      {editingServiceLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.editingServiceLabel"
            values={{ editingServiceLabel: editingServiceLabel }}
          />
        </p>
      )}
      {photoToVideoServiceLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.photoToVideoServiceLabel"
            values={{ photoToVideoServiceLabel: photoToVideoServiceLabel }}
          />
        </p>
      )}
      {gear && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.gear" />
          </p>
          <p className={css.description}>{gear}</p>
        </div>
      )}
    </div>
  )

  const videographerComponent = (
    <div>
      {soundLightExpLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.soundLightExp" values={{ soundLightExp: soundLightExpLabel }} />
        </p>
      )}

      {ownStudioLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
      {editingServiceLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.editingServiceLabel"
            values={{ editingServiceLabel: editingServiceLabel }}
          />
        </p>
      )}
      {videoInteractiveServiceLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.videoInteractiveServiceLabel"
            values={{ videoInteractiveServiceLabel: videoInteractiveServiceLabel }}
          />
        </p>
      )}
      {videoToPhotoServiceLabel && (
        <p className={css.description}>
          <FormattedMessage
            id="ListingPage.videoToPhotoServiceLabel"
            values={{ videoToPhotoServiceLabel: videoToPhotoServiceLabel }}
          />
        </p>
      )}
      {gear && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.gear" />
          </p>
          <p className={css.description}>{gear}</p>
        </div>
      )}
    </div>
  )

  const musicianComponent = (
    <div>
      {technicalRider && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.technicalRider" />
          </p>
          <p className={css.description}>{technicalRider}</p>
        </div>
      )}
      {cateringRider && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.cateringRider" />
          </p>
          <p className={css.description}>{cateringRider}</p>
        </div>
      )}
    </div>
  )

  const bandComponent = (
    <div>
      {technicalRider && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.technicalRider" />
          </p>
          <p className={css.description}>{technicalRider}</p>
        </div>
      )}
      {cateringRider && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.cateringRider" />
          </p>
          <p className={css.description}>{cateringRider}</p>
        </div>
      )}
    </div>
  )

  const makeupComponent = (
    <div>
      {ownStudioLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
      {gear && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.gear" />
          </p>
          <p className={css.description}>{gear}</p>
        </div>
      )}
    </div>
  )

  const dancerComponent = (
    <div>
      {ownStudioLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
      {gear && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.gear" />
          </p>
          <p className={css.description}>{gear}</p>
        </div>
      )}
    </div>
  )

  const miscellaneousComponent = (
    <div>
      {ownStudioLabel && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.ownStudio" values={{ ownStudio: ownStudioLabel }} />
        </p>
      )}
      {gear && (
        <div>
          <p className={css.subTitle}>
            <FormattedMessage id="ListingPage.gear" />
          </p>
          <p className={css.description}>{gear}</p>
        </div>
      )}
    </div>
  )

  const [state] = useState(skillType)

  return homepageUrl || skillType ? (
    <div className={css.sectionFeatures}>
      <h2 className={css.featuresTitle}>
        <FormattedMessage id="ListingPage.specificationsTitle" />
      </h2>
      {homepageUrl && (
        <p className={css.description}>
          <FormattedMessage id="ListingPage.homepageUrl" />
          <ExternalLink href={homepageUrl}>{homepageUrl}</ExternalLink>
        </p>
      )}

      {/* Photogapher */}
      {state.includes(Skills.photographer) && photographerComponent}

      {/* Videographer */}
      {state.includes(Skills.videographer) && videographerComponent}

      {/* DJ */}
      {state.includes(Skills.dj) && djComponent}

      {/* Musician */}
      {state.includes(Skills.musician) && musicianComponent}

      {/* Bands */}
      {state.includes(Skills.band) && bandComponent}

      {/* Makeup Artist */}
      {state.includes(Skills.makeupArtist) && makeupComponent}

      {/* Dancer */}
      {state.includes(Skills.dancer) && dancerComponent}

      {/* Miscellaneous */}
      {state.includes(Skills.miscellaneous) && miscellaneousComponent}
    </div>
  ) : null
}

export default SectionSpecificationsMaybe
