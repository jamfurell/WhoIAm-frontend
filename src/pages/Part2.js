import React, {Component} from 'react'
import Question from '../components/Question'
import QuestionModel from '../models/question'

class Part2 extends Component {

state ={
    questions: [],
}
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
               if (index >9 && index <20){
                    return  <Question key={index} question={question.question} scale={question.scale} category={question.category} handleResponse={this.props.handleResponse} changeResponse={this.props.changeResponse}/>
                    
                }
            })
            this.setState({questions: array_questions})
            })
    }

    render(){
        if (this.props.currentStep !==1) { // Prop: The current step
            return null
        }
        return(
            <div className="form-group">
                {/* WHY does it need the line below when we're passing it in componentDidMount???? */}
                {this.state.questions}
                

            </div>
    )}
}

export default Part2