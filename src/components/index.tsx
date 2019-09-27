import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import { CONTENT_SAGA, CONTENT_TYPESCRIPT } from '../constants'
import SagaLogo from '../images/saga_logo.png'
import TSLogo from '../images/ts_logo.png'

/** It styles component by methods of @material-ui */
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})((props: any) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

/** It styles component by methods of @material-ui */
const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

/**
 * @interface ISplash
 * @description It defines type of history props 
 */
export interface ISplash {
    history?: any,
}

const Splash = (props: ISplash) => {
    /** set initial state in functional component using hooks */
    const [anchorEl, setAnchorEl] = React.useState(null);

    /** handle click of menu open */
    function handleClick(event: any) {
        setAnchorEl(event.currentTarget);
    }

    /** handle click of menu close */
    function handleClose() {
        setAnchorEl(null);
    }

    /** redirect to imagesplage route */
    const redirectToSplashPage = () => {
        props.history.push(`/imagesplash`)
    }

    /** redirect to content route */
    const redirectToContentPage = () => {
        props.history.push(`/content`)
    }

    return (
        <div>
            <div style={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" style={{ marginRight: 2 }} color="inherit" aria-label="menu" onClick={handleClick} >
                            <MenuIcon style={{ height: 40, width: 40 }} />
                        </IconButton>
                        <StyledMenu
                            id="customized-menu"
                            anchorEl={anchorEl}
                            keepMounted={true}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <div style={{ width: 200, fontWeight: 600 }}>
                                <StyledMenuItem color='primary' onClick={redirectToSplashPage} >
                                    <ListItemText ><span style={{ fontSize: "21px", fontWeight: 900 }}>Image Splash</span></ListItemText>
                                </StyledMenuItem>
                                <StyledMenuItem color='primary' onClick={redirectToContentPage} >
                                    <ListItemText ><span style={{ fontSize: "21px", fontWeight: 900 }}>Content Splash</span></ListItemText>
                                </StyledMenuItem>
                            </div>
                        </StyledMenu>
                        <Typography variant="h3" style={{ fontWeight: 600 }}>
                            Routes
                        </Typography>
                        <Typography variant="h3" style={{ fontWeight: 600, marginLeft: '1130px' }} >
                            Redux-saga & Typescript
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
            <div style={{ width: '49%', height: '500px', float: 'left', paddingLeft: '5px', paddingRight: '5px', textAlign: 'center', marginTop: '50px', marginLeft: '10px' }}>
                <Typography variant="h2" style={{ fontWeight: 600 }} >
                    Redux-Saga
                </Typography>
                <br />
                <Typography variant="h3" style={{ marginTop: '30px' }} >
                    {CONTENT_SAGA}
                </Typography>
                <div style={{ width: 150, height: 150, marginTop: '20px', marginLeft: 360 }}>
                    <img src={SagaLogo} />
                </div>
            </div>
            <div style={{ width: '49%', float: 'right', height: '500px', paddingLeft: '5px', paddingRight: '5px', textAlign: 'center', marginTop: '50px', marginRight: '10px', borderLeft: '1px black solid' }} >
                <Typography variant="h2" style={{ fontWeight: 600 }} >
                    Typescript
                </Typography>
                <br />
                <Typography variant="h3" style={{ marginTop: '30px' }}>
                    {CONTENT_TYPESCRIPT}
                </Typography>
                <div style={{ width: 120, height: 120, marginTop: '20px', marginLeft: 355 }}>
                    <img src={TSLogo} />
                </div>
            </div>
        </div>
    )
}

export default Splash;