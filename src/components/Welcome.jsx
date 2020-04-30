import React from 'react'


function Welcome(props){
    var [players,setplayers]=React.useState("TIC_TAC_TOE");
var [player1,setplayer1]=React.useState("")
var [player2,setplayer2]=React.useState("");

    function sumitfn(e){
        e.preventDefault();
        props.registered(player1,player2);
    }
    function reset(){
        setplayers("[  ]");
    }
    function addvs(){
    
        setplayers((prevval)=>
        prevval+" VS ");
    }
    function change1(event){
        setplayer1(event.target.value);
        setplayers("[ "+event.target.value+' ]');
     //   console.log(event);
    }
    function change2(event){
        var gh=event.target.value;
        setplayer2(gh)
        console.log(gh);
        setplayers('[ '+player1+ " VS "+gh+' ]');
           }
    return<div className="welcomeclass"><h1>{players}</h1>
    <br />
    <form onSubmit={sumitfn}>
    <h2 >Player 1</h2>
    
    <input tpe="text" onClick={reset} value={player1} onChange={change1}></input>
    <br /> <br />
    <h2>Player 2</h2> 
    <input tpe="text" value={player2} onClick={addvs} onChange={change2}></input><br /> <br /> 
    <button type="submit" class="btn btn-danger btn-lg">START</button>
    </form>
    </div>
}
export default Welcome;