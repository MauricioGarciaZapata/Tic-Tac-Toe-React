import { useState } from "react";
import "./App.css";
import { Square } from './components/Square.jsx'
import { Winner } from './components/WinnerFromComponent.jsx'
import { options } from './constantes'
import { checkWinner,chekarEmpata } from "./logic/check";
import confetti from "canvas-confetti";

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(options.X);
  const [gana, setGana] = useState(null); //null no hay ganador, false hay un empate

  // resetear el juego
  const reset = () =>{
    setBoard(Array(9).fill(null))
    setTurno(options.X)
    setGana(null)
  }

  // 
  const changeTurno = (index) => {
    // Solo se puede una opción en cada square
    if (board[index] ||gana) return;
    //Actualizar opciones en el tablero
    const newBoard = [...board];
    newBoard[index] = turno;
    setBoard(newBoard);

    //lineas para cambiar el turno
    let newTurno = turno == options.X ? options.O : options.X;
    setTurno(newTurno);

    //revisar si hay un ganador
    const newGanador = checkWinner(newBoard)
    if(newGanador){
      setGana(newGanador) 
      confetti()
    }
    //revisar si hay un empáte
    if(chekarEmpata(newBoard)){
      setGana(false)
      

    }
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={reset}>Empezar de nuevo</button>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} change={changeTurno}>
              {square}
            </Square>
          );
        })}
      </section>

      <section className="turn">
        <Square isSelect={turno == options.X}>{options.X}</Square>
        <Square isSelect={turno == options.O}>{options.O}</Square>
      </section>

      <Winner reset={reset} gana={gana}/>

      
    </main>
  );
}

export default App;
