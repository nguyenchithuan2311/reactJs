function Question(props){

    return(
        <>
        <h3>{props.question}</h3>
        <div className="container-answer">
        {props.options.map((value, index) => (
          <div key={index} className="container-answer-detail">
            <input
                onClick={() => props.handleAnswer(value)}
              type="radio" 
              name="question" 
              value={value} 
            />
            <label htmlFor={`option-${index}`}>{value}</label>
          </div>
        ))}
        </div>
        </>
    )

}

export default Question;