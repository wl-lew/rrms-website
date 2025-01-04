import "../styles/Home.css";
import photoQuestions from "../img/pytajniki.jpg";
import fourPeople from "../img/four-people.png";
import photoDetective from "../img/detective.png";
import texts from "../Data/HomeTexts.json"

const Home = () => {
    return(
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">{texts.mainTitle}</h1>
                <h2 className="mainSubtitle">{texts.mainSubtitle}</h2>
            </div>
            <div className="contentDiv">
                <div className="contentDivTitle">
                    <h3>Czym jest RRMS?</h3>
                </div>
                <div className="contentDivText">
                    <img src={String(photoQuestions)} alt="szkic twarzy a nad nią trzy pytajniki" id="fotoQuestions"/>
                    <p>{texts.firstParagraph}<a className="source" href="/literatura">[1]</a>.</p>
                </div>
                <div className="line"></div>
            </div>

            <div className="contentDiv">
                <div className="contentDivTitle">
                    <h3>Dla kogo jest ten przewodnik?</h3>
                </div>
                <div className="contentDivText">
                    <img src={String(fourPeople)} alt="czarne sylwetki czterech cieszących się osób" id="four-people"/>
                    <p>{texts.secondParagraph}</p>
                </div>
                <div className="line"></div>
            </div>

            <div className="contentDiv">
                <div className="contentDivTitle">
                    <h3>Co tutaj znajdziesz?</h3>
                </div>
                <div className="contentDivText">
                    <img src={String(photoDetective)} alt="rysunek detektywa patrzącego przez lupę na pytajnik" id="fotoDetective"/>
                    <p>{texts.thirdParagraph}</p>
                </div>
            </div>
        </main>


    );
}

export default Home;