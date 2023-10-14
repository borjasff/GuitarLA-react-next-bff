import Image from "next/image"
import Link from "next/link"
import { formatDate } from "../utils/helpers"
import styles from "../styles/blog.module.css"

export default function Post({post}) {
    const{content, image, title, url, publishedAt} = post
  return (
    <article>

      <Image src={image.data.attributes.formats.medium.url} alt={`image blog ${title}`} width={600} height={400} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.abstract}>{content}</p>
        <Link href={`/blog/${url}`}>
          <a className={styles.link}>Show Post</a>
        </Link>
      </div>
    </article>
  )
}