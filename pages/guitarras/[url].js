import { useState } from "react" 
import Image from "next/image"
import Layout from "../../components/layout"
import styles from "../../styles/guitars.module.css"


export default function Product({guitar, addCart}) {

    const [quantity, setQuantity] = useState(0)
    const {name, description, image, price} = guitar[0].attributes

    const handleSubmit = e => {
        e.preventDefault()
        if(quantity < 1) {
            alert("Please enter a quantity")
            return
        }
        //build object for localstorage
        const guitarSelect= {
            id: guitar[0].id,
            image: image.data.attributes.url,
            name,
            price,
            quantity
        }
        //send info to context
        addCart(guitarSelect)
    }

  return (
        <Layout
           title={`Guitar ${name}`} 
        >
        <div className={styles.guitar}>
            <Image src={image.data.attributes.url} alt={`image guitar ${name}`} width={300} height={600} />

            <div className={styles.content}>
                <h3>{name}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.price}>${price}</p>

                <form onSubmit={handleSubmit} className={styles.form}>
                    <label htmlFor="quantity">Quantity:</label>
                    <select onChange={ e => setQuantity(+e.target.value)} id="quantity">
                        <option value="0">--Select--</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input 
                        type="submit" 
                        value="Add to Cart"/>
                </form>
            </div>
        </div>
        </Layout>

  )
}

//export async function getServerSideProps ({query: {url}}){
   // const answer = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?filters[url]=${url}&populate=image`)
    //const {data: guitar} = await answer.json()
    //return {
      //  props: {
        //    guitar
        //}
    //}
//}


export async function getStaticPaths (){
    const answer = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras`)
    const {data} = await answer.json()

    const paths = data.map(guitarra => ({
        params: {
            url: guitarra.attributes.url
        }
    }))
    return {
            paths,
            fallback: false //fallback for generate 404
    }
}

export async function getStaticProps ({params: {url}}){
    const answer = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?filters[url]=${url}&populate=image`)
    const {data: guitar} = await answer.json()
    return {
        props: {
            guitar
        }
    }
}