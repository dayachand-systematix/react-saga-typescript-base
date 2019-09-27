import { IMAGES, CONTENTS } from '../constants';
/** It dispatches type to reducer for images */
const loadImages = () => ({
    type: IMAGES.LOAD,
});

/** It dispatches type & image(data)to reducer for images */
const setImages = (images: object) => ({
    type: IMAGES.LOAD_SUCCESS,
    images,
});

/** It dispatches type & error to reducer for images */
const setError = (error: any) => ({
    type: IMAGES.LOAD_FAIL,
    error,
});

/** It dispatches type to reducer for content */
const loadContent = () => ({
    type: CONTENTS.LOAD,
});

/** It dispatches type & content(data) to reducer for content */
const setContent = (content: object) => ({
    type: CONTENTS.LOAD_SUCCESS,
    content,
});

/** It dispatches type & error to reducer for content */
const setContentError = (error: any) => ({
    type: CONTENTS.LOAD_FAIL,
    error,
});

/** It defines type of Action in reducer */
export interface IAction<T = any> {
    type: T,
    [key: string]: any
}

export {
    loadImages,
    setImages,
    setError,
    loadContent,
    setContent,
    setContentError
};
