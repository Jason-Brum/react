import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Bola", "Raquete", "Tênis", "Bastão"]);

    const[products] = useState ([
        {id: 1, model: "Run", size: 41},
        {id: 2154, model: "Tracker", size: 40},
        {id: 1568, model: "Fast", size: 39},

    ]);
    return (
        <div>
            <ul>
                {list.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <ul>
                {products.map((product) => (
                   <li key = {product.id}>
                        {product.model} - {product.size}
                   </li>

                ))}
            </ul>
        </div>
    );
}

export default ListRender