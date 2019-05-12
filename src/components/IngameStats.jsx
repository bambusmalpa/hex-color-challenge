import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

library.add(faHeart)


const IngameStats = (props) => {
  const lifes=[];
 for(let i=0;i<props.lifes;i++){
   lifes.push(<FontAwesomeIcon key={i} className="scoreBar__heart" icon="heart" />)
 }
  return (
  <div className="scoreBar__element">
    <div className="ingameStats">
    <div className="ingameStats__lifes">{props.gameStarted?lifes:null}</div>
    <div className="ingameStats__questions">{props.gameStarted?`Pytanie: ${props.currentQuestion}/${props.questionLeft}`:null}
    </div>
  </div>
  
  </div>);
}
 
export default IngameStats;