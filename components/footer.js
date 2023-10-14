import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`conteiner ${styles.content}`}>
            <nav className={styles.navegation}>
                <Link legacyBehavior href="/" className="link">
                  Home
                </Link>
                <Link legacyBehavior href="/us">
                  About Us 
                </Link>
                <Link legacyBehavior href="/blog">
                  Blog
                </Link>
                <Link legacyBehavior href="/shop">
                  Shop
                </Link>

            </nav>

            <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>

    </footer>
  )
}
