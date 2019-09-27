import { combineReducers } from 'redux';

import loadingReducer from './loadingReducer';
import imagesReducer from './imagesReducer';
import errorReducer from './errorReducer';
import pageReducer from './pageReducer';
import contentReducer from './contentReducer';

/** Combine all reducers in rootReducer */
const rootReducer = combineReducers({
    isLoading: loadingReducer,
    images: imagesReducer,
    error: errorReducer,
    nextPage: pageReducer,
    content: contentReducer
});

export default rootReducer;
