import { useCallback, useEffect, useState } from "react"; //useState Guarda os estados do jogo, como a palavra escolhida, a pontuação, as letras erradas etc.
//useEffect é um hook que permite executar efeitos colaterais em componentes funcionais. Ele é executado após a renderização do componente. Verifica, por exemplo, se o jogador ganhou ou perdeu o jogo.
//useCallback é um hook que retorna uma versão memorizada da função passada. Ele é útil para evitar a recriação de funções em cada renderização do componente.

// components //Importa os componentes do jogo.

import StartScreen from "./components/StartScreen"; //Tela inicial do jogo.
import Game from "./components/Game"; //O jogo em si. Onde o jogador tenta adivinhar a palavra.
import GameOver from "./components/GameOver"; //Tela de fim de jogo.

// styles //Importa o arquivo de estilos do jogo.
import "./App.css"; 

// data //Importa a lista de palavras do jogo.
import { wordsList } from "./data/words";

const stages = [ //Array que contém os estágios do jogo.
  { id: 1, name: "start" }, //Tela inicial do jogo.
  { id: 2, name: "game" }, //O jogo em si.
  { id: 3, name: "end" }, //Tela de fim de jogo.
];

function App() { //Função principal do componente App. O useState aqui é utilizado para guardar os estados do jogo. É um hook que permite adicionar o estado do React a um componente funcional.
  const [gameStage, setGameStage] = useState(stages[0].name); //Guarda o estágio atual do jogo. Qual estágio o jogo está agora? (Início, jogo ou fim).
  const [words] = useState(wordsList); //Guarda a lista de palavras do jogo.

  const [pickedWord, setPickedWord] = useState(""); //Guarda a palavra aleatória escolhida pelo jogo.
  const [pickedCategory, setPickedCategory] = useState(""); //Guarda a categoria da palavra escolhida.
  const [letters, setLetters] = useState([]); //Guarda as letras da palavra escolhida.
  
  const [guessedLetters, setGuessedLetters] = useState([]); //Guarda as letras corretas adivinhadas pelo jogador.
  const [wrongLetters, setWrongLetters] = useState([]); //Guarda as letras erradas.
  const [guesses, setGuesses] = useState(3); //Guarda o número de tentativas restantes.
  const [score, setScore] = useState(0); //Guarda a pontuação do jogador.

  console.log(words); //Exibe a lista de palavras no console.

  const pickWordAndCategory = useCallback(() => { //Função que escolhe uma palavra e uma categoria aleatória.
    // pick a random category
    const categories = Object.keys(words); //Pega as categorias das palavras.
    const category = //Escolhe uma categoria aleatória.
      categories[Math.floor(Math.random() * Object.keys(categories).length)]; //Escolhe uma categoria aleatória.

    // pick a random word
    const word = //Escolhe uma palavra aleatória da categoria escolhida.
      words[category][Math.floor(Math.random() * words[category].length)]; 

    console.log(category, word); //Exibe a categoria e a palavra escolhida no console.

    return { category, word };  //Retorna a categoria e a palavra escolhida.
  }, [words]);

  // start the game
  const startGame = useCallback(() => { //Função que inicia o jogo.
    // clear all letters
    clearLettersStates();   //Limpa todas as letras.

    // choose a word
    const { category, word } = pickWordAndCategory(); //Escolhe uma palavra e uma categoria aleatória.

    console.log(category, word); //Exibe a categoria e a palavra escolhida no console.

    let wordLetters = word.split(""); //Separa a palavra em letras.

    wordLetters = wordLetters.map((l) => l.toLowerCase()); //Transforma as letras em minúsculas.

    // console.log(category, word);

    setPickedCategory(category); //Guarda a categoria escolhida.
    setPickedWord(word); //Guarda a palavra escolhida.
    setLetters(wordLetters);  //Guarda as letras da palavra escolhida.

    setGameStage(stages[1].name); //Muda o estágio do jogo para "game", começar a jogar.
  }, [pickWordAndCategory]); //Dependências da função.

  // process letter input
  const verifyLetter = (letter) => { //Função que verifica a letra digitada pelo jogador.
    const normalizedLetter = letter.toLowerCase(); //Transforma a letra em minúscula.

    // check if letter has already been utilized
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)
    ) { //Verifica se a letra já foi utilizada, se sim, não faz nada.

      return; 
    }

    // push guessed letter or remove a chance
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]); //Adiciona a letra correta ao array de letras corretas adivinhadas.
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]); //Adiciona a letra errada ao array de letras erradas.

      setGuesses((actualGuesses) => actualGuesses - 1);
    } //Remove uma tentativa.
  };

  console.log(wrongLetters); //Exibe as letras erradas no console.

  // restart the game
  const retry = () => { //Função que reinicia o jogo.
    setScore(0); //Zera a pontuação.
    setGuesses(3); //Reinicia as tentativas.
    setGameStage(stages[0].name); //Muda o estágio do jogo para "start", tela inicial.
  };

  // clear letters state
  const clearLettersStates = () => { //Função que limpa os estados das letras.
    setGuessedLetters([]); //Limpa as letras corretas.
    setWrongLetters([]);  //Limpa as letras erradas.
  };

  // check if guesses ended
  useEffect(() => { //Hook que verifica se as tentativas acabaram. 
    if (guesses === 0) { //Se as tentativas acabaram.
      // game over and reset all states
      clearLettersStates(); //Limpa as letras.

      setGameStage(stages[2].name); //Muda o estágio do jogo para "end", fim de jogo.
    }
  }, [guesses]); 

  // check win condition
  useEffect(() => { //Hook que verifica a condição de vitória.
    const uniqueLetters = [...new Set(letters)]; //Guarda as letras únicas da palavra escolhida.

    console.log(uniqueLetters); //Exibe as letras únicas no console.
    console.log(guessedLetters); //Exibe as letras corretas no console.

    // win condition
    if (guessedLetters.length === uniqueLetters.length) { //Se o jogador acertou todas as letras da palavra.
      // add score
      setScore((actualScore) => (actualScore += 100)); //Adiciona 100 pontos à pontuação.

      // restart game with new word
      startGame(); //Reinicia o jogo com uma nova palavra.
    }
  }, [guessedLetters, letters, startGame]); //Dependências da função.

  return ( //Retorna o jogo.
    <div className="App"> //Classe do componente.
      {gameStage === "start" && <StartScreen startGame={startGame} />} //Se o estágio do jogo for "start", exibe a tela inicial.
      {gameStage === "game" && ( //Se o estágio do jogo for "game", exibe o jogo.
        <Game //Componente Game.
          verifyLetter={verifyLetter} //Função que verifica a letra digitada.
          pickedWord={pickedWord} //Palavra escolhida.
          pickedCategory={pickedCategory} //Categoria da palavra escolhida.
          letters={letters} //Letras da palavra escolhida.
          guessedLetters={guessedLetters} //Letras corretas adivinhadas.
          wrongLetters={wrongLetters} //Letras erradas.
          guesses={guesses} //Tentativas restantes.
          score={score} //Pontuação.

          />
      )}
    
      {gameStage === "end" && <GameOver retry={retry} score={score} />} //Se o estágio do jogo for "end", exibe a tela de fim de jogo.
    </div>
  );
}

export default App; //Exporta o componente App.
