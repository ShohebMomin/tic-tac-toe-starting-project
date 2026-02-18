import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log"
import { WINNING_COMBINATIONS } from "./winning-combination"
import GameOver from "./Components/GameOver"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
];

function derivedActivePlayer(gameTurns) {
  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  // const [activePlayer, setActivePlayer] = useState('X') //lifting state-up
  const [players, setPlayers] = useState({
    X: "Player 1",
    O: "Player 2"
  });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = derivedActivePlayer(gameTurns);

  let gameBoard = [...initialGameBoard].map(array => [...array]);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];
    if (firstSquareSymbol && firstSquareSymbol === secondSquareSymbol && firstSquareSymbol === thirdSquareSymbol) {
      winner = players[firstSquareSymbol];
    }
  }

  let currentPlayer = 'X';
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = 'O';
  }

  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(rowIndex, colIndex) {
    // setActivePlayer((currActivePlayer) => (currActivePlayer === "X" ? "O" : "X"))
    setGameTurns((prevTurns) => {
      const currentPlayer = derivedActivePlayer(prevTurns)
      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer }, ...prevTurns]
      return updatedTurns;
    })
  }

  function handleRastart() {
    setGameTurns([]);
  }

  function handlePlayerNameChange(symbol, newName) {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <span>
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} onNameChange={handlePlayerNameChange} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} onNameChange={handlePlayerNameChange} />
          </ol>
          {(winner || hasDraw) && <GameOver winner={winner} onRestart={handleRastart} />}
          <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
        </span>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
