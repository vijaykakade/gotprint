import { put, takeLatest, all, call } from 'redux-saga/effects';
import { setGallery, setLoading } from '../reducers/galleryReducer';

function* getPhotosWorker() {
  console.log('inside post worker');
  try {
    const photos = yield fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json())
    yield put(setGallery(photos))
    yield put(setLoading(false));
  }
  catch (error) {
    console.log('error', error);
    yield put({ type: 'POSTS_REQUEST_FAILED', error })
  }
}

function* getPhotosWatcher() {
  yield takeLatest('POSTS_REQUEST', getPhotosWorker)
}

export default function* rootSaga() {
  yield all([getPhotosWatcher()])
}