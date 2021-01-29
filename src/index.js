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
  // dividir en 3 listas
  var row1 = squares.slice(0,3);
  var row2 = squares.slice(3,6);
  var row3 = squares.slice(6,9);
  var matrix = [row1,row2,row3];

  matrix.forEach(myFunction);
  function myFunction(row){
    var col1 = row[0];
    var col2 = row[1];
    var col3 = row[2];
    if (col1 && col1 === col2 && col2 === col3) {
      if (col1 === 'O'){
        return 'O';
      }else{
        return 'X';
      }

    }
  }
}