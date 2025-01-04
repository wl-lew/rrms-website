import "../styles/NotFoundPage.css"

const NotFoundPage = () => {
    return (
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">Przepraszamy...</h1>
                <h2 className="mainSubtitle">strona nie została odnaleziona</h2>
            </div>
            <div className="contentDivTitle" id="contentDivNotFound">
                <button className="buttonNotFound">
                    <a href="/public#" className="notFound-a">Powrót do strony głównej</a>
                </button>
            </div>
        </main>
    );
}

export default NotFoundPage;

