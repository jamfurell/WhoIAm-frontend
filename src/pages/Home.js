import React from 'react';
import { Link } from 'react-router-dom'

import {makeStyles, Container } from "@material-ui/core"

import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { SignalWifi1BarLock } from '@material-ui/icons';
// const photo = "require('../images/IM_bridge.jpg')"
// const backgroundImage= '../images/IM_bridge.JPG'
// background-image: url('../images/home_header_bg.jpg');

const useStyles = makeStyles({
    homeRoot: {
        // display: `flex`,
        // justifyContent: `flexstart`
        '@media (min-width: 600px)' : {
            height: '100vh',
            minHeight: '1000px',
            maxHeight: '500px',
            // color: 'red',
        },
        // color:'blue',
        color:'#fff',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    },
    
    homeContainer: {
        // backgroundImage: `url("https://www.nicesnippets.com/image/imgpsh_fullsize.png")`,
        // backgroundRepeat: 'no-repeat',
        // height: '100vh',
        // width: '100vw',
        // backgroundColor: 'grey',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '24px',
        // marginBottom: '600px',
        
    },
    homeimg: {
        height: '100vh',
        width: '100vw',
        backgroundImage: "",
        backgroundSize: "cover",
        opacity:0.7

    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: '#0b1236',
        opacity: 0.3,
        zIndex:1,
      },
    //   background: {
    //     position: 'absolute',
    //     left: 0,
    //     right: 0,
    //     top: 0,
    //     bottom: 0,
    //     backgroundSize: 'cover',
    //     backgroundRepeat: 'no-repeat',
    //     zIndex: -2,
    //   },
})



const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeRoot}>
           

            <Container className={classes.homeContainer} >
                {/* <img className={classes.homeimg} src="https://user-images.githubusercontent.com/76925728/114296091-197a9780-9a5e-11eb-8f97-ff1c4d9add97.jpg"/> */}
                <img
                    src="https://user-images.githubusercontent.com/76925728/114296091-197a9780-9a5e-11eb-8f97-ff1c4d9add97.jpg"
                    alt="wonder"
                    className={classes.homeimg}
                    />
                <div className={classes.backdrop} />
                
                {/* <h1>Welcome to I·M, a free questionnaire that delivers a quick summary of what shapes your personality. </h1>
                <button className="btn-blue"><Link to={'/test'}>Click Here To Start The Quiz</Link></button> */}

            </Container>

        </div>
    );
}

export default Home;


// function MyComponent() {
//     const theme = useTheme();
//     const matches = useMediaQuery(theme.breakpoints.up('sm'));
  
//     return <span>{`theme.breakpoints.up('sm') matches: ${matches}`}</span>;
//   }
  
//   const theme = createMuiTheme();
