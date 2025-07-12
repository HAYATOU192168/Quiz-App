import { useState } from "react";
import Results from "./results";

function Quiz(){

    const questionBank = [
        {
            question: "What is the capital city of france?",
            options: ["Berlin", "London", "Paris", "Rome"],
            answer: "Paris"

        },
        {
            question: "Which Language is use for the Wab App",
            options: ["PHP", "Python", "Javascript", "All"],
            answer: "All"
          },
          {
            question: "What does the jsx stand for ?",
            options: ["Javascript XML", "Java syntax extension", "just a simple example", "none of above"],
            answer: "Javascript XML"
          },
    ];
   
    const initialAnswers = [null, null, null];

    const [userAnswers, setUserAnswers]=useState(initialAnswers)

    const [currentQuestion, setCurrentQuestion]= useState(0)

    const [isQuixFinished, setIsQuizFinished]= useState(false)

    const selectedAnswer = userAnswers[currentQuestion];
  
    function handleSelectedOption(option) {
        const newUserAnswers = [...userAnswers];
        newUserAnswers[currentQuestion]= option;

        setUserAnswers(newUserAnswers);
    
    }

    function goToNext() {
      if (currentQuestion === questionBank.length -1){
         setIsQuizFinished(true);
        }else{

         setCurrentQuestion(currentQuestion + 1);
        }
    }
    function goToPrev() {
      if(currentQuestion > 0){
      setCurrentQuestion(currentQuestion - 1);

     }
  }
    
  function restartQuiz(){
   setUserAnswers(initialAnswers);
   setCurrentQuestion(0);
   setIsQuizFinished(false);   

  }


    if (isQuixFinished){

     return(
     <Results 
     userAnswers={userAnswers} 
     questionBank={questionBank} 
     restartQuiz={restartQuiz}
     />
     );
    }



   return (
   <div>
    <h2>Question{currentQuestion -1}</h2>
    <p className="question">{questionBank[currentQuestion].question}</p>

    {questionBank[currentQuestion].options.map((option)=>(
    <button className={"option" +(selectedAnswer === option ? " selected" : "")} onClick={()=>handleSelectedOption(option)}>
        {option}
        
        </button>
      ))}

  
      <div className="nav-buttons">
        <button onClick={goToPrev} disabled={currentQuestion ===0}>
            Previous

            </button>
        <button onClick={goToNext} disabled={!selectedAnswer}>
           {currentQuestion === questionBank.length -1 ? "Finish Quiz" : "Next"}
        
            </button>
       </div>
     </div>
   )
   
   

}

export default Quiz;