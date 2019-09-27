import * as React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { loadImages, IAction } from '../../action';
import './styles.css';
import { Dispatch } from "redux";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import LinearProgress from '@material-ui/core/LinearProgress';

/**
 * @interface IImageGrid
 * @description It defines types of props
 */
export interface IImageGrid {
    isLoading?: any,
    images?: any[],
    error?: any,
    imageStats?: any
    loadImages?: any
}

/** Image Grid functional component */
const ImageGrid = (props: IImageGrid) => {

    /** Using lifecycle method functionality through hooks */
    React.useEffect(() => {
        props.loadImages()
    }, [])

    const { images, isLoading } = props;
    return (
        <div>
            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                    overflow: 'hidden',
                }}
            >
                <GridList
                    cellHeight={280}
                    style={{
                        width: 1200,
                        height: 550,
                    }}
                >
                    <GridListTile
                        key="Subheader"
                        cols={2}
                        style={{ height: 'auto' }}
                    />
                    {images && images.map((tile: any) => (
                        <GridListTile key={tile.urls.small}>
                            <img
                                src={tile.urls.small}
                                alt={tile.user.username}
                            />
                            <GridListTileBar
                                title={tile.user.instagram_username}
                                actionIcon={
                                    <IconButton
                                        style={{
                                            color:
                                                'rgba(255, 255, 255, 0.54)',
                                        }}
                                        aria-label={`info about ${tile.title}`}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>
            </div>
            {isLoading ? (<LinearProgress style={{ marginLeft: '257px', marginTop: '20px', width: '1195px' }} />) : <Button
                style={{ marginLeft: '800px', marginTop: '20px', width: '110px', height: '40px', fontSize: '12px' }}
                variant="contained"
                color="primary"
                onClick={props.loadImages}
            >
                Load More
                </Button>}
        </div>
    );
    // }
}

/**
 * @method mapStateToProps
 * @param {state}
 * @description Extracting data from state of Store.
 */
function mapStateToProps(state: IImageGrid): any {
    return {
        isLoading: state.isLoading,
        images: state.images,
        error: state.error,
        imageStats: state.imageStats
    }
};

/**
 * @method mapDispatchToProps
 * @param {dispatch}
 * @description Connects action creator to the component.
 */
const mapDispatchToProps = (dispatch: Dispatch<IAction>) => ({
    loadImages: () => dispatch(loadImages()),
});

/** It connects Component to Redux-store */
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
