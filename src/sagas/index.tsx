import { all } from 'redux-saga/effects';
import imagesSaga from './imagesSaga';
import contentSaga from './contentSaga'

/**
 * @generator rootSaga
 * @description It combines and calls all watcher sagas. 
 */
export default function* rootSaga() {
    yield all([imagesSaga, contentSaga]);
}
