import React from 'react';
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, makeStyles, List, Container } from "@material-ui/core"

import { IconButton } from "@material-ui/core"
import { Home } from "@material-ui/icons"

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `flexstart`
    },
    listDisplayFlex: {
        display: `flex`,
        // justifyContent: `space-between`
        width: '100%',
        zIndex: '1100',
        flexshrink:'0',
        flexdirection:'column',
    },
    linkText: {
        textDecoration: `none`,
        color: `white`,
        top:'0',
        left:'auto',
        right:'0',
        margin:'25px',
        position:'fixed',
    },
    navColor:{
        backgroundColor:'#191a1ded',
    }
});
    
function Navbar(){
    const classes = useStyles();

    return (
        <AppBar className={classes.navColor} position="static">
            <Toolbar>
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <Home fontSize="large" />
                    </IconButton>
                    <List component="nav" aria-labelledby="main navigation" className={classes.listDisplayFlex}>
                        <Link className={classes.linkText} to={'/'}>About</Link>
                    </List>

                </Container>
            </Toolbar>
        </AppBar>
        // <nav>
        //     <a class="hamburger" href="#"></a>
        //     <ul>
        //         <li><Link to={'/'}>About</Link></li>
        //     </ul>
	    // </nav>
    )
}


export default Navbar