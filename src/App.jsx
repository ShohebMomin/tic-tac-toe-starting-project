import { useState } from "react"
import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"

function App() {
const [activePlayer, setActivePlayer] = useState('X')

function handleSelectSquare(){
  setActivePlayer((currActivePlayer) => currActivePlayer === "X" ? "O" : "X")
}
  return (
    <main>
      <div id="game-container">
        <span>
          <ol id="players" className="highlight-player">
            <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"}  />
            <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"}/>
          </ol>
          <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
        </span>
      </div>
    </main>
  )
}

export default App
