import React,{useState, useEffect} from "react";
import Display from "./Display";




function Questions () {

    const [questions, setQuestions] = useState([])
    useEffect(() => {
        loadQuestions();
    },[])


    const loadQuestions = async () => {
        await fetch("http://jservice.io/api/random")
        .then(response => response.json())
        .then(data => setQuestions(data))
    }


    return(
        <div>
            {questions.map((data, index) => (
                <Display question = {data.question} answerToBeReveal ={data.answer} 
                category ={data.category.title} point = {data.value} key={index}/>
            ))}
        </div>
    )
}

export default Questions;