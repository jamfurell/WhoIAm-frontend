import React from 'react';
import { Link } from 'react-router-dom'

import {makeStyles, Container } from "@material-ui/core"
import Button from '@material-ui/core/Button';

import { createMuiTheme, ThemeProvider, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import { SignalWifi1BarLock } from '@material-ui/icons';
// const photo = "require('../images/IM_bridge.jpg')"
// const backgroundImage= '../images/IM_bridge.JPG'
// background-image: url('../images/home_header_bg.jpg');

const useStyles = makeStyles(theme =>({
    homeRoot: {
        // display: `flex`,
        // justifyContent: `flexstart`
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
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
        // zindex:0,
        
    },
    homeimg: {
        height: '100vh',
        width: '100vw',
        backgroundImage: "",
        backgroundSize: "cover",
        opacity:0.6,
        zindex:-2,

    },
    backdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: 'black',
        opacity: 0.8,
        zIndex:-1,
    },
    brandName: {
        [theme.breakpoints.down('sm')]: {
            fontSize:'150px',
            marginTop: '-650px',
            marginLeft: '50px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '200px',
            marginTop: '-750px',
            marginLeft: '70px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '250px',
            marginTop: '-750px',
            marginLeft: '70px',
        },
        opacity:0.9,
        color: '#fefeff',
        textShadow: '2px 2px black'
    
    },
    homedetail: {
        opacity:0.8,
        // color: '#e8f098',
        color: '#e2c2f4',
        textShadow: '2px 2px black',
    },
    startBtn: {
        opacity: 0.6,
        marginTop: '25px',
        backgroundColor: 'beige',
    }
    // background: '#fefeff',
    // borderRadius: '15px'
    // // fontSize: '10px',
}))



const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeRoot}>

            <Container className={classes.homeContainer} >
                {/* <img className={classes.homeimg} src="https://user-images.githubusercontent.com/76925728/114296091-197a9780-9a5e-11eb-8f97-ff1c4d9add97.jpg"/> */}
                <img
                    src="https://user-images.githubusercontent.com/76925728/114298588-0242a680-9a6c-11eb-929d-e03379f8725d.jpg"
                    alt="bridge"
                    className={classes.homeimg}
                    />
                <div className={classes.backdrop}></div>
                <div> 
                    <h1 className={classes.brandName}>I·M</h1>
                    <h2 className={classes.homedetail}>
                        Welcome to I·M, <br></br> a free questionnaire that delivers a quick summary <br></br> of what shapes your personality.
                    </h2>
                    <Button size="medium" variant="contained"  className={classes.startBtn}>
                        <Link to={'/test'}>Click Here To Start The Quiz</Link>
                    </Button>
                </div>
                
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
