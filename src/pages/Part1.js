import React, {Component} from 'react'

class Part1 extends Component {
    
    render() {
    if (this.props.currentStep !== 1) { // Prop: The current step
        return null
        }
        // The markup for the Step 1 UI
        return(
        // <div className="form-group">
        //     <label htmlFor="email">Email address</label>
        //     <input 
        //     className="form-control"
        //     id="email"
        //     name="email"
        //     type="text"
        //     placeholder="Enter email"
        //     value={this.props.email} // Prop: The email input data
        //     onChange={this.props.handleChange} // Prop: Puts data into state
        //     />
        // </div>
        <>
            <h1> You're in part1 form</h1>
        </>
    )}
}

export default Part1