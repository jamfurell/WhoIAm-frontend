import React from 'react';
// import './GameCard.scss'

const Int_Res = (props) => {
    // console.log(props,"<+<++<+<++++++++ props inside ResultCard")
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
                <h3>Intellect</h3>
                <p>Scored: {props.score} / 50</p>
                <p> A score of {props.score} is considered {showLevel(props.score)}</p>
                <p>Intellect is characterized by the level of curiosity and imagination.</p>
                <p>People who are high in intellect are more likely to enjoy new experiences and can seek extreme experiences.</p>
                <p>Poeple low in intellect tend to be more pragmatic</p>
            </div>
        </div>
    )
}

export default Int_Res;

// <div className="ResultCard">
//     <h3>{ props.title }</h3>
//     <p>By: { props.publisher }</p>
//     <hr />
//     <div >
//         <p></p>
//     </div>
// </div>