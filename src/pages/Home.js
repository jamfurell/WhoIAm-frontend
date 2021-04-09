import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <h1>Welcome to I·M, a free questionnaire that delivers a quick summary of what shapes your personality. </h1>
            <br />
            <br />
            <br />
            <button className="btn-blue"><Link to={'/test'}>Click Here To Start The Quiz</Link></button>
        </div>
    );
}

export default Home;
