import "../styles/AboutRrms.css";
import photoDoctor from "../img/doctor.jpg";
import texts from "../Data/TreatmentTexts.json";

const Treatment = () => {
    return (
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">{texts.mainTitle}</h1>
            </div>

            <div className="contentDiv">
                <div className="contentDivText">
                    <img src={String(photoDoctor)} alt="rysunek lekarza" id="foto-doctor"/>
                    <p>{texts.firstParagraph}</p>

                    <div className="contentDivTitle">
                        <h3>Leczenie rzutów</h3>
                    </div>
                    {texts.secondParagraph}
                    <a className="source" href="/literatura">[1]</a>.

                    <div className="contentDivTitle">
                        <h3>Modyfikacja przebiegu choroby</h3>
                    </div>
                    {texts.thirdParagraph}
                    <a className="source" href="/literatura">[2]</a>.
                    <br/><br/>

                    {texts.fourthParagraph}
                    <a className="source" href="/literatura">[3]</a>:
                    <ul>
                        {texts.medicinesFirst.map((med, index) => (
                            <li key={index}>{med}</li>
                        ))}
                    </ul>

                    {texts.fifthParagraph}
                    <a className="source" href="/literatura"> [3]</a>:
                    <ul>
                        {texts.medicinesSecond.map((med, index) => (
                            <li key={index}>{med}</li>
                        ))}
                    </ul>

                    {texts.sixthParagraph}

                    <div className="contentDivTitle">
                        <h3>Rehabilitacja</h3>
                    </div>
                    {texts.seventhParagraph}
                    <a className="source" href="/literatura"> [1]</a>.
                    <br/><br/>

                    {texts.eighthParagraph}
                    <a className="source" href="/mapa"><b>mapie specjalistów</b></a>.

                    <div className="contentDivTitle">
                        <h3>Sprawdź swoją wiedzę z tego artykułu i rozwiąż <a className="source" href="/leczenie/quiz"><u>QUIZ</u></a>!
                        </h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Treatment;