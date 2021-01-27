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

  const handleClickEvent = (i) =>{
    // make a copy if squares state array
    const newSquares = [...squares];
    // mutate the copy setting the i-th element to X
    newSquares[i] = 'X';
    // call the setSquares function iwth the mutated copy
    setSquares(newSquares);
  };
  const renderSquare = (i) =>{
    return ( 
      <Square value={squares[i]}
        onClickEvent={()=>handleClickEvent(i)}
      />
    );
  };

  return (
    <div style={{backgroundColor: 'skyblue',margin:10,padding:10}}>Board
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
  return (<div className="game"> Game<Board/></div>);
};

ReactDom.render(<Game />,document.getElementById('root'));