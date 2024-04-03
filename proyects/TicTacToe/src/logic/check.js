  import { combGanadoras } from '../constantes'
  //determinar el ganador
  export const checkWinner = (boardToCheck) => {
    for (const i of combGanadoras) {
      const [ a, b, c ] = i;
      if (
        boardToCheck[a] &&
        boardToCheck[a] == boardToCheck[b] &&
        boardToCheck[a] == boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    return null
  };
 export const chekarEmpata = (newBoard)=>{
    return newBoard.every(item => item !== null)

  }
