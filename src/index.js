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
    <div style={{backgroundColor: 'gold',margin:10,padding:20}}>Square</div>
  );
};

const Board = () => {
  return (
    <div style={{backgroundColor: 'skyblue',margin:10,padding:10}}>Board<Square/></div>
  );
};

const Game = () => {
  return (<div style={{backgroundColor: 'salmon',margin:10,padding:10}}> Game<Board/></div>);
};

ReactDom.render(<Game />,document.getElementById('root'));