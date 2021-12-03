import './App.css';
import React, {useState } from "react";
import EndPage from "./components/EndPage";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";


import {QuizContext} from "./Helpers/Contexts";

 
function App() {
  const [ gameState, setGameState ]= useState ("menu");
  const [ score, setScore ] = useState(0);
 

  return (
    <div className="App">     
        <h1>quiz App</h1>

    <QuizContext.Provider value={{gameState, setGameState, score, setScore }}>
        {gameState === "menu" && <MainMenu/>}
        {gameState === "quiz" && <Quiz/>}
        {gameState === "endPage" && <EndPage/>}
    </QuizContext.Provider>   

    </div>
  );
}

export default App;
 