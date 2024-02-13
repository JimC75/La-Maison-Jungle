export default function Filter({ maxPrice, updateMaxPrice }) {
    return (
        <div className="lmj-categories">
            <div>
                <input type="range" id="price" name="price" min="0" max="25" step="5" onChange={(e) => updateMaxPrice(e.target.value)} />

                <p>Prix Max : <output id="value">{maxPrice}€</output></p>
            </div>
        </div >
    )
}