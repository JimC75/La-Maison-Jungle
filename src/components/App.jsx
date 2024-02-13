import Banner from './Banner'
import logo from '../assets/leaf+1.png'
import Cart from './Cart'
import ShoppingList from './ShoppingList'
import Footer from './Footer'
import { useState, useEffect } from 'react'

function App() {
  const newCart = JSON.parse(localStorage.getItem('cart'))
  const [cart, updateCart] = useState(newCart);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
    console.log(cart)
  }, [cart]);
  return (
    <div>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <div className='lmj-layout-inner'>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </div>
      <Footer />
    </div>
  )
}

export default App