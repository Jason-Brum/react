//CSS
import './App.css';

// React
import { useCallback, useEffect, useState } from 'react';

// data
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/Game';

const stages = [
  {id: 1, name: "start"},
  {id: 2, name: "game"},
  {id: 3, name: "end"},
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  //starts the game
  const startGame = () => {
    setGameStage(stages[1].name);
  }

  console.log(words);

  //process the letter input
  const verifyletter = () => {
    setGameStage(stages[2].name);
  }

  return (
    <div className="App">
     {gameStage === "start" && <StartScreen startGame = {startGame} />}
     {gameStage === "game" && <Game verifyletter = {verifyletter} />}
     {gameStage === "end" && <GameOver/>}
    </div>
  );
}

export default App;
