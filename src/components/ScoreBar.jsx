import React from 'react';
import StartGameButton from "./StartGameButton"
import DificultyBar from "./DificultyBar"
import IngameStats from "./IngameStats"

const ScoreBar = (props) => {
  
  

  return ( <div className="scoreBarConteiner">
  <div className="scoreBarConteiner__content">
  {props.gameStarted?
  
  <IngameStats
    lifes={props.lifes}
    gameStarted={props.gameStarted}
    currentQuestion={props.currentQuestion}
    questionLeft={props.questionLeft}/>:

    <DificultyBar
    
    dificulty={props.dificulty}
    setDificulty={props.setDificulty}
    gameStarted={props.gameStarted} />
    
  }
  
  <StartGameButton
    startGame={props.startGame}
    dificulty={props.dificulty}
    resetGame={props.resetGame}
    gameStarted={props.gameStarted}/>

    </div>
  </div>
   );
}
 
export default ScoreBar;