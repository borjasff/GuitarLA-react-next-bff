import '@/styles/globals.css'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }) {


  const cartLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []
  const [cart, setCart] = useState(cartLS) 
  const [pageReady, setPageReady] = useState(false)


  useEffect(() => {
    setPageReady(true)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCart = guitar => {
    // verifycate if the guitar is into the cart
    if(cart.some( guitarState =>  guitarState.id === guitar.id )) {
        // Update quantity
        const cartUpdate = cart.map( guitarState => {
            if( guitarState.id === guitar.id ) {
                guitarState.cantidad = guitar.quantity;
            } 
            return guitarState;
        });
        // Asign the array
        setCart([...cartUpdate]);
        localStorage.setItem('cart', JSON.stringify( cart ));
    } else {
        // If dont exist, create new
        setCart([...cart, guitar]);
        localStorage.setItem('cart', JSON.stringify( cart ));
    }
}

const deleteProduct = id => {
    const cartUpdate = cart.filter( product => product.id != id)
    setCart(cartUpdate)
    window.localStorage.setItem('cart', JSON.stringify( cart ));
}

const updateQuantity = guitar => {
  const cartUpdate = cart.map( guitarState => {
    if(guitarState.id === guitar.id ) {
      guitarState.quantity = parseInt( guitar.quantity )
    } 
    return guitarState
  })
  setCart(cartUpdate)
  window.localStorage.setItem('carrito', JSON.stringify( cart ));
}


  return pageReady ? <Component {...pageProps}
    cart={cart}
    addCart={addCart}
    deleteProduct={deleteProduct}
    updateQuantity={updateQuantity}
  
  /> : null
}
