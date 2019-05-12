import React from 'react'


const Header = (props) => {
return (<div className="header">{props.winColor?<h1 className="header__title">rgb({props.winColor[0]}, {props.winColor[1]}, {props.winColor[2]})</h1>:null}</div>);
}
 
export default Header;