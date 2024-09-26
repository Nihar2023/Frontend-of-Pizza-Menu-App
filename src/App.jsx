import { useState } from 'react'
import './App.css'
import pizza_array from './data.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
          <div className='header'><Header/></div>
          <div className='info'>
            {pizza_array.map(pizza => (
              <Menu
                key={pizza.name} // Adding a key prop
                imageName={pizza.img}
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.recipe}
              />
            ))}
          </div>
          <Footer/>
      </div>
    </>
  )
}

function Header(){
  return (
    <>
    <h1 style={{textTransform:"uppercase"}}>Fast React Pizza Co.</h1>
    </>
  )
}
function Menu(props){
    return(
      <>
          <div className='pizza'>
            <img src={props.imageName} alt="img" className='img'/>
            <h3>{props.name}</h3>
            <p><b>price</b>:{props.price}</p>
            <p><b>Recipe</b> : {props.ingredients}</p>
          </div>
      </>
    )
}
function Footer(){
  return(
    <>
      <div className='footer-div'>
        <footer>
          <button className='order-btn'>Order</button>
          </footer>

      </div>
    </>
  )
}
export default App
