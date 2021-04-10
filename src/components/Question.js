import React, {useState, useEffect} from 'react'
import QuestionModel from '../models/question'


function Question (props){
    const [previous, setPrevious] = useState(0);
    const [checkName, setCheckName] = useState(0)
    const [selection, setSelection] = useState(0)

    
    const handleResponse = (e) =>{
        if(previous>0){
            props.changeResponse(e,previous)
        }else{
            props.handleResponse(e)
        }
        setPrevious(parseInt(e.target.value))
    }

        //should checkboxes be seperate component??
        //Checkbox selection is applied to every checkbox q - can't select one for each Q
        return(
            <>
            {props.scale === 1
            ?
            ( <form className="form-q">
                <div>
                    {/* <h3> {props.question.question} (Qs from DB)</h3> */}
                    <h3> {props.question} (Qs from DB)</h3>
                </div>
                <div ref={props.choiceRef}>
                    start1<input type="radio" data-question={props.key} className="checkbox-round" id="box-one" name={`${props.category}`} value={props.scale} 
                    onChange={handleResponse} required/>
                    <label for="box-one">1</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-two" name={`${props.category}`} value={(props.scale)+1}
                    onChange={handleResponse} required/>
                    <label for="box-two">2</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-three" name={`${props.category}`} value={(props.scale)+2}
                    onChange={handleResponse} required/>
                    <label for="box-three">3</label>
​
                    <input type="radio" data-question={props.key} className="checkbox-round {props.key}" id="box-four" name={`${props.category}`} value={(props.scale)+3}
                    onChange={handleResponse} required/>
                    <label for="box-four">4</label>
​
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-five" name={`${props.category}`} value={(props.scale)+4}
                    onChange={handleResponse} required/>
                    <label for="box-five">5</label>
                </div></form>)
                :
                ( <form classNameName="form-q"><div>
                    {/* <h3> {props.question.question} (Qs from DB)</h3> */}
                    <h3> {props.question} (Qs from DB)</h3>
                </div>
                <div>
                    start5<input type="radio" data-question={props.key} className="checkbox-round" id="box-five" name={`${props.category}`} value={props.scale}  
                    onChange={handleResponse} required/>
                    <label for="box-five">1</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-four" name={`${props.category}`} value={props.scale -1} 
                    onChange={handleResponse} required/>
                    <label for="box-four">2</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-three" name={`${props.category}`} value={props.scale -2} 
                    onChange={handleResponse} required/>
                    <label for="box-three">3</label>
​
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-two" name={`${props.category}`} value={props.scale -3} 
                    onChange={handleResponse} required/>
                    <label for="box-two">4</label>
​
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-one" name={`${props.category}`} value={props.scale -4} 
                    onChange={handleResponse} required/>
                    <label for="box-one">5</label> 
                </div></form>)}
            
        </>
    )
}
export default Question
