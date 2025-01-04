import {
    BrowserRouter,
    Route,
    Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Symptoms from "./Pages/Symptoms";
import Treatment from "./Pages/Treatment";
import Lifestyle from "./Pages/Lifestyle";
import MapPage from "./expert_map/MapPage";
import Sources from "./Pages/Sources";
import NotFoundPage from "./Pages/NotFoundPage";
import SymptomsQuiz from "./Quizzes/symptomsQuiz";
import TreatmentQuiz from "./Quizzes/treatmentQuiz";
import LifestyleQuiz from "./Quizzes/lifestyleQuiz";
import AccDeclaration from "./Components/accDeclaration";

function App() {
    return (
        <BrowserRouter>
            <div className="App-js">
                <Navbar/>
                <div className="full-content">
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/objawy" element={<Symptoms/>} />
                        <Route path="/leczenie" element={<Treatment/>} />
                        <Route path="/lifestyle" element={<Lifestyle/>} />
                        <Route path="/mapa" element={<MapPage/>} />
                        <Route path="/literatura" element={<Sources/>} />
                        <Route path="/objawy/quiz" element={<SymptomsQuiz/>} />
                        <Route path="/leczenie/quiz" element={<TreatmentQuiz/>} />
                        <Route path="/lifestyle/quiz" element={<LifestyleQuiz/>} />
                        <Route path="/deklaracja" element={<AccDeclaration/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;