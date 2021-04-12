import React, {useState, useEffect} from 'react'
import TestTakenModel from '../models/TestTaken'
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// import component for each personality category 
import Ext_Res from '../components/results/Ext_Res'
import Agr_Res from '../components/results/Agr_Res'
import Con_Res from '../components/results/Con_Res'
import Emt_Res from '../components/results/Emt_Res'
import Int_Res from '../components/results/Int_Res'



import AddNameForm from '../components/AddNameForm'
import '../Results.css'


const ShowResult = (props) =>{
    const [result, setResult] = useState({});
    // const [allresult, setAllResult] = useState([]);
    const history = useHistory()

    function fetchScores(id) { 
        if (id) {
            TestTakenModel.show(id).then((data) => {
                setResult(data.TestTaken);
                // console.log(data.TestTaken,"<<===== Inside showresult page --Testtakenmodel.show data")
            });
            } else {
                return null;
            }
        }
        
    useEffect(()=>{
        // console.log(props.match.params.id)
        // TestTakenModel.all().then( (res) => {
        //     setAllResult(res)
        // });
        fetchScores(props.match.params.id)
        }
    ,[])

    const deleteClickedResult = () =>{
        console.log("this is result being passed to deleteResult function=======>", result)
        deleteResult(result._id)
    }
    const deleteResult = (result) =>{
        console.log("IN THE DELETE RESULT FFFFUNCTION ~~~~~show me result >", result)
        TestTakenModel.delete(result).then( (res) =>{
            alert(`Your test results have been deleted successfully`)
            history.push('/')
        }) 
    }

    
    return(
        <div className="all-results">
            <h2>
                You are in the ShowResult page
            </h2> 
            <div class="column">
                <div class="row">
                    <Ext_Res results={result} score={result.extraversion}/>

                </div>
            
                <div class="row">
                    <Agr_Res results={result} score={result.agreeableness}/>
                </div>
                
                <div class="row">
                    <Con_Res results={result} score={result.conscientiousness}/>
                </div>
                
                <div class="row">
                    <Emt_Res results={result} score={result.emotional_stability}/>
                </div>

                <div class="row">
                    <Int_Res results={result} score={result.intellect}/>
                </div>
        </div>
            <AddNameForm results={result} id={props.match.params.id}/>
            <Button onClick={deleteClickedResult}>Click to Delete Data</Button>
        </div>
    )
}

export default ShowResult;