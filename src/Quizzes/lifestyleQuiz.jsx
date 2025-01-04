import React, {
    useRef,
    useState } from "react";
import '../styles/Quizzes.css';
import { lifestyleQuestions } from "../Data/quizQuestions/lifestyleQuestions";

const LifestyleQuiz = () => {
    const [index, setIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lock, setLock] = useState(false);
    const [result, setResult] = useState(false);

    const optionsRef = useRef([]);

    const checkAnswer = (e, ans) => {
        if (!lock) {
            if (lifestyleQuestions[index].ans === ans) {
                e.target.classList.add("correct");
                setScore(score + 1);
            } else {
                e.target.classList.add("wrong");
                optionsRef.current[lifestyleQuestions[index].ans - 1]?.classList.add("correct");
            }
            setLock(true);
        }
    };

    const nextQuestion = () => {
        if (lock) {
            if (index === lifestyleQuestions.length - 1) {
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
                <h2 className="mainSubtitle">Spróbuj rozwiązać quiz dotyczący stylu życia przy RRMS</h2>
            </div>
            <div className="quiz-container">
                <h1>QUIZ: styl życia</h1>
                <div className="lineQuiz"></div>
                {!result ? (
                    <main>
                        <h2>{index + 1}. {lifestyleQuestions[index].question}</h2>
                        <ul>
                            {lifestyleQuestions[index].options.map((option, i) => (
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
                        <button onClick={nextQuestion}>{index === lifestyleQuestions.length - 1 ? 'Zobacz wynik' : 'Następne pytanie'}</button>
                        <div className="quiz-index">{index + 1} pytanie z {lifestyleQuestions.length}</div>
                    </main>
                ) : (
                    <main>
                        <h2 className="resultPoints">Zdobyłeś {score} pkt. na {lifestyleQuestions.length} możliwych.</h2>
                        <button onClick={resetButton}>Spróbuj ponownie!</button>
                    </main>
                )}
            </div>
        </main>
    );
};

export default LifestyleQuiz;