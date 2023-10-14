import Link from "next/link"
import Layout from "../components/layout"
import Guitar from "../components/guitar"
import styles from "../styles/grid.module.css"


export default function Shop({guitars}) {


  return (
    <Layout
    title={'Virtual Shop'}
    description={'Virtual Shop, sell guitars, instruments and more'}
    >
        <main className="conteiner">
          <h1 className="heading">Our collection</h1>
        <div className={styles.grid}>
            {guitars?.map(guitar =>(
              <Guitar
                  key={guitar.id}
                  guitar={guitar.attributes}
          />
          ))}
        </div>

          
        </main>
    
    </Layout>
    
  )
}

export async function getServerSideProps(){
  const  answer  = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/guitarras?populate=image`)
  const {data: guitars} = await answer.json()
  return {
    props: {
      guitars
    }
  }

}