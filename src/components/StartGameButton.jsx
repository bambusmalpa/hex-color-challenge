import React from 'react';
const StartGameButton = (props) => {
  return ( <button className="startGameButton"
    onClick={props.gameStarted?()=>props.resetGame():()=>props.startGame(props.dificulty)}>
    {props.gameStarted?"RESET":"START"}
    </button> );
}
 
export default StartGameButton;