import "../styles/AboutRrms.css";
import neuron from "../img/neuron-foto.jpg";
import texts from "../Data/SymptomsTexts.json";

const Symptoms = () => {
    return (
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">Objawy RRMS</h1>
            </div>

            <div className="contentDiv">
                <div className="contentDivText">
                    <img src={String(neuron)} alt="abstakcyjne zdjęcie neuronu" id="neuron-foto"/>
                    <p>
                        {texts.firstParagraph}
                        <a className="source" href="/literatura">[1]</a>.
                        {texts.secondParagraph}
                        <a className="source" href="/literatura">[2]</a>.
                    </p>
                    {texts.thirdParagraph}
                    <a className="source" href="/literatura">[3]</a>.
                    <br/><br/>
                    {texts.fourthParagraph[0].description}
                    <a className="source" href="/literatura">[4]</a>:
                    <ul>
                        {texts.fourthParagraph[0].symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                        ))}
                    </ul>
                    {texts.fifthParagraph[0].description}
                    <a className="source" href="/literatura">[4]</a>:
                    <ul>
                        {texts.fifthParagraph[0].symptoms.map((symptom, index) => (
                            <li key={index}>{symptom}</li>
                        ))}
                    </ul>
                    {texts.sixthParagraph}
                    <a className="source" href="/mapa"><b>tutaj</b></a>.
                    {texts.seventhParagraph}

                    <div className="contentDivTitle">
                        <h3>Sprawdź swoją wiedzę z tego artykułu i rozwiąż <a className="source" href="/objawy/quiz"><u>QUIZ</u></a>!</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Symptoms;