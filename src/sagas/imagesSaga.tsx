import { put, call, select, takeLatest } from 'redux-saga/effects';

import { setImages, setError } from '../action';
import { IMAGES } from '../constants';
import { fetchImages } from '../api';

/**
 * @method getPage
 * @description returns next page number 
 */
export const getPage = (state: any) => state.nextPage;

/**
 * @generator handleImagesLoad
 * @description It will call the unsplash API when watcher saga calls this generator function. 
 */
export function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (error) {
        yield put(setError(error.toString()));
    }
}

/**
 * @generator watchImagesLoad (Watcher saga)
 * @description It watches for every latest dispatch of type IMAGES.LOAD and if found then it will call handleImagesLoad
 */
export default function* watchImagesLoad() {
    yield takeLatest(IMAGES.LOAD, handleImagesLoad);
}
