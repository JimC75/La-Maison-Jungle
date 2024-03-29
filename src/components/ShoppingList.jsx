import { plantList } from '../datas/plantList'
import Categories from './Categories'
import PlantItem from './PlantItem'
import Filter from './Filter'
import { useState } from 'react'

function ShoppingList({ cart, updateCart }) {

    const [selectedCat, updateSelectedCat] = useState("");
    let plantsFromSelectedCat = [];
    if (selectedCat !== "") {
        plantsFromSelectedCat = plantList.filter((plant) => plant.category === selectedCat)
    }
    else {
        plantsFromSelectedCat = plantList;
    }

    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    const [maxPrice, updateMaxPrice] = useState(25)

    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)

        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories categories={categories} selectedCat={selectedCat} updateSelectedCat={updateSelectedCat} />
            <Filter maxPrice={maxPrice} updateMaxPrice={updateMaxPrice} />
            <ul className='lmj-plant-list'>
                {plantsFromSelectedCat.map(({ id, cover, name, water, light, price }) => (
                    price <= maxPrice &&
                    <div key={id}>
                        <PlantItem
                            cover={cover}
                            name={name}
                            water={water}
                            light={light}
                            price={price}
                        />
                        <button onClick={() => addToCart(name, price)}>Ajouter</button>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList