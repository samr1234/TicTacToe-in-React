import Square from "./Square"
import { ToastContainer, toast } from 'react-toastify';
import {useState} from "react"
import 'react-toastify/dist/ReactToastify.css';

const Board=()=>{

      
       

   const [state,setState]= useState(Array(9).fill(null))
   const [isXTurn,setIsXTurn]= useState(true)

//    Winner Logic 
// ****************************************
const checkWinner =() =>{

    const logicArray=[

        [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

    ]

    for(let logic of logicArray){

        const [a,b,c]= logic;
        if(state[a]==state[b] && state[b]==state[c] && state[a]!=null){

                return state[a];
        }
        
    }

    

return false;
}
// ******************************************************

const isWinner= checkWinner();

// TO check  whether it is cross or Circle by checking existing state 
    const handleClick =(index)=>{
    
        if(state[index]==null){

        
            const copyState= {...state};
            copyState[index]= isXTurn ? 'X ' : '0'
            setState(copyState)
        setIsXTurn(!isXTurn)
        }

       

        
       
    }

    const playAgain =()=>{

        setState("")
        
 }

return (
        
<div className="board-container">
        <h1 style={{fontSize:"5rem"}}>TIC TAC TOE </h1>
{/* this value will tell which sqaure i have clicked and  callback will take that same value to handle click*/}
    { isWinner ?<div style={{textAlign:"center",margin:"3rem",fontSize:"4rem"}}> <span>{isWinner}</span> Won the game <br/>
    <button style={{margin:"3rem",padding:"1rem"}} onClick={()=>{playAgain()}}>Play Again</button></div>:
    (<>
    <div className="board-row ">
    <Square class="b1" onClick={()=>{handleClick(0)}} value={state[0]}/>
    <Square onClick={()=>{handleClick(1)}} value={state[1]}/>
    <Square  onClick={()=>{handleClick(2)}}value={state[2]}/>
   
    </div>
    < div className="board-row">
    <Square onClick={()=>{handleClick(3)}}value={state[3]}/>
    <Square onClick={()=>{handleClick(4)}}value={state[4]}/>
    <Square onClick={()=>{handleClick(5)}} value={state[5]}/>
    
    </div>
    <div className="board-row">
    <Square onClick={()=>{handleClick(6)}} value={state[6]}/>
    <Square onClick={()=>{handleClick(7)}} value={state[7]}/>
    <Square onClick={()=>{handleClick(8)}} value={state[8]}/>
    </div>
    <button style={{display:"block",marginLeft:"auto",marginRight:"auto",marginTop:"2rem",fontSize:"1rem"}}onClick={()=>{setState("")}}>RESET GAME</button>
    </>)
    }
</div>

)
}

export default Board