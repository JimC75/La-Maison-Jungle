import CareScale from './CareScale'

export default function PlantItem({ name, cover, id, light, water }) {
    return (
        <li key={id} className='lmj-plant-item'>
            <img src={cover} alt={`${name} cover`} className='lmj-plant-item-cover' />
            <h3>{name}</h3>
            <div>
                <CareScale scaleValue={light} careType="light" />
                <CareScale scaleValue={water} careType="water" />
            </div>
        </li>)
}