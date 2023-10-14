import Image from "next/image"
import Link from "next/link"
import styles from "../styles/guitars.module.css"

export default function Guitar({guitar}) {
  const { description, image, name, price, url} = guitar
  return (
    <div className={styles.guitar}>
      <Image src={image.data.attributes.formats.medium.url} alt={`image guitar ${name}`} width={300} height={600} />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>{price}</p>
        
        <Link href={`/guitarras/${url}`}>
          <a className={styles.link}>Show Product</a>
        </Link>
      </div>
    </div>
  )
}
