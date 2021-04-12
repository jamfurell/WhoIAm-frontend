import React, {useState, useEffect} from 'react'


function Question (props){
    const [previous, setPrevious] = useState(0);
    
    //handle response to check previous radio button selection
    const handleResponse = (e) =>{
        if(previous>0){
            props.changeResponse(e,previous)
        }else{
            props.handleResponse(e)
        }
        setPrevious(parseInt(e.target.value))
    }

    return(
        <>
            {props.scale === 1
            ?
            ( <form className="question-q">
                <div>
                    <h3> {props.question}</h3>
                </div>
                <div>
                    <label for="box-one">1</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={props.scale} 
                    onChange={handleResponse} required/>
                    
                    <label for="box-two">2</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={(props.scale)+1}
                    onChange={handleResponse} required/>
                    
                    <label for="box-three">3</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={(props.scale)+2}
                    onChange={handleResponse} required/>
    ​
                    <label for="box-four">4</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={(props.scale)+3}
                    onChange={handleResponse} required/>
    ​
                    <label for="box-five">5</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={(props.scale)+4}
                    onChange={handleResponse} required/>
                </div></form>)
            :
            ( <form className="question-q">
                <div>
                    <h3> {props.question}</h3>
                </div>
                <div>
                    <label for="box-five">1</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={props.scale}  
                    onChange={handleResponse} required/>
                    
                    <label for="box-four">2</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={props.scale -1} 
                    onChange={handleResponse} required/>
                    
                    <label for="box-three">3</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={props.scale -2} 
                    onChange={handleResponse} required/>
    ​
                    <label for="box-two">4</label>
                    <input type="radio" className="checkbox-round" name={`${props.category}`} value={props.scale -3} 
                    onChange={handleResponse} required/>
    ​
                    <label for="box-one">5</label> 
                    <input type="radio" className="checkbox-round"  name={`${props.category}`} value={props.scale -4} 
                    onChange={handleResponse} required/>
                </div>
            </form>)}
        </>
    )
}
export default Question
