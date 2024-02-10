import { plantList } from '../datas/plantList'
import PlantItem from './Plantitem'
import cover from '../assets/monstera.jpg'

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
                <PlantItem key={index} name={plant.name} cover={cover} id={plant.id} light={plant.light} water={plant.water} />

            )
            )}
        </ul>
    </div>
}