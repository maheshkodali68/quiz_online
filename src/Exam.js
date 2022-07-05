import React, { useState } from 'react';

import './Exam.css';

import Timer from './Timer';

function Exam() {

  const questions = [
    {
      questionText : "Who invented Java? ",
      answerOptions : [
        {answerText : "James Gosling", isCorrect : true},
        {answerText : "Dennis Ritchie", isCorrect : false},
        {answerText : "Bjarne Stroustrup", isCorrect : false},
        {answerText : "Guido van Rossum", isCorrect : false}
      ]
    },
    {
      questionText : "What is a correct syntax to output Hello World in Java?",
      answerOptions : [
        {answerText : "echo(\"Hello World\")", isCorrect : false},
        {answerText : "console.log(\"Hello World\")", isCorrect : false},
        {answerText : "System.out.println(\"Hello World\");", isCorrect : true},
        {answerText : "print(\"Hello World\")", isCorrect : false}
      ]
    },
    {
      questionText : "Which data type is used to create a variable that should store text?",
      answerOptions : [
        {answerText : "char" , isCorrect : false},
        {answerText : "String", isCorrect : true},
        {answerText : "string", isCorrect : false},
        {answerText : "txt", isCorrect : false}
      ]
    },
    {
      questionText : "How do you create a variable with the numeric value 5?",
      answerOptions : [
        {answerText : "float x = 5;", isCorrect : false},
        {answerText : "x = 5;", isCorrect : false},
        {answerText : "int x = 5;", isCorrect : true},
        {answerText : "num x = 5;", isCorrect : false}
      ]
    },
    {
      questionText : "Which method can be used to return a string in upper case letters?",
      answerOptions : [
        {answerText : "toUpperCase()", isCorrect : true},
        {answerText : "tuc()", isCorrect : false},
        {answerText : "upperCase()", isCorrect : false},
        {answerText : "touppercase()", isCorrect : false}
      ]
    },
    {
      questionText : "What is polymorphism?",
      answerOptions : [
        {answerText : "Polymorphism is a technique to define different objects of same type.", isCorrect : false},
        {answerText : "Polymorphism is the ability of an object to take on many forms.", isCorrect : true},
        {answerText : "Polymorphism is a technique to define different methods of same type.", isCorrect : false},
        {answerText : "NOno of the above", isCorrect : false}
      ]
    },
    {
      questionText : "What is inheritance?",
      answerOptions : [
        {answerText : "It is the process where one object acquires the properties of another", isCorrect : true},
        {answerText : "inheritance is the ability of an object to take on many forms.", isCorrect : false},
        {answerText : "inheritance is a technique to define different methods of same type.", isCorrect : false},
        {answerText : "None of the above", isCorrect : false}
      ]
    },
    {
      questionText : "Static binding uses which information for binding?",
      answerOptions : [
        {answerText : "object.", isCorrect : false},
        {answerText : "type.", isCorrect : true},
        {answerText : "Both of the above.", isCorrect : false},
        {answerText : "None of the above", isCorrect : false}
      ]
    },
    {
      questionText : "Scanner is a",
      answerOptions : [
        {answerText : "Object", isCorrect : false},
        {answerText : "Data type", isCorrect : false},
        {answerText : "Class", isCorrect : true},
        {answerText : "Variable", isCorrect : false}
      ]
    },
    {
      questionText : "Which of the followig id used read a float value from the user.",
      answerOptions : [
        {answerText : "nextInt()", isCorrect : false},
        {answerText : "nextFloat()", isCorrect : true},
        {answerText : "NextFloat()", isCorrect : false},
        {answerText : "float()", isCorrect : false}
      ]
    },
    {
      questionText : "Which method is used to access first element in the ArrayList \"Cars\".",
      answerOptions : [
        {answerText : "Cars.access(0)", isCorrect : false},
        {answerText : "Cars[0]", isCorrect : false},
        {answerText : "Cars(0)", isCorrect : false},
        {answerText : "Cars.get(0)", isCorrect : true}
      ]
    },
    {
      questionText : "The command used to compile a java program is",
      answerOptions : [
        {answerText : "javac classname", isCorrect : false},
        {answerText : "javac classname.java", isCorrect : true},
        {answerText : "java classname", isCorrect : false},
        {answerText : "java classname.java", isCorrect : false}
      ]
    },
    {
      questionText : "Which of the following is a linear data structure?",
      answerOptions : [
        {answerText : "Graphs", isCorrect : false},
        {answerText : "Binary Trees", isCorrect : false},
        {answerText : "Array", isCorrect : true},
        {answerText : "AVL Tree", isCorrect : false}
      ]
    },
    {
      questionText : "Which of the following is the advantage of the array data structure?",
      answerOptions : [
        {answerText : "Elements of mixes data types can be stored", isCorrect : false},
        {answerText : "Easier to access the elements in the array", isCorrect : true},
        {answerText : "Index of the first element starts from 1", isCorrect : false},
        {answerText : "Elements of the array cannot be sorted", isCorrect : false}
      ]
    },
    {
      questionText : "Which of the following is the correct way of declaring an array?",
      answerOptions : [
        {answerText : "int arrayName[10];", isCorrect : true},
        {answerText : "int arrayName;", isCorrect : false},
        {answerText : "arrayName{20};", isCorrect : false},
        {answerText : "array arrayName[10];", isCorrect : false}
      ]
    },
    {
      questionText : "Which one of the following is the process of inserting an element in the stack?",
      answerOptions : [
        {answerText : "Insert", isCorrect : false},
        {answerText : "Add", isCorrect : false},
        {answerText : "Push", isCorrect : true},
        {answerText : "None", isCorrect : false}
      ]
    },
    {
      questionText : "If the elements '1', '4', '2' and '3' are added in a stack, so what would be the order for the removal?",
      answerOptions : [
        {answerText : "4321", isCorrect : false},
        {answerText : "3241", isCorrect : true},
        {answerText : "1234", isCorrect : false},
        {answerText : "2134", isCorrect : false}
      ]
    },
    {
      questionText : "Which keyword is used for accessing the features of a package?",
      answerOptions : [
        {answerText : "export", isCorrect : false},
        {answerText : "extends", isCorrect : false},
        {answerText : "package", isCorrect : false},
        {answerText : "import", isCorrect : true}
      ]
    },
    {
      questionText : "When does Exceptions in Java arises in code sequence?",
      answerOptions : [
        {answerText : "Compilation Time", isCorrect : false},
        {answerText : "Run Time", isCorrect : true},
        {answerText : "Can Occur Any Time", isCorrect : false},
        {answerText : "None", isCorrect : false}
      ]
    },
    {
      questionText : "Which of these keywords must be used to monitor for exceptions?",
      answerOptions : [
        {answerText : "try", isCorrect : true},
        {answerText : "finally", isCorrect : false},
        {answerText : "throw", isCorrect : false},
        {answerText : "catch", isCorrect : false}
      ]
    },
    {
    questionText : "Which of these keywords must be used to handle the exception thrown by try block in some rational manner?",
      answerOptions : [
        {answerText : "try", isCorrect : false},
        {answerText : "finally", isCorrect : false},
        {answerText : "throw", isCorrect : false},
        {answerText : "catch", isCorrect : true}
      ]
    },
    {
    questionText : "Which of these keywords is used to manually throw an exception?",
      answerOptions : [
        {answerText : "try", isCorrect : false},
        {answerText : "finally", isCorrect : false},
        {answerText : "throw", isCorrect : true},
        {answerText : "catch", isCorrect : false}
      ]
    },
    {
    questionText : "Which of these packages contains all the classes and methods required for even handling in Java?",
      answerOptions : [
        {answerText : "java.applet", isCorrect : false},
        {answerText : "java.awt", isCorrect : false},
        {answerText : "java.event", isCorrect : false},
        {answerText : "java.awt.event", isCorrect : true}
      ]
    },
    {
    questionText : " Which of the following is not a class of java.util.regex?",
      answerOptions : [
        {answerText : "Pattern class", isCorrect : false},
        {answerText : "matcher class", isCorrect : false},
        {answerText : "Regex class", isCorrect : true},
        {answerText : "PatternSyntaxException", isCorrect : false}
      ]
    },
    {
    questionText : "Which of the following represents digit in regular expression?",
      answerOptions : [
        {answerText : "\\d", isCorrect : true},
        {answerText : "\\digit", isCorrect : false},
        {answerText : "/D", isCorrect : false},
        {answerText : "/isDigit", isCorrect : false}
      ]
    }
  ]


  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [marks, setMarks] = useState(false);

  const handleClick = (isCorrect) => {

    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }else{
      alert("This is the last question!!")
    }
    if(isCorrect === true) {
      setScore(score + 1)
    }
  }
  const nextQuestionArrow = () => {
    const nextQuestion = currentQuestion + 1
    if(nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion)
    }else{
      alert("This is the last question!!")
    }
  }
  const prevQuestionArrow = () => {
    const prevQuestion = currentQuestion - 1
    if(prevQuestion >= 0) {
      setCurrentQuestion(prevQuestion)
    }
  }
  const submitTest = () => {
    alert("Dou you wnat to submit test?")
    setShowScore(true)
    if(score < 9 ){
      setMarks(true)
    }
  }
  

  let onTimesup = ()  => {
    setShowScore(true)
    alert("Time is up!!")
    if(score < 9 ){
      setMarks(true)
    }
  }
  return (
    <>
    
    <div id='app'>
      <div id='quiz-box'>
        {showScore ? (
          <div id='display-score'>
            You scored {score} out of {questions.length}
            <div id='result'>
            {marks ? ("Unfortunately you didn't pass the test."): ("Congratulations! You cleared the test.")}
            </div>
            <a href='./'>Click here</a> to go to home page.
          </div>
        ) : (
          <>
          
          <div id='head'>
          <h3>ONLINE EXAMINATION</h3>
          <div id='timerAndSubmit'>
            
            Time left: 
            <Timer id='timer'
                 onTimesup={onTimesup}
                duration = {10}
              />
          </div>
          </div>
          <div id='display-question'>
            <div id='question-number'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div id='question'>
              {questions[currentQuestion].questionText}
            </div>
          
            <div id='options'>
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button id='btn' 
                    onClick={() => handleClick(answerOption.isCorrect)}
                    >
                  {answerOption.answerText}
                </button>
              ))}
              <div id='nextArrow'>
                <button id='arrowbtn' onClick={prevQuestionArrow}>&#8249;&#8249;</button>
                 &nbsp;Question {currentQuestion+1}  &nbsp;
                <button id='arrowbtn' onClick={nextQuestionArrow}>&#8250;&#8250;</button>
              </div>
            </div>
            </div>
            <div id='quesbtns'>
              <div id='QuestionChange'>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(0)}>1</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(1)}>2</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(2)}>3</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(3)}>4</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(4)}>5</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(5)}>6</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(6)}>7</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(7)}>8</button>
              <button id='QuestionChangebtn1' onClick={()=>setCurrentQuestion(8)}>9</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(9)}>10</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(10)}>11</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(11)}>12</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(12)}>13</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(13)}>14</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(14)}>15</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(15)}>16</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(16)}>17</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(17)}>18</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(18)}>19</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(19)}>20</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(20)}>21</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(21)}>22</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(22)}>23</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(23)}>24</button>
              <button id='QuestionChangebtn' onClick={()=>setCurrentQuestion(24)}>25</button>
              
              <button id='submit' onClick={submitTest}>SUBMIT TEST</button>
              </div>
            </div>
            </>

        )}
      </div>
    </div>
    </>
  );
}

export default Exam;
