// children tendra 'X' o 'O',
// updateBoard actualizar el tablero al hacer click
// index : indice del cuadrado a actualizar
// eslint-disable-next-line react/prop-types
export const options = {
    X: "✖️",
    O: "🔴",  
  };
//combinaciones ganadoras

export const combGanadoras = [
    //horizontales
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //verticales
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //diagonales
    [0, 4, 8],
    [2, 4, 6],
  ];
