import { useEffect, useState } from "react"
import Layout from "../components/layout"
import Image from "next/image"
import styles from "../styles/cart.module.css"

export default function Cart({cart, updateQuantity, deleteProduct}) {

  const [total, setTotal] = useState(0)

  useEffect(() => {
      const totalResult = cart.reduce( (total, product) => total + (product.quantity * product.price), 0)
      setTotal(totalResult)
  },[cart])

  return (
    <Layout title="shoppingCart">
      <main className="conteiner">
        <h1 className="heading">Shopping Cart</h1>
        <div className={styles.content}>
          <div className={styles.cart}>
            <h2>Articles</h2>

            {cart.length === 0 ? 'Cart empty': (
              cart.map(product => (
                <div key={product.id} className={styles.product}>
                  <div>
                    <Image src={product.image} width={150} height={360} alt={product.name} />
                  </div>
                  <div>
                        <p className={styles.name}>{product.name}</p>

                        <div className={styles.quantity}>
                          <p>Quantity:</p>
                          <select
                          className={styles.select}
                          onChange={e=> updateQuantity({
                            id: product.id,
                            quantity: e.target.value
                          })}
                          value={product.quantity}
                          >
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                         </select>
                        </div>

                        <p className={styles.price}>$<span>{product.price}</span></p>
                        <p className={styles.subtotal}>Subtotal: $<span>{product.quantity * product.price}</span></p>
                  </div>

                  <button className={styles.delete} type="button" onClick={() => deleteProduct(product.id)}>X</button>
                </div>
              ))
            )}

          </div>
        
        <aside className={styles.abstract}>
          <h3>Order Summary</h3>
          <p>Total Payable: ${total} </p>
        </aside>

        </div>
      </main>

    </Layout>
  )
}
