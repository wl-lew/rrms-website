import React, { useRef, useState } from "react";
import "../styles/Quizzes.css";
import { treatmentQuestions } from "../Data/quizQuestions/treatmentQuestions";

const TreatmentQuiz = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);

    const optionsRef = useRef([]);

    const checkAnswer = (e, ans) => {
        if (!lock) {
            if (treatmentQuestions[index].ans === ans) {
                e.target.classList.add("correct");
                setScore(prev => prev + 1);
            } else {
                e.target.classList.add("wrong");
                optionsRef.current[treatmentQuestions[index].ans - 1]?.classList.add("correct");
            }
            setLock(true);
        }
    };

    const nextQuestion = () => {
        if (lock) {
            if (index === treatmentQuestions.length - 1) {
                setResult(true);
            } else {
                setIndex(index + 1);
                setLock(false);
            }
            optionsRef.current.forEach(el => {
                el?.classList.remove("correct", "wrong");
            });
        }
    };

    const resetButton = () => {
        setIndex(0);
        setScore(0);
        setLock(false);
        setResult(false);
    };

    return (
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">Quiz</h1>
                <h2 className="mainSubtitle">Spróbuj rozwiązać quiz dotyczący leczenia RRMS</h2>
            </div>
            <div className="quiz-container">
                <h1>QUIZ: leczenie RRMS</h1>
                <div className="lineQuiz"></div>
                {!result ? (
                    <main>
                        <h2>{index + 1}. {treatmentQuestions[index]?.question}</h2>
                        <ul>
                            {treatmentQuestions[index]?.options.map((option, i) => (
                                <li
                                    key={i}
                                    ref={el => {
                                        if (el) optionsRef.current[i] = el;
                                    }}
                                    onClick={(e) => checkAnswer(e, i + 1)}
                                >
                                    {option}
                                </li>
                            ))}
                        </ul>
                        <button onClick={nextQuestion}>
                            {index === treatmentQuestions.length - 1 ? "Zobacz wynik" : "Następne pytanie"}
                        </button>
                        <div className="quiz-index">{index + 1} pytanie z {treatmentQuestions.length}</div>
                    </main>
                ) : (
                    <main>
                        <h2 className="resultPoints">Zdobyłeś {score} pkt. na {treatmentQuestions.length} możliwych.</h2>
                        <button onClick={resetButton}>Spróbuj ponownie!</button>
                    </main>
                )}
            </div>
        </main>
    );
};

export default TreatmentQuiz;
