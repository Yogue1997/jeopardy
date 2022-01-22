import React, { useState } from "react";






function Display(props) {

    const [unReveal, setUnReveal] = useState(true)
    const [reveal, setReveal] = useState(false)
    const [score, setScore] = useState(0)
    const [next, setNext] = useState()
    function change() {
        setReveal(true)
        setUnReveal(false)
    }
    function changeBack() {
        setReveal(false)
        setUnReveal(true)
        setNext(props.oneMore)
    }

    function reset() {
        setReveal(false)
        setUnReveal(true)
        setScore(0)
        setNext(props.oneMore)
    }

    return (
        <div className="main">
            <p>Score : <p> {score}</p></p>
            <div id="pointcontainer">
                <button onClick={() => setScore(score + props.point)}>Correct + {props.point}</button>
                <button onClick={() => setScore(score - props.point)}>Wrong - {props.point}</button>
                <button onClick={() => reset()}>Reset Game</button>
            </div>
            <p>Let's play!</p>
            <div id="randomcontainer">
                <button onClick={() => changeBack()} id="random">Get Random Question</button>
            </div>
            <div id="category">
                <p>Category : {props.category}</p>
                <p>Point : {props.point}</p>
            </div>
            <div id="answer">
                <p>Answer: </p>
                <p>{props.question}</p>
                
            </div>
            <div hidden={unReveal} >
            <p >Question : {props.answerToBeReveal}</p>
            </div>
            
            <div id="revealdiv">
                <button hidden={reveal} onClick={change} >Click to reveal Question</button>
            </div>
        </div>
    )
}

export default Display;