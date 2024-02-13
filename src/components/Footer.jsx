import { useState } from 'react'

function Footer() {
    const [inputValue, setInputValue] = useState('')
    function checkEmail(value) {
        console.log(value)
        if (value.includes('@')) {
            return ("Votre e-mail est valide")
        }
        return ("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
    }

    return (
        <footer className='lmj-footer'>
            <div className='lmj-footer-elem'>
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
            <textarea placeholder='Votre e-mail' onChange={(e) => { setInputValue(e.target.value) }} onBlur={() => { alert(checkEmail(inputValue)) }}></textarea>
        </footer>
    )
}

export default Footer