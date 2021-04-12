import React, {Component} from 'react'
import Question from '../components/Question'
import QuestionModel from '../models/question'

class Part3 extends Component {

    state ={
        questions: [],
    }
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
                if (index >19 && index <30){
                    return  <Question key={index} question={question.question} scale={question.scale} category={question.category} handleResponse={this.props.handleResponse} changeResponse={this.props.changeResponse}/>
                }
            })
            this.setState({questions: array_questions})
        })
    }

    render(){
        if (this.props.currentStep !==2) { // Prop: The current step
            return null
        }
        return(
            <div className="form-group">
                {this.state.questions}
            </div>
    )}
}

export default Part3