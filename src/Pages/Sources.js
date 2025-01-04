import "../styles/Sources.css";
import sources from "../Data/Sources.json";

const Sources = () => {
  return(
      <main>
          <div className="headDiv">
              <h1 className="mainTitle">Literatura</h1>
              <h2 className="mainSubtitle">Poniżej znajdziesz źródła literaturowe wykorzystane w obrębie
                  przewodnika</h2>
          </div>

          <div className="contentDiv">
              <div className="contentDivTitle">
                  <h3><a className="source" href="/public#">Strona główna</a></h3>
              </div>
              <table className="sources-table">
                  <tbody>
                  <tr>
                      <td>[1]</td>
                      <td>
                          {sources.source1}
                      </td>
                  </tr>
                  </tbody>
              </table>
              <div className="line"></div>

              <div className="contentDivTitle">
                  <h3><a className="source" href="/objawy">Objawy</a></h3>
              </div>
              <table className="sources-table">
                  <tbody>
                  <tr>
                      <td>[1]</td>
                      <td>
                          {sources.source2}
                          <a href="https://my.clevelandclinic.org"><i>www.my.clevelandclinic.org</i></a>
                      </td>
                  </tr>
                  <tr>
                      <td>[2]</td>
                      <td>
                          {sources.source3}
                          <a href="https://www.nationalmssociety.org"><i>www.nationalmssociety.org</i></a>
                      </td>
                  </tr>
                  <tr>
                      <td>[3]</td>
                      <td>
                          {sources.source4}
                          <a href="https://www.hopkinsmedicine.org"><i>www.hopkinsmedicine.org</i></a>
                      </td>
                  </tr>
                  <tr>
                      <td>[4]</td>
                      <td>
                          {sources.source5}
                      </td>
                  </tr>
                  </tbody>
              </table>
              <div className="line"></div>

              <div className="contentDivTitle">
                  <h3><a className="source" href="/leczenie">Leczenie</a></h3>
              </div>
              <table className="sources-table">
                  <tbody>
                  <tr>
                      <td>[1]</td>
                      <td>
                          {sources.source6}
                      </td>
                  </tr>
                  <tr>
                      <td>[2]</td>
                      <td>
                          {sources.source7}
                          <a href="https://www.msonetoone.pl"><i>www.msonetoone.pl</i></a>
                      </td>
                  </tr>
                  <tr>
                      <td>[3]</td>
                      <td>
                          {sources.source8}
                      </td>
                  </tr>
                  </tbody>
              </table>
              <div className="line"></div>

              <div className="contentDivTitle">
                  <h3><a className="source" href="/src/Pages/Lifestyle">Styl życia</a></h3>
              </div>
              <table className="sources-table">
                  <tbody>
                  <tr>
                      <td>[1]</td>
                      <td>
                          {sources.source3}
                          <a href="https://www.nationalmssociety.org"><i>www.nationalmssociety.org</i></a>
                      </td>
                  </tr>
                  <tr>
                      <td>[2]</td>
                      <td>
                          {sources.source9}
                          <a href="https://fizjo-clinica.pl"><i>www.fizjo-clinica.pl</i></a>
                      </td>
                  </tr>
                  <tr>
                      <td>[3]</td>
                      <td>
                          {sources.source10}
                      </td>
                  </tr>
                  <tr>
                      <td>[4]</td>
                      <td>
                          {sources.source11}
                          <a href="https://mstrust.org.uk"><i>www.mstrust.org.uk</i></a>
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </main>
  )
}

export default Sources;