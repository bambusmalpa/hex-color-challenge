import React from 'react';


const DificultyBar = (props) => {
  const difLevels= [{name:"easy",dif:3},{name:"normal",dif:6},{name:"hard",dif:9}];
  const levels=difLevels.map(el=>{
    return <li className={props.dificulty===el.dif?"dificultyBar__element dificultyBar__element--active":"dificultyBar__element"} key={el.dif} onClick={()=>props.setDificulty(el.dif)}>{el.name.toUpperCase()}</li>
  })

  return (
  <div className="scoreBar__element">
    <ul className="dificultyBar">
      
        {props.gameStarted?null:levels}

    </ul>
  </div>
  );
}
 
export default DificultyBar;