import Image from "next/image"
import Layout from "@/components/layout"
import { formatDate} from "../../utils/helpers"
import styles from "../../styles/blog.module.css"

export default function Post ({post}) {
    const {content, image, title, publishedAt} = post[0].attributes
  return (
    <Layout
        title={title}
    >
        <article className={`${styles.post} ${styles['mt-3']}`}>
            <Image src={image.data.attributes.url} alt={`image blog ${title}`} width={1000} height={700} />
            <div className={styles.content}>
            <h3>{title}</h3>
            <p className={styles.date}>{formatDate(publishedAt)}</p>
            <p className={styles.text}>{content}</p>
            </div>
        </article>
    </Layout>
  )
}


export async function getServerSideProps({query: {url}}) { 
        const answer = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?filters[url]=${url}&populate=image`)
        const {data: post} = await answer.json()
    return{
        props: {
            post
        }
    }
}