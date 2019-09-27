import * as React from 'react';
import Header from './Header'
import ImageGrid from './ImageGrid'

/**
 * @interface IImageSplash
 * @description It defines type of history props 
 */
export interface IImageSplash {
    history?: any,
}

const ImageSplash = (props: IImageSplash) => {
    return (
        <div>
            <Header history={props.history} />
            <ImageGrid />
        </div>
    )
}

export default ImageSplash;