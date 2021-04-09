
import React, {useState, useEffect} from 'react'
import TestTakenModel from '../models/TestTaken'
import Extraversion_Res from '../components/Extraversion_Res'
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
                    <Extraversion_Res category={results} score={results.extraversion}/>

                </div>
            
                <div class="row">

                </div>
                
                <div class="row">

                </div>
                
                <div class="row">

                </div>

                <div class="row">

                </div>
        </div>

        </div>
    )
}

export default ShowResult;