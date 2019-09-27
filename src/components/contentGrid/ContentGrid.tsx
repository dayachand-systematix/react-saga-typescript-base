import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { loadContent, IAction } from '../../action';
import { Dispatch } from "redux";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * @interface IContentGrid
 * @description It defines types of props
 */
export interface IContentGrid {
    isLoading?: any,
    images?: any[],
    error?: any,
    imageStats?: any
    loadContent?: any,
    content?: any[]
}

/** Image Grid functional Component */
const ImageGrid = (props: IContentGrid) => {

    /** Using lifecycle method functionality through hooks */
    React.useEffect(() => {
        props.loadContent()
    }, [])

    const { isLoading, content } = props;
    return (
        <div>
            <div className='row'>
                {content && content.map((tile: any) => (
                    <div className='col-md-3' style={{ height: 400 }} >
                        <Card>
                            <CardActionArea>
                                <div style={{ height: 300 }}>
                                    <CardMedia
                                        component="img"
                                        alt={tile.title}
                                        image={tile.preview_photos[0].urls.small}
                                        title={tile.title}
                                    />
                                </div>
                                <CardContent style={{ minHeight: 90, maxHeight: 90 }}>
                                    <Typography gutterBottom={true} variant="h5" component="h2">
                                        {tile.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {tile.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </div>
                ))}
            </div>
            {isLoading ? (<LinearProgress style={{ marginTop: '20px' }} />) : <Button
                style={{ marginLeft: '800px', marginTop: '20px', marginBottom: '10px', width: '110px', height: '40px', fontSize: '12px' }}
                variant="contained"
                color="primary"
                onClick={props.loadContent}
            >
                Load More
                </Button>}
        </div>
    );
}

/**
 * @method mapStateToProps
 * @param {state}
 * @description Extracting data from state of Store.
 */
function mapStateToProps(state: IContentGrid): any {
    return {
        isLoading: state.isLoading,
        images: state.images,
        error: state.error,
        imageStats: state.imageStats,
        content: state.content
    }
};

/**
 * @method mapDispatchToProps
 * @param {dispatch}
 * @description Connects action creator to the component.
 */
const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
    loadContent: () => dispatch(loadContent()),
});

/** It connects Component to Redux-store */
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
