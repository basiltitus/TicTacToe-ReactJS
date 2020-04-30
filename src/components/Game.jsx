import React from 'react'
import Board from './Board' 
import Welcome from './Welcome'

function Game (){
    var [ingame,setIngame]=React.useState(false);
    var [player1,setplayer1]=React.useState("")
var [player2,setplayer2]=React.useState("");

function restartgame(){
    setIngame(false);
    console.log("restart");
}
    function registerfn(val,val2){
        setIngame(true);
        console.log("clicked");
        setplayer1(val);
        setplayer2(val2);
    }
    if(ingame===false)
    return <Welcome registered={registerfn} />
       
    else
    return <div className="game">
    <div className="game-board">
      <Board player1={player1} player2={player2} playagain={restartgame}/>
    </div>
    <div className="game-info">
      <div>{/* status */}</div>
      <ol>{/* TODO */}</ol>
    </div>
  </div>
}
export default Game;