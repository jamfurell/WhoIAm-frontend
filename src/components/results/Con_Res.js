import React from 'react';
// import './GameCard.scss'

const Con_Res = (props) => {
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
                <h3>Conscientiousness</h3>
                <p>Scored: {props.score} / 50</p>
                <p> A score of {props.score} is considered {showLevel(props.score)}</p>
                <p>Conscientiousness is characterized by attributes such as organization and throughness.
                </p>
                <p>
                People who are high in agreeableness tend to be more organized and prompt; can be perceived as obsessive.
                </p>
                <p>People who are low in this trait tend to be more spontaneous but less dependable </p>
            </div>
        </div>
    )
}

export default Con_Res;

// <div className="ResultCard">
//     <h3>{ props.title }</h3>
//     <p>By: { props.publisher }</p>
//     <hr />
//     <div >
//         <p></p>
//     </div>
// </div>