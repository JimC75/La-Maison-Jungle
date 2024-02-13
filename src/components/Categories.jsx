export default function Categories({ categories, selectedCat, updateSelectedCat }) {
    return (
        <div className="lmj-categories">
            <label>Catégories</label>
            <select
                name="categories"
                value={selectedCat}
                className='lmj-categories-select'
                onChange={(e) => updateSelectedCat(e.target.value)}
            >
                <option value="" key="all">Toutes</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}> {cat}</option>
                ))}
            </select>
        </div >

    )
}