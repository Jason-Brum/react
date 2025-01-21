const Eventos = () => {
    const handleMyevent = () => {
        console.log("Ativou o evento")
    };

    return(
        <div>
            <div>
                <button onClick={handleMyevent}>Clique aqui</button>
            </div>



        </div>
    )
}

export default Eventos;