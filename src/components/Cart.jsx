

export default function Cart() {
    const plants = [
        {
            "name": "Monstera",
            "price": 8
        },
        {
            "name": "Lierre",
            "price": 10
        },
        {
            "name": "Bouquet de Fleurs",
            "price": 15
        }
    ]
    const cartList = plants.map((p, index) => {
        return (<li key={index}>
            {p.name + ' = ' + p.price + '€'}
        </li>)
    })
    let total = 0;
    plants.forEach((p) => {
        total += p.price
    })
    return (
        <div className="lmj-cart">
            <ul>
                {cartList}
            </ul>
            <p>Total = {total}</p>
        </div>
    )
}