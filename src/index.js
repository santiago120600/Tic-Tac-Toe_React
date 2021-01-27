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
const Square = () => {
  return ( 
    <div className="square">X</div>
  );
};

const Board = () => {
  return (
    <div style={{backgroundColor: 'skyblue',margin:10,padding:10}}>Board
      <div className="board-row">
        <Square/><Square/><Square/>
      </div>
      <div className="board-row">
        <Square/><Square/><Square/>
      </div>
      <div className="board-row">
        <Square/><Square/><Square/>
      </div>
    </div>
  );
};

const Game = () => {
  return (<div className="game"> Game<Board/></div>);
};

ReactDom.render(<Game />,document.getElementById('root'));