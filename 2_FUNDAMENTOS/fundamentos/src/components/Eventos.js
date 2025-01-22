const Eventos = () => {
    const handleMyevent = () => {
        console.log("Ativou o evento")
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando isso</h1>

        } else {
            return <h1>Ou renderizar isso</h1>

        }
    }

    return(
        <div>
            <div>
                <button onClick={handleMyevent}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}

        </div>
    )
}

export default Eventos;