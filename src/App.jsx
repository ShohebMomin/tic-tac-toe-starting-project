import GameBoard from "./Components/GameBoard"
import Player from "./Components/Player"

function App() {


  return (
    <main>
      <div id="game-container">
        <span>
          <ol id="players">
            <Player initialName="Player 1" symbol="X" />
            <Player initialName="Player 2" symbol="O" />
          </ol>
          <GameBoard/>
        </span>
      </div>
    </main>
  )
}

export default App
