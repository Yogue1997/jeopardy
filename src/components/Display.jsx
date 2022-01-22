





function Display (props) {

    const fal = false
    const tru = true





    return (
        <div>
            <p>Category : {props.category}</p>
            <p>Point : {props.point}</p>
            <p>Question (answer): {props.question}</p>
            <p>Click To Reveal The Amswer</p>
        </div>
    )
}

export default Display;