
import React, {useState, useEffect} from 'react'
import TestTakenModel from '../models/TestTaken'
import Ext_Res from '../components/results/Ext_Res'
import Agr_Res from '../components/results/Agr_Res'
import Con_Res from '../components/results/Con_Res'
import Emt_Res from '../components/results/Emt_Res'
import Int_Res from '../components/results/Int_Res'
import '../Results.css'

const ShowResult = (props) =>{
    const [results, setResults] = useState({});

    function fetchScores(id) { 
        if (id) {
            TestTakenModel.show(id).then((data) => {
                setResults(data.TestTaken);
                console.log(data.TestTaken,"<<===== Testtakenmodel.show data inside")
            });
            } else {
                return null;
            }
        }
        
        useEffect(()=>{
            // console.log(props.match.params.id)
            fetchScores(props.match.params.id)

        }
    ,[])
    
    
    return(
        <div className="all-results">
            <h2>
                You are in the ShowResult page
            </h2> 
            <div class="column">
                <div class="row">
                    <Ext_Res category={results} score={results.extraversion}/>

                </div>
            
                <div class="row">
                    <Agr_Res category={results} score={results.agreeableness}/>
                </div>
                
                <div class="row">
                    <Con_Res category={results} score={results.conscientiousness}/>
                </div>
                
                <div class="row">
                    <Emt_Res category={results} score={results.emotional_stability}/>
                </div>

                <div class="row">
                    <Int_Res category={results} score={results.intellect}/>
                </div>
        </div>

        </div>
    )
}

export default ShowResult;