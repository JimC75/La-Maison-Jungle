import { useState } from "react";

export default function Categories({ categories, updateSelectedCat }) {
    const [selectValue, updateSelectValue] = useState("");
    function setCategory(cat) {
        updateSelectedCat(cat)
    }
    function setSelectValue(value) {
        updateSelectValue(value);
        setCategory(value);
    }
    return (
        <div>
            <label>Catégories</label>
            <select name="categories" value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
                <option value="" key="all">Toutes</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}> {cat}</option>
                ))}
            </select>
        </div >

    )
}