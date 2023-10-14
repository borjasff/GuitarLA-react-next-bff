import Guitar from "../components/guitar"
import Layout from "../components/layout"
import styles from "../styles/grid.module.css"
import Post from "../components/post"
import Course from "../components/course"


export default function Home({guitars, posts, course}) {
    console.log(course)
  return (
    <>
      <Layout
        title={'Inicio'}
        description={'Music blog, Guitars sell and more'}
      >
        <main className="conteiner">
          <h1 className="heading">Our colecction</h1>

          <div className={styles.grid}>
              {guitars?.map(guitar =>(
                <Guitar
                    key={guitar.id}
                    guitar={guitar.attributes}
                />
              ))}
          </div>
        </main>

        <Course
          course={course}
        />

        <section className="conteiner">
                  <h2 className="heading">Blog</h2>

                  <div className={styles.grid}>
                      {posts.map(post => (
                          <Post
                            key={post.id}
                            post={post.attributes}
                          />
                      ))}
                  </div>
        </section>

      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const urlGuitars = `${process.env.NEXT_PUBLIC_API_URL}/guitarras?populate=image`
  const urlPosts = `${process.env.NEXT_PUBLIC_API_URL}/posts?populate=image`
  const urlCourse = `${process.env.NEXT_PUBLIC_API_URL}/course?populate=image`

  const [ reGuitars, rePosts, reCourse] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlPosts),
    fetch(urlCourse)
  ])
  const [{data: guitars}, {data: posts}, {data: course}] = await Promise.all([
    reGuitars.json(),
    rePosts.json(),
    reCourse.json()
  ])
  return {
    props:{
      guitars,
      posts,
      course
    }
  }
}