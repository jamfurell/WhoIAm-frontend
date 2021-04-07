import React, {Component} from 'react'
import Question from '../components/Question'
import QuestionModel from '../models/question'



// import React, { useState } from 'react';
// import GameModel from '../models/game'

// function Part1(props) {
//     const [title, setTitle] = useState("");
//     const [publisher, setPublisher] = useState("");
//     const [coverArtUrl, setCoverArtUrl] = useState("");
//     const [completed, setCompleted] = useState(false);

//     extraversion: 0,
//     agreeableness: [],
//     conscientiousness: [],
//     emotional_stability: [],
//     intellect: []


class Part1 extends Component {

    state= {
        questions: []
    }
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
               if (index <10){
                   return  <Question key={index} question={question.question} scale={question.scale}/>
               }
            })
            // const array_questions = data.questions
            // const n = 2
            // const firsttwo= array_questions.slice(0, n)
            // console.log(firsttwo, "First two question of arrray!!!!")
            // console.log(array_questions, "DATA from question model ALL")
            // const array_q= firsttwo.map((question, index)=>{
            //     return  <Question key={index} question={question}/>

            // })
            
            // console.log(array_q, " <=====the array-q")
            this.setState({questions: array_questions})
            })
            // console.log(data, "<===data in componentDidMount")
            // this.setState({questions: array_questions})
        // })
    }
    
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                {/* WHY does it need the line below when we're passing it in componentDidMount???? */}
                {this.state.questions}
                

            </div>
    )}
}

export default Part1

{/* <label htmlFor="email">Email address</label>
<input 
className="form-control"
id="email"
name="email"
type="text"
placeholder="Enter email"
value={this.props.email} // Prop: The email input data
onChange={this.props.handleChange} // Prop: Puts data into state
/> */}

{/* <label class="container">One
    <input type="checkbox" class="checkbox-round" checked="checked"/>
    <span class="checkmark"></span>
</label>
<label class="container">Two
    <input type="checkbox" class="checkbox-round"/>
    <span class="checkmark"></span>
</label>
<label class="container">Three
    <input type="checkbox" class="checkbox-round"/>
    <span class="checkmark"></span>
</label>
<label class="container">Four
    <input type="checkbox" class="checkbox-round"/>
    <span class="checkmark"></span>
</label> */}
// const FormPart = styled.div `
//     border-radius: 100%;
//     color: red;
// `