import { put, call, select, takeLatest } from 'redux-saga/effects';
import { setContent, setContentError } from '../action';
import { CONTENTS } from '../constants';
import { fetchContent } from '../api';

/**
 * @method getPage
 * @description returns next page number 
 */
export const getPage = (state: any) => state.nextPage;

/**
 * @generator handleContentload
 * @description It will call the unsplash API when watcher saga calls this generator function. 
 */
export function* handleContentLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchContent, page);
        yield put(setContent(images));
    } catch (error) {
        yield put(setContentError(error.toString()));
    }
}

/**
 * @generator watchContentLoad (Watcher saga)
 * @description It watches for every latest dispatch of type CONTENT.LOAD and if found then it will call handleContentLoad
 */
export default function* watchContentLoad() {
    yield takeLatest(CONTENTS.LOAD, handleContentLoad);
}
