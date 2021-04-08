import React from 'react'

export default function HandleRes1(){
    return(
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
    )

}