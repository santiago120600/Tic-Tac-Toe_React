import React from 'react';
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
    <div className="square">
      {props.value}
    </div>
  );
};

const Board = () => {
  const renderSquare = (i) =>{
    return ( 
      <Square value={i}/>
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