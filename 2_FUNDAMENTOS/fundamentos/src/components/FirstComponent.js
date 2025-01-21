//arquivo de estilo - exemplo de comentário

import MeuComponente from "./MeuComponente";

const FirstComponent = () => {
    //essa função faz isso
    return (
        <div>
            {/*exemplo de comentário no JSX*/}
            <h1>Meu primeiro componente</h1>
            <p className="teste">Meu texto</p>
            <MeuComponente />
        </div>
    );
};

export default FirstComponent;
