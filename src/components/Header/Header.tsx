import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import './styles.css';
import Typography from '@material-ui/core/Typography';
import BackImage from '../../images/backImage.png';

/**
 * @interface IHeader
 * @description It defines type of history props 
 */
export interface IHeader {
    history?: any,
}

/** Header functional component */
const BackMenu = (props: IHeader) => {
    const redirectToRoot = () => {
        props.history.push(`/`)
    }
    return (
        <div>
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" style={{ marginRight: 2 }} color="inherit" aria-label="menu" onClick={redirectToRoot} >
                            <img src={BackImage} />
                        </IconButton>
                        <Typography variant="h3" style={{ fontWeight: 600 }}>
                            Back
                        </Typography>
                        <Typography variant="h3" style={{ fontWeight: 600, marginLeft: '1145px' }} >
                            Redux-saga & Typescript
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        </div >
    )
}

export default BackMenu;



