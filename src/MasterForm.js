import React, {Component, createRef} from 'react'
import QuestionModel from './models/question'
import TestTakenModel from './models/TestTaken'
import Part1 from './pages/Part1'
import Part2 from './pages/Part2'
import Part3 from './pages/Part3'
import Part4 from './pages/Part4'
import Part5 from './pages/Part5'

import Test1 from './pages/test/Test1'
import Test2 from './pages/Test2'

class MasterForm extends Component {
    state = {
        currentStep: 1, // Default is Step 1
        questions:[],
        extraversion1: 0,
        agreeableness1: 0,
        conscientiousness1: 0,
        emotional_stability1: 0,
        intellect1: 0, 
        extraversion2: 0,
        agreeableness2: 0,
        conscientiousness2: 0,
        emotional_stability2: 0,
        intellect2: 0, 
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
        // console.log(this.state.currentStep, "<====the currentStep")
        // If the current step is not 3, then render the "next" button
        if(currentStep <5){
            return (
                <button 
                className="btn-blue" 
                type="button" 
                onClick={this._next}>
                Next
            </button> 
            )
        }
        return null;
    }

    handleResponse1 = (event) =>{
        if (event.target.name === "extraversion"){
            let temp= parseInt(event.target.value) + this.state.extraversion1
            this.setState({ extraversion1: temp})
        } else if (event.target.name === "agreeableness"){
            let temp= parseInt(event.target.value) + this.state.agreeableness1
            this.setState({ agreeableness1: temp})
        } else if (event.target.name === "conscientiousness"){
            let temp= parseInt(event.target.value) + this.state.conscientiousness1
            this.setState({ conscientiousness1: temp})
        } else if (event.target.name === "emotional_stability"){
            let temp= parseInt(event.target.value) + this.state.emotional_stability1
            this.setState({ emotional_stability1: temp})
        } else if (event.target.name === "intellect"){
            let temp= parseInt(event.target.value) + this.state.intellect1
            this.setState({ intellect1: temp})
        }
        console.log(this.state.extraversion1, "<======extraversion1")
        console.log(this.state.agreeableness1, "<======agreeableness1")
        console.log(this.state.conscientiousness1, "<======conscientiousness1")
        console.log(this.state.emotional_stability1, "<======emotional_stability1")
        console.log(this.state.intellect1, "<======intellect1")
    }
    
    changeResponse1 = (event,previous) =>{
        if (event.target.name === "extraversion1"){
            let temp= parseInt(event.target.value) + this.state.extraversion1 - previous
            this.setState({ extraversion1: temp})
        }else if (event.target.name === "agreeableness1"){
            let temp= parseInt(event.target.value) + this.state.agreeableness1 - previous
            this.setState({ agreeableness1: temp})
        } else if (event.target.name === "conscientiousness1"){
            let temp= parseInt(event.target.value) + this.state.conscientiousness1 - previous
            this.setState({ conscientiousness1: temp})
        } else if (event.target.name === "emotional_stability1"){
            let temp= parseInt(event.target.value) + this.state.emotional_stability1 - previous
            this.setState({ emotional_stability1: temp})
        } else if (event.target.name === "intellect1"){
            let temp= parseInt(event.target.value) + this.state.intellect1 - previous
            this.setState({ intellect1: temp})
        }
    }

    handleResponse2 = (event) =>{
        if (event.target.name === "extraversion"){
            let temp= parseInt(event.target.value) + this.state.extraversion2
            this.setState({ extraversion2: temp})
        } else if (event.target.name === "agreeableness"){
            let temp= parseInt(event.target.value) + this.state.agreeableness2
            this.setState({ agreeableness2: temp})
        } else if (event.target.name === "conscientiousness"){
            let temp= parseInt(event.target.value) + this.state.conscientiousness2
            this.setState({ conscientiousness2: temp})
        } else if (event.target.name === "emotional_stability"){
            let temp= parseInt(event.target.value) + this.state.emotional_stability2
            this.setState({ emotional_stability2: temp})
        } else if (event.target.name === "intellect"){
            let temp= parseInt(event.target.value) + this.state.intellect2
            this.setState({ intellect2: temp})
        }
        console.log(this.state.extraversion2, "<======extraversion2")
        console.log(this.state.agreeableness2, "<======agreeableness2")
        console.log(this.state.conscientiousness2, "<======conscientiousness2")
        console.log(this.state.emotional_stability2, "<======emotional_stability2")
        console.log(this.state.intellect2, "<======intellect2")
    }
    
    changeResponse2 = (event,previous) =>{
        if (event.target.name === "extraversion2"){
            let temp= parseInt(event.target.value) + this.state.extraversion2 - previous
            this.setState({ extraversion2: temp})
        }else if (event.target.name === "agreeableness2"){
            let temp= parseInt(event.target.value) + this.state.agreeableness2 - previous
            this.setState({ agreeableness2: temp})
        } else if (event.target.name === "conscientiousness2"){
            let temp= parseInt(event.target.value) + this.state.conscientiousness2 - previous
            this.setState({ conscientiousness2: temp})
        } else if (event.target.name === "emotional_stability2"){
            let temp= parseInt(event.target.value) + this.state.emotional_stability2 - previous
            this.setState({ emotional_stability2: temp})
        } else if (event.target.name === "intellect2"){
            let temp= parseInt(event.target.value) + this.state.intellect2 - previous
            this.setState({ intellect2: temp})
        }
    }
    
    handleSubmit = (event) => {
    event.preventDefault();
    const {extraversion1,
        agreeableness1,
        conscientiousness1,
        emotional_stability1,
        intellect1, 
        extraversion2,
        agreeableness2,
        conscientiousness2,
        emotional_stability2,
        intellect2 } = this.state
    let extraversion= extraversion1 + extraversion2
    let agreeableness= agreeableness1 + agreeableness2
    let conscientiousness= conscientiousness1 + conscientiousness2
    let emotional_stability= emotional_stability1 + emotional_stability2
    let intellect= intellect1 + intellect2

    TestTakenModel.create({ extraversion, agreeableness, conscientiousness, emotional_stability, intellect })
    .then(data => {
        event.history.push('/')
    })

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
            Step {this.state.currentStep} / 5
    
            <form onSubmit={this.handleSubmit}>
​               <Test1 
                currentStep={this.state.currentStep}
                handleResponse1={this.handleResponse1}
                changeResponse1 = {this.changeResponse1}
                choiceRef={this.choiceRef}/>
                <Test2
                currentStep={this.state.currentStep}
                changeResponse2 = {this.changeResponse2}
                handleResponse2={this.handleResponse2}
                />
                {/* <Part1 
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
                handleResponse={this.handleResponse}/> */}
        
                {this.nextButton}
            </form>
        </React.Fragment>
        )
    }
}
export default MasterForm

