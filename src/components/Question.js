import React, {useState, useEffect} from 'react'
import QuestionModel from '../models/question'

function Question (props){

    const [checkName, setCheckName] = useState(0)
    const [selection, setSelection] = useState(0)

    useEffect(()=>{

        // onChangeValue = onChangeValue.bind(this)
    }, [])
    let handleChange =(e)=> {
            // let value = event.currentTarget.value
            // let target = event.target
            // let value= target.value
            // // let category= 
            // let int_value= parseInt(value)
            // console.log("This is the int value ====>", int_value)
            setSelection(e.target.value)
            console.log("This is the selection after useState >>>>", selection)
        }
    
        
        //should checkboxes be seperate component??
        //Checkbox selection is applied to every checkbox q - can't select one for each Q
        return(
            <>
            {props.scale === 1
            ?
            ( <div className="form-q">
                <div>
                    {/* <h3> {props.question.question} (Qs from DB)</h3> */}
                    <h3> {props.question} (Qs from DB)</h3>
                </div>
                <div ref={props.choiceRef}>
                    start1<input type="radio" data-question={props.key} className="checkbox-round" id="box-one" name={props.category} value={props.scale} 
                    onChange={props.handleResponse}/>
                    <label for="box-one">1</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-two" name={props.category} value={(props.scale)+1}
                    onChange={props.handleResponse}/>
                    <label for="box-two">2</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-three" name={props.category} value={(props.scale)+2}
                    onChange={props.handleResponse}/>
                    <label for="box-three">3</label>

                    <input type="radio" data-question={props.key} className="checkbox-round {props.key}" id="box-four" name={props.category} value={(props.scale)+3}
                    onChange={props.handleResponse}/>
                    <label for="box-four">4</label>

                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-five" name={props.category} value={(props.scale)+4}
                    onChange={props.handleResponse}/>
                    <label for="box-five">5</label>
                </div></div>)
                :
                ( <div classNameName="form-q"><div>
                    {/* <h3> {props.question.question} (Qs from DB)</h3> */}
                    <h3> {props.question} (Qs from DB)</h3>
                </div>
                <div>
                    start5<input type="radio" data-question={props.key} className="checkbox-round" id="box-five" name={props.category} value={props.scale}  
                    onChange={props.handleResponse}/>
                    <label for="box-five">1</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-four" name={props.category} value={props.scale -1} 
                    onChange={props.handleResponse}/>
                    <label for="box-four">2</label>
                    
                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-three" name={props.category} value={props.scale -2} 
                    onChange={props.handleResponse}/>
                    <label for="box-three">3</label>

                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-two" name={props.category} value={props.scale -3} 
                    onChange={props.handleResponse}/>
                    <label for="box-two">4</label>

                    <input type="radio" data-question={props.key} className="checkbox-round" id="box-one" name={props.category} value={props.scale -4} 
                    onChange={props.handleResponse}/>
                    <label for="box-one">5</label> 
                </div></div>)}
            
        </>
    )
}

export default Question
// for (i=0; i< props.length; i++){
//     checknumber = checkName + 0;
//     stringnumber= String(checknumber)
//     console.log(stringnumber)
//     useCheckName(stringnumber)
// }
// console.log(typeOf(String(checkName)))


// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}
// onChange={this.selectionChanged}