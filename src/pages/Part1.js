import React, {Component} from 'react'


// import React, { useState } from 'react';
// import GameModel from '../models/game'

// function Part1(props) {
//     const [title, setTitle] = useState("");
//     const [publisher, setPublisher] = useState("");
//     const [coverArtUrl, setCoverArtUrl] = useState("");
//     const [completed, setCompleted] = useState(false);

//     extraversion: 0,
//     agreeableness: [],
//     conscientiousness: [],
//     emotional_stability: [],
//     intellect: []


class Part1 extends Component {
    
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }
        // The markup for the Step 1 UI
        return(
            <div className="form-group">
                <div>
                    <h3> The question fetched from Queston Model will be HERE</h3>
                </div>
                <div>
                    <input type="checkbox" class="checkbox-round" id="one" name="one" value="1" />
                    <label for="one">1</label>
                    <input type="checkbox" class="checkbox-round" id="two" name="two" value="2"/>
                    <label for="two">2</label>
                    <input type="checkbox" class="checkbox-round" id="three" name="three" value="3"/>
                    <label for="three">3</label>
                    <input type="checkbox" class="checkbox-round" id="four" name="four" value="4"/>
                    <label for="four">4</label>
                    <input type="checkbox" class="checkbox-round" id="five" name="five" value="5"/>
                    <label for="five">5</label>
                </div>

            </div>
    )}
}

export default Part1

{/* <label htmlFor="email">Email address</label>
<input 
className="form-control"
id="email"
name="email"
type="text"
placeholder="Enter email"
value={this.props.email} // Prop: The email input data
onChange={this.props.handleChange} // Prop: Puts data into state
/> */}

{/* <label class="container">One
    <input type="checkbox" class="checkbox-round" checked="checked"/>
    <span class="checkmark"></span>
</label>
<label class="container">Two
    <input type="checkbox" class="checkbox-round"/>
    <span class="checkmark"></span>
</label>
<label class="container">Three
    <input type="checkbox" class="checkbox-round"/>
    <span class="checkmark"></span>
</label>
<label class="container">Four
    <input type="checkbox" class="checkbox-round"/>
    <span class="checkmark"></span>
</label> */}
// const FormPart = styled.div `
//     border-radius: 100%;
//     color: red;
// `