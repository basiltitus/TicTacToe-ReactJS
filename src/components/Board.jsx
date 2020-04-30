import React from 'react'
import Square from './Square'

function Board(props){
    var [player,setPlayer]=React.useState(
        [null,null,null,null,null,null,null,null,null]);
        var [playeroption,setPlayeroption]=React.useState('X');
        var [win,setwin]=React.useState(null);

        function checkwin(player){
            console.log("insidecheckin");
            const lines = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [1, 4, 7],
                [2, 5, 8],
                [0, 4, 8],
                [2, 4, 6],
              ];
              for (let i = 0; i < lines.length; i++) {
                const [a, b, c] = lines[i];
                if (player[a] && player[a] === player[b] && player[a] === player[c]) {
                  return player[a];
                }
              }var flag=0;
              player.map(function(item){
                  if(item===null)
                  flag=1;
              });
              if(flag==0)
              return "draw"
              return null;
        }

    function fn(val){
        if(win===null)
{

        var x=[]
        setPlayer(function(preval){
           x=[...preval];
           if(x[val]===null)
            {x[val]=playeroption;
            setPlayeroption(playeroption==='X'?'O':'X')
            }
            //console.log(x);
            var w=checkwin(x);
       if(w==='X')
       w=props.player1;
       if(w=='O')
       w=props.player2;
            if(w!==null)
             {
                 if(w==='draw'){
                     setwin("The Match is DRAW")
                 }else{
                 console.log(w+" won the match")
                  setwin(w +" Won the match");}
                 // setPlayeroption(w +" won the match");
         }
         else{
             console.log(w);
         }
            return x;
            
        })
        //console.log(player);
       
        
                //event.trigger.disaled=true
    }
    }
const status=<h1>{playeroption=='X'?props.player1:props.player2}'s Turn </h1>
function renderSquare(i){
return <Square val={i} callfn={fn} playerdata={player} />

}
    return <div className="gamepallete">
    <div className="status">{status}</div>
    <br />
    
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
    <h2 className="output">{win}</h2>
    <button type="button" onClick={()=>props.playagain()} class="btn btn-outline-danger">Play Again !</button>
  </div>
}

export default Board