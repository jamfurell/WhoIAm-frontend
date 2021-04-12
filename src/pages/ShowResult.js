import React, {useState, useEffect} from 'react'
import TestTakenModel from '../models/TestTaken'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import {makeStyles} from "@material-ui/core"

import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
// import component for each personality category 
import Ext_Res from '../components/results/Ext_Res'
import Agr_Res from '../components/results/Agr_Res'
import Con_Res from '../components/results/Con_Res'
import Emt_Res from '../components/results/Emt_Res'
import Int_Res from '../components/results/Int_Res'

//import component for add name dialog
import AddNameForm from '../components/AddNameForm'

const useStyles = makeStyles(theme =>({
    resultsRoot: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        backgroundImage: `url("https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHw%3D&w=1000&q=80")`,
        backgroundColor: '#cccccc',
        backgroundSize: 'cover'
    },
    allResults:{
        paddingTop: '100px',
    },
    column:{
        display: 'flex',
        flexDirection:'column',
    },
    row: {
        display: 'flex',
        justifyContent: 'center',
    },
    saveAndDelete: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
        },
        display: 'flex',
        justifyContent: 'center',
        padding: '80px 0px',
        justifyContent:'space-evenly',
    },
    deleteButton:{
        background: '#f34343f0',
        color: 'white',
        [theme.breakpoints.down('sm')]: {
            margin: '15px 80px'
        },
    },
}))

const ShowResult = (props) =>{
    const [result, setResult] = useState({});
    const history = useHistory()
    const classes = useStyles();

    function fetchScores(id) { 
        if (id) {
            TestTakenModel.show(id).then((data) => {
                setResult(data.TestTaken);
            });
            } else {
                return null;
            }
        }
        
    useEffect(()=>{
        fetchScores(props.match.params.id)
        }
    ,[])

    const deleteClickedResult = () =>{
        deleteResult(result._id)
    }

    const deleteResult = (result) =>{
        TestTakenModel.delete(result).then( (res) =>{
            alert(`Your test results have been deleted successfully`)
            history.push('/')
        }) 
    }

    return(
        <div className={classes.resultsRoot}> 
            <div className={classes.allResults}>
                <h2>
                    Your Results 
                </h2> 
                <div className={classes.column}>
                    <div className={classes.row}>
                        <Ext_Res results={result} score={result.extraversion}/>
                    </div>               
                    <div className={classes.row}>
                        <Agr_Res results={result} score={result.agreeableness}/>
                    </div>                   
                    <div className={classes.row}>
                        <Con_Res results={result} score={result.conscientiousness}/>
                    </div>
                    <div className={classes.row}>
                        <Emt_Res results={result} score={result.emotional_stability}/>
                    </div>
                    <div className={classes.row}>
                        <Int_Res results={result} score={result.intellect}/>
                    </div>
                    <p>
                        Thank you for taking our quiz. 
                        <br></br>
                        You can choose to save your name along with the scores or delete it and you'll be redirected back to the home page.
                    </p>
                </div>
                <div className={classes.saveAndDelete}>
                    <AddNameForm results={result} id={props.match.params.id}/>
                    <Button className={classes.deleteButton} onClick={deleteClickedResult}><DeleteForeverOutlinedIcon />Click to Delete Data</Button>
                </div>
            </div>
        </div>
    )
}

export default ShowResult;