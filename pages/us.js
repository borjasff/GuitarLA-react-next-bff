import Link from "next/link"
import Layout from "@/components/layout"
import Image from "next/image"
import styles from "../styles/us.module.css"

export default function Us() {
  return (
    <Layout
    title={'Us'}
    description={'About US, GuitarLA, Music Shop'}
    >
      <main className="conteiner">
        <h1 className="heading">About Us</h1>

        <div className={styles.content} >
          <Image src="/img/us.jpg" width={1000} height={800} alt="Image about us"/>

          <div>
            <p>In feugiat lacus tortor, eget porta quam iaculis sed. Fusce non enim vitae leo hendrerit lacinia molestie maximus purus. Nulla mi sapien, vestibulum id magna vitae, iaculis porta ante. Phasellus dui ex, mollis sed pharetra vitae, porta sed ante. Duis quis blandit nulla, viverra porta libero. Cras elementum erat ac metus sollicitudin convallis. Pellentesque vehicula lobortis elit, non venenatis felis mollis quis. Aliquam condimentum mattis odio vel porttitor.</p>
            <p>Donec porttitor risus nisi, vitae vehicula turpis ultrices non. Vivamus semper eget nulla laoreet molestie. Maecenas mattis, turpis eu ornare placerat, tortor nisl pharetra eros, ac consequat sapien risus nec mauris. Aliquam lobortis consequat massa. Pellentesque cursus ipsum leo, ac iaculis erat aliquam vel. Aenean ac augue dignissim, volutpat nunc non, sodales est. Suspendisse potenti.</p>
          </div>
        </div>

      </main>
    
    </Layout>
    
  )
}
