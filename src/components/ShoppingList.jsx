import { plantList } from '../datas/plantList'

export default function ShoppingList() {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    return <div className='lmj-shop'>
        <ul>
            <h2>Categories</h2>
            {categories.map((c, i) => (
                <li key={i}>{c}</li>
            ))}
        </ul>
        <ul className='lmj-plant-list'>
            <h2>Plants</h2>
            {plantList.map((plant, index) => (
                <li key={index} className='lmj-plant-item'>
                    {plant.name}
                    {plant.isBestSale && <span>🔥</span>}
                    {/* {a && b} == {a ? b : null} */}
                    {plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
                </li>
            )
            )}
        </ul>
    </div>
}