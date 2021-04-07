import React, {useState, useEffect} from 'react'
import QuestionModel from '../models/question'

function Question (props){

    const [question, setQuestion] = useState()

    useEffect(()=>{
        //make api call- query DB

        console.log(props)
    }, [])

    return(
        <>
        <div>
            <h3> {props.question.question} (Qs from DB)</h3>
        </div>
        <div>
            if( )
            <input type="radio" class="checkbox-round" id="one" name="one" value="1" />
            <label for="one">1</label>
            <input type="radio" class="checkbox-round" id="two" name="one" value="2"/>
            <label for="two">2</label>
            <input type="radio" class="checkbox-round" id="three" name="one" value="3"/>
            <label for="three">3</label>
            <input type="radio" class="checkbox-round" id="four" name="one" value="4"/>
            <label for="four">4</label>
            <input type="radio" class="checkbox-round" id="five" name="one" value="5"/>
            <label for="five">5</label>
        </div>
        </>
    )
}

export default Question