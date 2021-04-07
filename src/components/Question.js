import React, {useState, useEffect} from 'react'
import QuestionModel from '../models/question'

function Question (props){

    const [question, setQuestion] = useState()
    const [selection, setSelection] = useState()

    useEffect(()=>{
        //make api call- query DB
        // console.log(props, "<====props being passed into Question component")
        // console.log(props.scale, "<=====scale of question inside Question component")
    }, [])

    // selectionChanged = (event)=> {
    //     // let value = event.currentTarget.value
    //     let target = event.target
    //     let value= target.value
    //     // let category= 
    //     let int_value= parseInt(value)
    //     console.log("This is the int value ====>", int_value)
    //     setSelection({selection: selection + int_value})
    //     console.log("This is the selection after useState >>>>", selection)
    // }
    
    //should checkboxes be seperate component??
    return(
        <>
            
            {props.scale === 1
            ?
            ( <div className="form-q"><div>
                    {/* <h3> {props.question.question} (Qs from DB)</h3> */}
                    <h3> {props.question} (Qs from DB)</h3>
                </div>
                <div>
                    start1<input type="radio" class="checkbox-round" id="box-one" name="checkbox" value="1" 
                    />
                    <label for="box-one">1</label>
                    
                    <input type="radio" class="checkbox-round" id="box-two" name="checkbox" value="2"
                    />
                    <label for="box-two">2</label>
                    
                    <input type="radio" class="checkbox-round" id="box-three" name="checkbox" value="3"
                    />
                    <label for="box-three">3</label>

                    <input type="radio" class="checkbox-round" id="box-four" name="checkbox" value="4"
                    />
                    <label for="box-four">4</label>

                    <input type="radio" class="checkbox-round" id="box-five" name="checkbox" value="5"
                    />
                    <label for="box-five">5</label>
                </div></div>)
                :
                ( <div className="form-q"><div>
                    {/* <h3> {props.question.question} (Qs from DB)</h3> */}
                    <h3> {props.question} (Qs from DB)</h3>
                </div>
                <div>
                    start5<input type="radio" class="checkbox-round" id="box-five" name="checkbox" value="5" 
                    />
                    <label for="box-five">1</label>
                    
                    <input type="radio" class="checkbox-round" id="box-four" name="checkbox" value="4"
                    />
                    <label for="box-four">2</label>
                    
                    <input type="radio" class="checkbox-round" id="box-three" name="checkbox" value="3"
                    />
                    <label for="box-three">3</label>

                    <input type="radio" class="checkbox-round" id="box-two" name="checkbox" value="2"
                    />
                    <label for="box-two">4</label>

                    <input type="radio" class="checkbox-round" id="box-one" name="checkbox" value="1"
                    />
                    <label for="box-one">5</label> 
                </div></div>)}
            
        </>
    )
}

export default Question


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