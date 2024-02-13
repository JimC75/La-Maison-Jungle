export default function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType = careType === 'light' ? '☀️' : '💧';
    const type = careType === 'light' ? 'de lumière' : "d'arrosages";
    let adjectif = "";
    switch (scaleValue) {
        case 1:
            adjectif = "peu";
            break;
        case 2:
            adjectif = "modérément";
            break;
        case 3:
            adjectif = "beaucoup";
            break;
    }


    return (
        <div>
            {range.map((rangeElem) => scaleValue >= rangeElem &&
                <span key={rangeElem.toString()} onClick={() => { alert(`Cette plante requiert ${adjectif} ${type}`) }}>{scaleType}</span>
            )}
        </div>
    )
}