import React, {Component} from 'react'
import Question from '../components/Question'
import QuestionModel from '../models/question'

class Part4 extends Component {

state ={
    questions: [],
}
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
               if (index >29 && index <40){
                   return  <Question key={index} question={question.question} scale={question.scale} category={question.category}  handleResponse={this.props.handleResponse} />
               }
            })
            this.setState({questions: array_questions})
            })
    }

    render(){
        if (this.props.currentStep !==4) { // Prop: The current step
            return null
        }
        return(
            <div className="form-group">
                {/* WHY does it need the line below when we're passing it in componentDidMount???? */}
                {this.state.questions}
                

            </div>
    )}
}

export default Part4