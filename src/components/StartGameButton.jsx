import React from 'react';
const StartGameButton = (props) => {
  return ( <button 
    onClick={props.gameStarted?()=>props.resetGame():()=>props.startGame(props.dificulty)}>
    {props.gameStarted?"RESET":"START"}
    </button> );
}
 
export default StartGameButton;