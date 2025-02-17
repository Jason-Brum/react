import './StartsScreen.css';


const StartScreen = ({startGame}) => {
    return  <div className="start">
        <h1>Roletrando</h1>
        <p>Clique no botão abaixo para começar a jogar</p>
        <button onClick = {startGame} className="start-button">
            Começar o jogo
        </button>
    </div>;
}

export default StartScreen;
