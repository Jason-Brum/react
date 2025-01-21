const TemplateExpression =() => {

    const name = "Jason";
    const data = {
        idade: 47,
        trabalho: "Programador",

    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como: {data.trabalho} </p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>


    )



}

export default TemplateExpression