import {useState} from "react";

const ListRender = () => {
    const [list] = useState(["Bola", "Raquete", "Tênis", "Bastão"]);

    const[products, setProducts] = useState ([
        {id: 1, model: "Run", size: 41},
        {id: 2, model: "Tracker", size: 40},
        {id: 3, model: "Fast", size: 39},

    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevProducts) => {

            return prevProducts.filter((product) => randomNumber !== product.id)

        })
    }

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
            <button onClick={deleteRandom}>Delete random product</button>
        </div>
    );
}

export default ListRender