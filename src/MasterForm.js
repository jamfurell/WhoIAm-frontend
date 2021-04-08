import React, {Component, createRef} from 'react'




import QuestionModel from './models/question'
import Part1 from './pages/Part1'
import Part2 from './pages/Part2'
import Part3 from './pages/Part3'
import Part4 from './pages/Part4'
import Part5 from './pages/Part5'


class MasterForm extends Component {
    state = {
        currentStep: 1, // Default is Step 1
        questions:[],
        extraversion: {},
        agreeableness: {},
        conscientiousness: {},
        emotional_stability: {},
        intellect: {}, 
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
        // ...else render nothing
        return null;
    }
    
    // Use the submitted data to set the state
    // handleChange( event) {
    //     // const {name, value} = event.target
    //     // this.setState({
    //         //     [name]: value
    //         // }) 
    //         let value = event.target.value
    //         let int_value= parseInt(value)
    //         this.setState({extraversion: this.state.extraversion + int_value})
    //     }

    handleResponse = (event) =>{
        // console.log(event.target.name, " <===handleResponse event.target.name")
        // console.log(event.target.value, " <===handleResponse event.target.value")
        if (event.target.name === "extraversion"){
            // let temp= parseInt(event.target.value) + this.state.extraversion
            let inputChildNodes = this.choiceRef.current.childNodes
            console.log(inputChildNodes)
            this.setState({ extraversion: {
                
                ...this.state.extraversion,
                dataQuestion: parseInt(event.target.value)
            }})
            // this.setState({ extraversion: temp})
        } else if (event.target.name === "agreeableness"){
            let temp= event.target.value + this.state.agreeableness
            this.setState({ agreeableness: temp})
        } else if (event.target.name === "conscientiousness"){
            let temp= event.target.value + this.state.conscientiousness
            this.setState({ conscientiousness: temp})
        } else if (event.target.name === "emotional_stability"){
            let temp= event.target.value + this.state.emotional_stability
            this.setState({ emotional_stability: temp})
        } else if (event.target.name === "intellect"){
            let temp= event.target.value + this.state.intellect
            this.setState({ intellect: temp})
        }
        // document.querySelector()
        // console.log(event.target.input.data, "~~~~~~~~~~~~~~~~~~~")
        document.getElementById(event.target.id).setAttribute("disabled", true)
        console.log(this.state.extraversion, "<======extraversion")
        console.log(this.state.agreeableness, "<======agreeableness")
        console.log(this.state.conscientiousness, "<======conscientiousness")
        console.log(this.state.emotional_stability, "<======emotional_stability")
        console.log(this.state.intellect, "<======intellect")
    }
        
    // Trigger an alert on form submission : handleSubmit =(event) =>{
    //     event.preventDefault();
    // }
    
    // Render UI will go here...
    // fetchQuestions(){
    //     QuestionModel.all().then((data)=>{
    //         this.setState({questions: data})
    //     })
    // }

    render() { 
        // console.log(this.state.questions)
        // console.log(this.state.extraversion, "<===the extraversion")
        return (
            <React.Fragment>
            <h1>A Form!</h1>
            Step {this.state.currentStep} / 5
    
            <form onSubmit={this.handleSubmit}>

                <Part1 
                currentStep={this.state.currentStep}
                handleResponse={this.handleResponse}
                choiceRef={this.choiceRef}/>
                <Part2
                currentStep={this.state.currentStep}
                handleResponse={this.handleResponse}
                />
                <Part3
                currentStep={this.state.currentStep}
                handleResponse={this.handleResponse}/>
                <Part4
                currentStep={this.state.currentStep}
                handleResponse={this.handleResponse}/>
                <Part5
                currentStep={this.state.currentStep}
                handleResponse={this.handleResponse}/>
        
                {this.nextButton}
            </form>
        </React.Fragment>
        )
    }
}

export default MasterForm


// constructor(props) {
//     super(props)

//     this.state = {
//         currentStep: 1, // Default is Step 1
//         questions:[],
//         part1: '',
//         part2: '',
//         part3: '', 
//     }
//     this._next = this._next.bind(this)
//     // Set the initial input values
    
//     // Bind the submission to handleChange() 
//     this.handleChange = this.handleChange.bind(this)
// }
// handleSubmit = (event) => {
    // event.preventDefault()
    // const { email, username, password } = this.state
    // alert(`Your registration detail: \n 
    // Email: ${email} \n 
    // Username: ${username} \n
    // Password: ${password}`)
    // }
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
{/* {this.previousButton} */}
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