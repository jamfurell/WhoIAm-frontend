import React from 'react';
import { Link } from 'react-router-dom'

import {makeStyles, Container } from "@material-ui/core"
import Button from '@material-ui/core/Button';

//use material ui makeStyles to add css
const useStyles = makeStyles(theme =>({
    homeRoot: {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        '@media (min-width: 600px)' : {
            height: '100vh',
            maxHeight: '1000px',
            minHeight: '500px',
        },
        color:'#fff',
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    },
    homeContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    homeImg: {
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
        color: '#e2c2f4',
        textShadow: '2px 2px black',
    },
    startBtn: {
        opacity: 0.6,
        marginTop: '25px',
        backgroundColor: 'beige',
    },
    startLink:{
        textDecoration: 'none',
        fontWeight: 'bold'
    }
}))



const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.homeRoot}>
            <Container className={classes.homeContainer} >
                <img
                    src="https://user-images.githubusercontent.com/76925728/114298588-0242a680-9a6c-11eb-929d-e03379f8725d.jpg"
                    alt="bridge"
                    className={classes.homeImg}
                />
                <div className={classes.backdrop}></div>
                <div > 
                    <h1 className={classes.brandName}>I·M</h1>
                    <h2 className={classes.homedetail}>
                        Welcome to I·M, <br></br> a free questionnaire that delivers a quick summary <br></br> of what shapes your personality.
                    </h2>
                    <Button size="medium" variant="contained"  className={classes.startBtn}>
                        <Link className={classes.startLink} to={'/test'}>Click Here To Start The Quiz</Link>
                    </Button>
                </div>
            </Container>
        </div>
    );
}

export default Home;
