import React, { useState } from 'react';
import ReactDom from 'react-dom';
// importar estilos
import './index.css';

// componente usando clases
// class Game extends React.Component {
//   render(){
//     return (<div>Game</div>);
//   }
// };

// componenete usando funciones
// function Game() {
//   return <h2>Hi, I am also a Car!</h2>;
// }
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

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div style={{backgroundColor: 'skyblue',margin:10,padding:10}}>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(1)}{renderSquare(2)}{renderSquare(3)}
      </div>
      <div className="board-row">
        {renderSquare(4)}{renderSquare(5)}{renderSquare(6)}
      </div>
      <div className="board-row">
        {renderSquare(7)}{renderSquare(8)}{renderSquare(9)}
      </div>
    </div>
  );
};

const Game = () => {
  return (<div className="game"> Tic-Tac-Toe<Board/></div>);
};

ReactDom.render(<Game />,document.getElementById('root'));