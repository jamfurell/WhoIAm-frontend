import React, {Component} from 'react'
import QuestionModel from './models/question'
import Part1 from './pages/Part1'

class MasterForm extends Component {
    constructor(props) {
        super(props)

        this._next = this._next.bind(this)
        
        // Set the initial input values
        this.state = {
            currentStep: 1, // Default is Step 1
            questions:[],
            part1: '',
            part2: '',
            part3: '', 
        }
        
        // Bind the submission to handleChange() 
        this.handleChange = this.handleChange.bind(this)
    }
    
    _next() {
        let currentStep = this.state.currentStep
        // If the current step is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2? 3: currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }
    
    get nextButton(){
        let currentStep = this.state.currentStep;
        // If the current step is not 3, then render the "next" button
        if(currentStep <3){
            return (
                <button 
                className="btn" 
                type="button" 
                onClick={this._next}>
                Next
            </button> 
            )
        }
        // ...else render nothing
        return null;
    }
    
    // Use the submitted data to set the state
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }
    
    // Trigger an alert on form submission
    // handleSubmit = (event) => {
        // event.preventDefault()
        // const { email, username, password } = this.state
        // alert(`Your registration detail: \n 
        // Email: ${email} \n 
        // Username: ${username} \n
        // Password: ${password}`)
        // }
        
        // Render UI will go here...
    fetchQuestions(){
        QuestionModel.all().then((data)=>{
            this.setState({questions: data})

        })
        
    }
    render() { 
        this.fetchQuestions()
        console.log(this.state.questions)
        return (
            <React.Fragment>
            <h1>A Form!</h1>
    
            Step {this.state.currentStep} /3
    
            <form onSubmit={this.handleSubmit}>
    
            // Render the form steps and pass in the required props
            <Part1 questions={this.state.questions}></Part1>
            {/* <Part1 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                email={this.state.email}
            /> */}
            {/* <Step2 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                username={this.state.username}
                />
                <Step3 
                currentStep={this.state.currentStep} 
                handleChange={this.handleChange}
                password={this.state.password}
            />  */}
            {this.previousButton}
            {this.nextButton}
            </form>
        </React.Fragment>
        )
    }
}

export default MasterForm


// this._prev = this._prev.bind(this)
// _prev() {
//     let currentStep = this.state.currentStep
//     // If the current step is 2 or 3, then subtract one on "previous" button click
//     currentStep = currentStep <= 1? 1: currentStep - 1
//     this.setState({
//         currentStep: currentStep
//     })
// }

// get previousButton(){
//     let currentStep = this.state.currentStep;
//     // If the current step is not 1, then render the "previous" button
//     if(currentStep !==1){
//         return (
//         <button 
//         className="btn btn-secondary" 
//         type="button" 
//         onClick={this._prev}>
//             Previous
//         </button>
//         )
//     }
//     // ...else return nothing
//     return null;
// }