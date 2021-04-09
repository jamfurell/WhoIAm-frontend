import React from 'react';
// import './GameCard.scss'

const Ext_Res = (props) => {
    console.log(props,"<+<++<+<++++++++ props inside ResultCard")
    // console.log(level(props.score), "~~~~~~~~~score!!!")

    const showLevel=(score)=>{
        if (score < 11 ){
            return "very low"
        }
        if(score >= 10 && score <20){
            return "somewhat low"
        }
        if(score >= 30 && score <40){
            return "moderate"
        }
        if(score >= 40){
            return "very high"
        }
    }

    return (

        <div className="card">
            <div className="extraversion-card">
                <h3>Extraversion</h3>
                <p>Scored: {props.score} / 50</p>
                <p> A score of {props.score} is considered {showLevel(props.score)}</p>
                <p>Extraversion (or extroversion) is characterized by talkativeness, assertiveness, and high amounts of emotional expressiveness.</p>
                <p>People who are high in extraversion are outgoing and tend to gain energy in social situations. They seek attention from others.</p>
                <p>On the other hand, people who are low in extraversion (or introverted) tend to be more reserved and have less energy to expend in social settings. Social events can feel draining and introverts often require a period of solitude and quiet in order to "recharge."</p>
            </div>
        </div>
    )
}

export default Ext_Res;

// <div className="ResultCard">
//     <h3>{ props.title }</h3>
//     <p>By: { props.publisher }</p>
//     <hr />
//     <div >
//         <p></p>
//     </div>
// </div>