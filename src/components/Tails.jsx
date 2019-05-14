import React from 'react';
import { readdirSync } from 'fs';

class Tails extends React.Component{
constructor(props){
  super(props)
}



render(){
const tails=this.props.arrOfColors.map(el=>{
return(<li className="tailsList__element" key={el} dataname={el} style={{backgroundColor:`rgb(${el})`}}onClick={()=>this.props.checkMach(el)}></li>)
})
return(

  <ul className="tailsList">{tails}</ul>
)
}}
 
export default Tails;

// rgb({el[0]}, {el[1]}, {el[2]})