import { createActions, handleActions } from 'redux-actions';

export const {
  setGallery,
  setLoading,
  updateGallery,
  setCurrentActivePage
} = createActions({
  SET_GALLERY: data => data,
  SET_LOADING: data => data,
  UPDATE_GALLERY: data => data,
  SET_CURRENT_ACTIVE_PAGE: data => data
})

const defaultState = {
  galleryImages: undefined,
  loading: true,
  currentList: [],
  currentActivePage: 1
}

/* selectors */

export const selectPhotos = (state) => state.gallery.galleryImages;
export const selectLoadindStatus = (state) => state.gallery.loading;
export const selectCurrentActivePage = (state) => state.gallery.currentActivePage;

/* reducer */

const gallery = handleActions({
  [setGallery]: (state, { payload }) => {
    return {
      ...state,
      galleryImages: payload
    }
  },
  [setLoading]: (state, {payload}) => {
    return {
      ...state,
      loading: payload
    }
  },
  [updateGallery]: (state, { payload }) => {
    return {
      ...state,
    currentList: payload
    }
  },
  [setCurrentActivePage]: (state, {payload}) => {
    return {
      ...state,
      currentActivePage: payload
    }
  }
}, defaultState)

export default gallery;