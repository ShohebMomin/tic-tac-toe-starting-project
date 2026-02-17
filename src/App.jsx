import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"
import Log from "./Components/Log"

function App() {
  const [activePlayer, setActivePlayer] = useState('X') //lifting state-up
  const [gameTurns, setGameTurns] = useState([]);

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => (currActivePlayer === "X" ? "O" : "X"))
    setGameTurns((prevTurns) => {
      let currentPlayer = 'X';

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = 'O';
      }

      const updatedTurns = [{ square: { row: rowIndex, col: colIndex }, player: currentPlayer}, ...prevTurns ]
      return updatedTurns;
    })
  }


  return (
    <main>
      <div id="game-container">
        <span>
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
        </span>
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App
