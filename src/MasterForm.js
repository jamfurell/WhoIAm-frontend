import React, {Component, createRef} from 'react'
import QuestionModel from './models/question'
import TestTakenModel from './models/TestTaken'
import Part1 from './pages/Part1'
import Part2 from './pages/Part2'
import Part3 from './pages/Part3'
import Part4 from './pages/Part4'
import Part5 from './pages/Part5'

import Test1 from './pages/test/Test1'
import Test2 from './pages/test/Test2'

class MasterForm extends Component {
    state = {
        currentStep: 0, // Default is Step 1
        questions:[],
        extraversion: 0,
        agreeableness: 0,
        conscientiousness: 0,
        emotional_stability: 0,
        intellect: 0, 
        // extraversion2: 0,
        // agreeableness2: 0,
        // conscientiousness2: 0,
        // emotional_stability2: 0,
        // intellect2: 0, 
    }
    choiceRef = createRef()
    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 5? 4: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    get nextButton(){
        let currentStep = this.state.currentStep;
        this._next = this._next.bind(this)
        console.log(this.state.currentStep, "<====the currentStep")
        // If the current step is not 3, then render the "next" button
        if(currentStep === 5){
            return(
                <button
                className="btn-blue"
                type="submit">
                    Submit
                </button>
            )
        } else{
            return (
                <button 
                className="btn-blue" 
                type="button" 
                onClick={this._next}>
                Next
            </button> 
            )
        }
    
    }

    handleResponse = (event) =>{
        console.log(event.target.name, event.target.value)
        if (event.target.name === "extraversion"){
            let temp= parseInt(event.target.value) + this.state.extraversion
            this.setState({ extraversion: temp})
        } else if (event.target.name === "agreeableness"){
            let temp= parseInt(event.target.value) + this.state.agreeableness
            this.setState({ agreeableness: temp})
        } else if (event.target.name === "conscientiousness"){
            let temp= parseInt(event.target.value) + this.state.conscientiousness
            this.setState({ conscientiousness: temp})
        } else if (event.target.name === "emotional_stability"){
            let temp= parseInt(event.target.value) + this.state.emotional_stability
            this.setState({ emotional_stability: temp})
        } else if (event.target.name === "intellect"){
            let temp= parseInt(event.target.value) + this.state.intellect
            this.setState({ intellect: temp})
        }
        // console.log(this.state.extraversion, "<======extraversion")
        // console.log(this.state.agreeableness, "<======agreeableness")
        // console.log(this.state.conscientiousness, "<======conscientiousness")
        // console.log(this.state.emotional_stability, "<======emotional_stability")
        // console.log(this.state.intellect, "<======intellect")
    }
    
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {extraversion,
            agreeableness,
            conscientiousness,
            emotional_stability,
            intellect} = this.state
        
        console.log("In the handleSubmit!!!")
        console.log(extraversion, agreeableness, conscientiousness, emotional_stability, intellect )

        TestTakenModel.create({ extraversion, agreeableness, conscientiousness, emotional_stability, intellect })
            .then(data => {
                console.log(data,"<=====DATA inside onsubmit takenmodel")
                this.props.history.push(`/TestTaken/${data.TestTaken._id}`)
            }
        )

        alert(`Your test results: \n 
        extraversion: ${extraversion} \n 
        agreable: ${agreeableness} \n
        conscientiousn: ${conscientiousness} \n
        emotional_stability: ${emotional_stability}\n
        intellect: ${intellect}`)
    }

    render() { 
        return (
            <React.Fragment>
            <h1>A Form!</h1>
            Step {this.state.currentStep +1} / 5
    
            <form onSubmit={this.handleSubmit}>

                <Part1 
                currentStep={this.state.currentStep}
                handleResponse={this.handleResponse}
                changeResponse = {this.changeResponse}
                choiceRef={this.choiceRef}/>
                <Part2
                currentStep={this.state.currentStep}
                changeResponse = {this.changeResponse}
                handleResponse={this.handleResponse}
                />
                <Part3
                currentStep={this.state.currentStep}
                changeResponse = {this.changeResponse}
                handleResponse={this.handleResponse}/>
                <Part4
                currentStep={this.state.currentStep}
                changeResponse = {this.changeResponse}
                handleResponse={this.handleResponse}/>
                <Part5
                currentStep={this.state.currentStep}
                changeResponse = {this.changeResponse}
                handleResponse={this.handleResponse}/>
        
                {this.nextButton}
                
            </form>
        </React.Fragment>
        )
    }
}
export default MasterForm

//Please read each statement carefully and then mark the appropriate response below. Select the answer that best represents the personality characteristics you currently have not you would like to have in the future. Use the following scale to record your response