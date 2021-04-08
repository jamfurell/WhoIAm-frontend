import React, {Component} from 'react'
import Question from '../../components/Question'
import QuestionModel from '../../models/question'
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
class Test1 extends Component {

    state= {
        questions: []
    }
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
                if (index <5){
                    return  <Question key={index} question={question.question} scale={question.scale} category={question.category} handleResponse={this.props.handleResponse1} changeResponse={this.props.changeResponse1} choiceRef={this.props.choiceRef}/>
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
            // localStorage.setItem("test", array_questions )
            localStorage.clear()
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
                
​
            </div>
    )}
}

export default Test1
