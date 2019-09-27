import * as React from 'react';
import Header from './Header'
import ContentGrid from './contentGrid'

/**
 * @interface IContentPage
 * @description It defines type of history props 
 */
export interface IContentPage {
    history?: any,
}

const ContentPage = (props: IContentPage) => {
    return (
        <div>
            <Header history={props.history} />
            <ContentGrid />
        </div>
    )
}

export default ContentPage;