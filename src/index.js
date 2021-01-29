import React, { useState } from 'react';
import ReactDom from 'react-dom';
// importar estilos
import './index.css';

const Square = (props) => {
  return ( 
    <button className="square" onClick={props.onClickEvent}>
      {props.value}
    </button>
  );
};

const Board = () => {
  const initialSquares = Array(9).fill(null);

  const [squares,setSquares] = useState(initialSquares);
  const [ xIsNext,setXIsNext] = useState(true);

  const handleClickEvent = (i) =>{
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };
  const renderSquare = (i) =>{
    return ( 
      <Square value={squares[i]}
        onClickEvent={()=>handleClickEvent(i)}
      />
    );
  };

  const winner = calculateWinner(squares);
  const status = winner ?
  `winner: ${winner}` :
  `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={{backgroundColor: 'skyblue',margin:10,padding:10}}>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}{renderSquare(1)}{renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}{renderSquare(4)}{renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}{renderSquare(7)}{renderSquare(8)}
      </div>
    </div>
  );
};

const Game = () => {
  return (<div className="game"> Tic-Tac-Toe<Board/></div>);
};

ReactDom.render(<Game />,document.getElementById('root'));

function calculateWinner(squares){  
 let winning_combos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
 ]
 for(let i=0; i<winning_combos.length; i++){
  let winning_row = winning_combos[i]
  let p1 = winning_row[0]
  let p2 = winning_row[1]
  let p3 = winning_row[2]
  
  if (squares[p1] && squares[p1]==squares[p2] && squares[p2]==squares[p3] && squares[p3]==squares[p1]) {
    // alert(`winner! player  ${squares[p1]} has won the game`);
    return squares[p1];
  }

 }
}