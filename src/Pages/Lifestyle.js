import "../styles/AboutRrms.css";
import lifestylePhoto from "../img/lifestyle-people.png";
import texts from "../Data/LifestyleTexts.json";

const Lifestyle = () => {
    return (
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">{texts.mainTitle}</h1>
            </div>

            <div className="contentDiv">
                <div className="contentDivText">
                    <img src={String(lifestylePhoto)} alt="czarne sylwetki ćwiczących ludzi" id="lifestyle-foto"/>
                    <p>{texts.firstParagraph}</p>

                    <div className="contentDivTitle">
                        <h3>Aktywność fizyczna</h3>
                    </div>
                    {texts.secondParagraph}

                    <div className="contentDivTitle">
                        <h3>Zdrowa dieta</h3>
                    </div>
                    {texts.thirdParagraph}
                    <a className="source" href="/literatura">[1]</a>.

                    <div className="contentDivTitle">
                        <h3>Badania profilaktyczne</h3>
                    </div>
                    {texts.fourthParagraph}
                    <a className="source" href="/literatura">[2]</a>.

                    <div className="contentDivTitle">
                        <h3>Zdrowa rutyna</h3>
                    </div>
                    {texts.fifthParagraph}

                    <div className="contentDivTitle">
                        <h3>Zdrowy sen</h3>
                    </div>
                    {texts.sixthParagraph}
                    <a className="source" href="/literatura">[1]</a>.

                    <div className="contentDivTitle">
                        <h3>Odpowiednia temperatura</h3>
                    </div>
                    {texts.seventhParagraph}
                    <a className="source" href="/literatura">[3]</a>.

                    <div className="contentDivTitle">
                        <h3>Redukcja stresu</h3>
                    </div>
                    {texts.eighthParagraph}
                    <a className="source" href="/literatura">[4]</a>.

                    <div className="contentDivTitle">
                        <h3>Sprawdź swoją wiedzę z tego artykułu i rozwiąż <a className="source" href="/lifestyle/quiz"><u>QUIZ</u></a>!</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Lifestyle;