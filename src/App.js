import React from 'react';
import Header from "./components/Header"
import ScoreBar from "./components/ScoreBar"
import Tails from "./components/Tails"



class App extends React.Component {
 
    
    state = { 
      dificulty:6,
      lifes:5,
      questionLeft:10,
      currentQuestion:1,
      gameStarted:false,
      arrOfColors:[],
      winColor:""
    }
  randomizeColors=(dif)=>{
    const arr=[]
    for(let i=0;i<dif;i++){
      const colorComponent=[];
      for(let j=0;j<=2;j++){
        colorComponent.push(Math.floor(Math.random()*256))
      }
      arr.push(colorComponent)
    }const win=arr[Math.floor(Math.random()*arr.length)]
    this.setState({arrOfColors:arr,
      winColor:win,
    })
  }  
     
  setDificulty=(level)=>{
    
     if(this.state.gameStarted===false){
     this.setState(
       {
         dificulty:level,
       }
     )}}

  startGame=(x)=>{
    this.randomizeColors(x);
    this.setState({gameStarted:true})
    
  }


  checkMach=(e)=>{
   
    if(e===this.state.winColor){
      
      console.log("punkt dla ciebie")
      this.setState({
        currentQuestion:this.state.currentQuestion+1,
      })
      if(this.state.currentQuestion===this.state.questionLeft){
        this.resetGame()
        alert("Wygranko")
      }
      this.randomizeColors(this.state.dificulty)
    }
    else{
      console.log("starcony punkt")
      this.setState({
        arrOfColors:this.state.arrOfColors.filter(el=>
          el!==e),
          lifes:this.state.lifes-1,
          
      },()=>{if(this.state.lifes===0){
        this.resetGame()
        alert("przegranko")
        
      }})
      
    }
  }

  resetGame=()=>{
    this.setState({
      dificulty:this.state.dificulty,
      lifes:5,
      questionLeft:10,
      currentQuestion:1,
      gameStarted:false,
      arrOfColors:[],
      winColor:""
    })
  }
     

  render() { 
    
    return (  <>
      <Header
        winColor={this.state.winColor}
        gameStarted={this.state.gameStarted}/>
      <ScoreBar
        lifes={this.state.lifes}
        questionLeft={this.state.questionLeft}
        currentQuestion={this.state.currentQuestion}
        dificulty={this.state.dificulty}
        gameStarted={this.state.gameStarted}
        startGame={this.startGame}
        resetGame={this.resetGame}
        setDificulty={this.setDificulty}/>
      
      <Tails
        dificulty={this.state.dificulty}
        arrOfColors={this.state.arrOfColors}
        checkMach={this.checkMach}/>
      
    </> );
  }
}
 
export default App;
