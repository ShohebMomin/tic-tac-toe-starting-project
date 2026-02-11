import Player from "./Components/Player"
function App() {


  return (
    <main>
      <div id="game-container">
        <span>
          <ol id="players">
            <Player name="Player 1" symbol="X" />
            <Player name="Player 2" symbol="O" />
          </ol>
          Game Board
        </span>
      </div>
    </main>
  )
}

export default App
