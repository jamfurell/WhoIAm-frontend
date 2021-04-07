import React, {Component} from 'react'
import Question from '../components/Question'
import QuestionModel from '../models/question'

class Part5 extends Component {

state ={
    questions: [],
}
    componentDidMount(){
        QuestionModel.all().then((data)=>{
            const array_questions= data.questions.map((question, index)=>{
               if (index >39 && index <50){
                   return  <Question key={index} question={question.question} scale={question.scale}/>
               }
            })
            this.setState({questions: array_questions})
            })
    }

    render(){
        if (this.props.currentStep !==5) { // Prop: The current step
            return null
        }
        return(
            <div className="form-group">
                {/* WHY does it need the line below when we're passing it in componentDidMount???? */}
                {this.state.questions}
                

            </div>
    )}
}

export default Part5