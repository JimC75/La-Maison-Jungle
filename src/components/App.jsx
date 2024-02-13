import Banner from '../components/Banner'
import logo from '../assets/leaf+1.png'
import Cart from '../components/Cart'
import ShoppingList from '../components/ShoppingList'
import QuestionForm from './QuestionForm'
import Footer from './Footer'

export default function App() {

  return (
    <>
      <Banner>
        <img src={logo} alt='La maison jungle' className='lmj-logo' />
        <h1 className='lmj-title'>La maison jungle</h1>
      </Banner>
      <Cart />
      <ShoppingList />
      <QuestionForm />
      <Footer />
    </>
  )
}
