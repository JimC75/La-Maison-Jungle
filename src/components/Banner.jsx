import logo from '../assets/leaf+1.png'

export default function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title.toUpperCase()}</h1>
        </div>
    )
}