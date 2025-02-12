import { useState } from "react"


function ConditionalRender() {
    const [x] = useState (false);

    const [name] = useState("João")

  return (
    <div>
        <h1>Isso será exibido?</h1>
        {x && <p>Se x for true, sim! </p> }
        {!x && <p>Agora X é falso </p> }
        {name === "João" ? (
            <div> <p>O nome é João</p>
            </div>
        ) : (
            <div> <p>Nome não encontrado</p> </div>
        )}

    </div>
  )
}

export default ConditionalRender