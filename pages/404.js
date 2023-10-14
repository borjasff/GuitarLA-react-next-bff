import Layout from "@/components/layout"
import Link from "next/link"

export default function Page404() {
  return (
    <Layout
        title="Page Not Found"
    >
        <p className="error">Page not found</p>
        <Link href="/">
            <a className="error-link">
                Go Home
            </a>
        </Link>
    </Layout>
  )
}
