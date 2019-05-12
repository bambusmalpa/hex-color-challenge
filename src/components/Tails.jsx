import React from 'react';

const Tails = (props) => {
const tails=props.arrOfColors.map(el=>{
return(<li className="tailsList__element" key={el} dataname={el} style={{backgroundColor:`rgb(${el})`}}onClick={()=>props.checkMach(el)}>rgb({el[0]}, {el[1]}, {el[2]})</li>)
})
return(

  <ul className="tailsList">{tails}</ul>
)
}
 
export default Tails;