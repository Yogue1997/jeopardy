import React,{useState} from "react";
import Display from "./Display";
import Questions from "./Questions";




function Answer () {

    const [questions, setQuestions] = useState([])
    

    const loadQuestions =  () => {
        fetch("http://jservice.io/api/random")
        .then(response => response.json())
        .then(data => setQuestions(data))
    }


    return(
        <div>
            <Questions questions ={loadQuestions} />
            {questions.map((data, index) => (
                <Display question = {data.question} answerToBeReveal ={data.answer} 
                category ={data.category.title} point = {data.value} 
                oneMore={loadQuestions} key={index}/>
            ))}
        </div>
    )
}

export default Answer;