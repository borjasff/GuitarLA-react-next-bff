import Image from "next/image"
import logo from "../public/img/logo.svg"
import Link from 'next/link'
import styles from '../styles/header.module.css'
// import for show the page we are actually
import { useRouter } from "next/router"


export default function Header() {

  //
const router = useRouter();
console.log(router)

  return (
    <header className={styles.header}>
        <div className={`conteiner ${styles.bar}`}>
          <Link href={'/'}>
            <Image src="/img/logo.svg" width={300} height={40} alt="image logo"/>
          </Link>
            

            <nav className={styles.navegation}>
            <Link legacyBehavior href="/" className="link">
              <a className={router.pathname === '/' ? styles.active: ''}>
              Home  
              </a>
            </Link>
            <Link legacyBehavior href="/us">
              <a className={router.pathname === '/us' ? styles.active: ''}>
                About Us 
              </a>
            </Link>
            <Link legacyBehavior href="/blog">
              <a className={router.pathname === '/blog' ? styles.active: ''} >
                Blog
              </a>
            </Link>
            <Link legacyBehavior href="/shop">
              <a className={router.pathname === '/shop' ? styles.active: ''}>
                Shop 
              </a>
            </Link>
            <Link legacyBehavior href="/cart" className="link">
              <a className={router.pathname === '/cart' ? styles.active: ''}>
              <Image width={30} height={25} src="/img/carrito.png" alt="Image cart"/> 
              </a>
            </Link>
            </nav>
        </div>
    </header>
  )
}
