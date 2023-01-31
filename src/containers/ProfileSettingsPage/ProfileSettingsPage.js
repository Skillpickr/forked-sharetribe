import React, { Component } from 'react'
import { bool, func, object, shape, string } from 'prop-types'

import { compose } from 'redux'
import { connect } from 'react-redux'
import { FormattedMessage, injectIntl, intlShape } from '../../util/reactIntl'
import { propTypes } from '../../util/types'
import { ensureCurrentUser } from '../../util/data'
import { isScrollingDisabled } from '../../ducks/UI.duck'
import {
  Page,
  UserNav,
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink,
  Alert,
  Button
} from '../../components'
import { ProfileSettingsForm } from '../../forms'
import { TopbarContainer } from '../../containers'

import { updateProfile, uploadImage } from './ProfileSettingsPage.duck'
import css from './ProfileSettingsPage.module.css'

const onImageUploadHandler = (values, fn) => {
  const { id, imageId, file } = values
  if (file) {
    fn({ id, imageId, file })
  }
}

export class ProfileSettingsPageComponent extends Component {
  render() {
    const {
      currentUser,
      currentUserListing,
      image,
      onImageUpload,
      onUpdateProfile,
      scrollingDisabled,
      updateInProgress,
      updateProfileError,
      uploadImageError,
      uploadInProgress,
      intl
    } = this.props

    const handleSubmit = (values) => {
      const { firstName, lastName, bio: rawBio } = values

      // Ensure that the optional bio is a string
      const bio = rawBio || ''

      const profile = {
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        bio
      }
      const uploadedImage = this.props.image

      // Update profileImage only if file system has been accessed
      const updatedValues =
        uploadedImage && uploadedImage.imageId && uploadedImage.file
          ? { ...profile, profileImageId: uploadedImage.imageId }
          : profile

      onUpdateProfile(updatedValues)
      isDisabled()
    }

    const isDisabled = () => {
      const isDis = user.profileImage && user.attributes.profile.bio ? false : true
      return isDis
    }

    const user = ensureCurrentUser(currentUser)
    const { firstName, lastName, bio } = user.attributes.profile
    const profileImageId = user.profileImage ? user.profileImage.id : null
    const profileImage = image || { imageId: profileImageId }

    const profileSettingsForm = user.id ? (
      <ProfileSettingsForm
        className={css.form}
        currentUser={currentUser}
        initialValues={{ firstName, lastName, bio, profileImage: user.profileImage }}
        profileImage={profileImage}
        onImageUpload={(e) => onImageUploadHandler(e, onImageUpload)}
        uploadInProgress={uploadInProgress}
        updateInProgress={updateInProgress}
        uploadImageError={uploadImageError}
        updateProfileError={updateProfileError}
        isCreateListingOpen={isDisabled}
        onSubmit={handleSubmit}
      />
    ) : null

    const title = intl.formatMessage({ id: 'ProfileSettingsPage.title' })
    // console.log(user)

    return (
      <Page className={css.root} title={title} scrollingDisabled={scrollingDisabled}>
        <LayoutSingleColumn>
          <LayoutWrapperTopbar>
            <TopbarContainer currentPage="ProfileSettingsPage" />
            <UserNav selectedPageName="ProfileSettingsPage" listing={currentUserListing} />
          </LayoutWrapperTopbar>
          <LayoutWrapperMain>
            <div className={css.content}>
              <div className={css.headingContainer}>
                <h1 className={css.heading}>
                  <FormattedMessage id="ProfileSettingsPage.heading" />
                </h1>

                {user.id ? (
                  <NamedLink className={css.profileLink} name="ProfilePage" params={{ id: user.id.uuid }}>
                    <FormattedMessage id="ProfileSettingsPage.viewProfileLink" />
                  </NamedLink>
                ) : null}
              </div>
              {/* <iframe
                src="https://www.loom.com/embed/131bb7185a86438cb035484934fcd79e"
                style={{ width: '100%', height: "100%", minHeight: 400 }}></iframe> */}
              <Alert type="secondary">
                <div>
                  <p>
                    <FormattedMessage id="ProfileSettingsPage.guide" />
                  </p>
                </div>
              </Alert>
              {/* <iframe
                src="https://www.loom.com/embed/131bb7185a86438cb035484934fcd79e"
                frameBorder="0"
                // webkitallowfullscreen
                // mozallowfullscreen
                allowFullScreen={true}
                allow="autoplay; encrypted-media"
                style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe> */}
              {profileSettingsForm}
            </div>
          </LayoutWrapperMain>
          <LayoutWrapperFooter>
            <Footer />
          </LayoutWrapperFooter>
        </LayoutSingleColumn>
      </Page>
    )
  }
}

ProfileSettingsPageComponent.defaultProps = {
  currentUser: null,
  currentUserListing: null,
  uploadImageError: null,
  updateProfileError: null,
  image: null
}

ProfileSettingsPageComponent.propTypes = {
  currentUser: propTypes.currentUser,
  currentUserListing: propTypes.ownListing,
  image: shape({
    id: string,
    imageId: propTypes.uuid,
    file: object,
    uploadedImage: propTypes.image
  }),
  onImageUpload: func.isRequired,
  onUpdateProfile: func.isRequired,
  scrollingDisabled: bool.isRequired,
  updateInProgress: bool.isRequired,
  updateProfileError: propTypes.error,
  uploadImageError: propTypes.error,
  uploadInProgress: bool.isRequired,

  // from injectIntl
  intl: intlShape.isRequired
}

const mapStateToProps = (state) => {
  const { currentUser, currentUserListing } = state.user
  const { image, uploadImageError, uploadInProgress, updateInProgress, updateProfileError } = state.ProfileSettingsPage
  return {
    currentUser,
    currentUserListing,
    image,
    scrollingDisabled: isScrollingDisabled(state),
    updateInProgress,
    updateProfileError,
    uploadImageError,
    uploadInProgress
  }
}

const mapDispatchToProps = (dispatch) => ({
  onImageUpload: (data) => dispatch(uploadImage(data)),
  onUpdateProfile: (data) => dispatch(updateProfile(data))
})

const ProfileSettingsPage = compose(
  connect(mapStateToProps, mapDispatchToProps),
  injectIntl
)(ProfileSettingsPageComponent)

export default ProfileSettingsPage
