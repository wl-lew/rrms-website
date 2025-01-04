import texts from "../Data/accessibilityTexts.json";
import "../styles/AccDeclaration.css"

const AccDeclaration = () => {
    return(
        <main>
            <div className="headDiv">
                <h1 className="mainTitle">{texts.mainTitle}</h1>
            </div>
            <div className="contentDiv punktor-dec">
                <p id="a11y-wstep">
                    <span id="a11y-podmiot">{texts.introduction}</span></p>
                <ul>
                    <li>Data publikacji strony internetowej:
                        <span id="a11y-data-publikacja">{texts.publicationDate}</span>.</li>
                    <li>Data ostatniej istotnej aktualizacji:
                        <span id="a11y-data-aktualizacja">{texts.actualizationDate}</span>.</li>
                </ul>
                <section>
                    <h2>Status zgodności z ustawą</h2>
                    <p id="a11y-status">{texts.complianceStatus}</p>
                    <h3>Niespełnione wymagania</h3>
                    <ul>
                        <li>{texts.unmetRequirements}</li>
                    </ul>
                    <h3>Powody braku spełaniania wymagań</h3>
                    <ul>
                        <li>{texts.unmetRequirementsReason}</li>
                    </ul>
                </section>
                <section>
                    <h2>Przygotowanie deklaracji dostępności</h2>
                    <p>Oświadczenie sporządzono dnia:
                        <span id="a11y-data-sporzadzenie">{texts.dateOfPreparation}</span>.</p>
                    <p>{texts.preparationOfADeclaration}</p>
                    <p>Data ostatniego przeglądu deklaracji:
                        <span id="a11y-data-przeglad">{texts.actualizationDate}</span>.</p>
                </section>
                <section>
                    <h2>Skróty klawiaturowe</h2>
                    <ul>
                        <li>{texts.keyboardShortcuts}</li>
                    </ul>
                </section>
                <section>
                    <h2 id="a11y-kontakt">Informacje zwrotne i dane kontaktowe</h2>
                    <section>
                        <h3>Obsługa wniosków i skarg związanych z dostępnością</h3>
                        <p id="a11y-procedura">{texts.procedure}</p>
                        <p>
                            <a href="https://www.rpo.gov.pl/content/jak-zglosic-sie-do-rzecznika-praw-obywatelskich" id="rpo-link">
                                Strona internetowa Rzecznika Praw Obywatelskich
                            </a>
                        </p>
                    </section>
                </section>
                <section>
                    <h2 id="a11y-aplikacje">Aplikacje mobilne</h2>
                    <p>{texts.mobileApps}</p>
                </section>
            </div>
        </main>
    );
}

export default AccDeclaration;