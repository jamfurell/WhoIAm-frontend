import React, {Component, createRef} from 'react'

// import Grid from '@material-ui/core/Grid';
import Grid from '@material-ui/core/Grid';

import TestTakenModel from './models/TestTaken'
import Part1 from './pages/Part1'
import Part2 from './pages/Part2'
import Part3 from './pages/Part3'
import Part4 from './pages/Part4'
import Part5 from './pages/Part5'


class MasterForm extends Component {

    state = {
        currentStep: 0, 
        extraversion: 0,
        agreeableness: 0,
        conscientiousness: 0,
        emotional_stability: 0,
        intellect: 0, 
    }

    // create function for counting steps
    _next() {
        let currentStep = this.state.currentStep
        currentStep = currentStep >= 5? 4: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    //rendering next button based on current step
    get nextButton(){
        let currentStep = this.state.currentStep;
        this._next = this._next.bind(this)
        if(currentStep === 5){
            return(
                <button className="btn" type="submit">
                    <span>Submit</span>
                </button>
            )
        } else{
            return (
                <button className="btn" type="button" onClick={this._next}>
                    <span>Next</span>
                </button> 
            )
        }
    }

    //storing user input value into correct state
    handleResponse = (event) =>{
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
    }
    //reset state when user changes between radio btn - prevent adding values
    changeResponse = (event,previous) =>{
        if (event.target.name === "extraversion"){
            let temp= parseInt(event.target.value) + this.state.extraversion - previous
            this.setState({ extraversion: temp})
        }else if (event.target.name === "agreeableness"){
            let temp= parseInt(event.target.value) + this.state.agreeableness - previous
            this.setState({ agreeableness: temp})
        } else if (event.target.name === "conscientiousness"){
            let temp= parseInt(event.target.value) + this.state.conscientiousness - previous
            this.setState({ conscientiousness: temp})
        } else if (event.target.name === "emotional_stability"){
            let temp= parseInt(event.target.value) + this.state.emotional_stability - previous
            this.setState({ emotional_stability: temp})
        } else if (event.target.name === "intellect"){
            let temp= parseInt(event.target.value) + this.state.intellect - previous
            this.setState({ intellect: temp})
        }
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const {extraversion,
            agreeableness,
            conscientiousness,
            emotional_stability,
            intellect} = this.state
        TestTakenModel.create({ extraversion, agreeableness, conscientiousness, emotional_stability, intellect })
            .then(data => {
                this.props.history.push(`/TestTaken/${data.TestTaken._id}`)
            }
        )
    }
    
    render() { 
        return (
            <React.Fragment>
                <Grid container className="masterForm-Container" direction="column" justify="center" alignItems="center">
                    <div className="masterform-head"> 
                        <span className="mfdetail">
                            <h3>Please read each statement carefully and then mark the appropriate response below. 
                                <br></br>
                                Select the answer that best represents the personality characteristics you currently have, not what you would like to have. 
                                <br></br>
                                <br></br>
                            </h3>
                            <h5> Use the following scale to record your response</h5>
                        </span>
                        <p className="masterForm-scale"> 1= very inaccurate 2= somewhat inaccurate 3=neither/nor 4= somewhat accurate 5= very accurate</p>
                            <br></br>
                        <h2 className="masterForm-step">Step {this.state.currentStep +1} / 5 </h2>
                    </div>
                            
                    <form onSubmit={this.handleSubmit}>
                        <Part1 
                            currentStep={this.state.currentStep}
                            handleResponse={this.handleResponse}
                            changeResponse = {this.changeResponse}
                            />
                        <Part2
                            currentStep={this.state.currentStep}
                            changeResponse = {this.changeResponse}
                            handleResponse={this.handleResponse}
                            />
                        <Part3
                            currentStep={this.state.currentStep}
                            changeResponse = {this.changeResponse}
                            handleResponse={this.handleResponse}
                            />
                        <Part4
                            currentStep={this.state.currentStep}
                            changeResponse = {this.changeResponse}
                            handleResponse={this.handleResponse}
                            />
                        <Part5
                            currentStep={this.state.currentStep}
                            changeResponse = {this.changeResponse}
                            handleResponse={this.handleResponse}
                            />
                        {this.nextButton}       
                    </form>
                </Grid>
            </React.Fragment>
            )
        }
    }
export default MasterForm
