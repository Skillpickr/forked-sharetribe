import EditPhotographerFeaturesComponent from './skills/EditPhotographerFeaturesComponent'
import EditVideographerFeaturesComponent from './skills/EditVideographerFeaturesComponent'
import EditDJFeaturesComponent from './skills/EditDJFeaturesComponent'
import EditMusicianFeaturesComponent from './skills/EditMusicianFeaturesComponent'
import EditBandFeaturesComponent from './skills/EditBandFeaturesComponent'

const SelectedComponent = () => {
  switch (skill) {
    case Skills.photographer:
      return <EditPhotographerFeaturesComponent filterConfig={filterConfig} intl={intl} />
    case Skills.videographer:
      return <EditVideographerFeaturesComponent filterConfig={filterConfig} intl={intl} />
    case Skills.dj:
      return <EditDJFeaturesComponent filterConfig={filterConfig} intl={intl} />
    case Skills.musician:
      return <EditMusicianFeaturesComponent filterConfig={filterConfig} intl={intl} />
    case Skills.band:
      return <EditBandFeaturesComponent filterConfig={filterConfig} intl={intl} />
    default:
      return null
  }
}
