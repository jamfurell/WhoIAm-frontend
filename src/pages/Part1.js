import React, {Component} from 'react'
import Question from '../components/Question'
import QuestionModel from '../models/question'

class Part1 extends Component {

    state= {
        questions: []
    }
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
                if (index <10){
                    return  <Question key={index} question={question.question} scale={question.scale} category={question.category} handleResponse={this.props.handleResponse} changeResponse={this.props.changeResponse} choiceRef={this.props.choiceRef}/>
                }
            })
            this.setState({questions: array_questions})
        })
    }
    
    render() {
        if (this.props.currentStep !== 0) {
            return null
        }
        return(
            <div className="form-group">
                {this.state.questions}               
            </div>
    )}
}

export default Part1