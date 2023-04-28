import "../styles/globals.css"
import Layout from "../layouts/layout"
import { useEffect, useState } from "react"
import fetchCategories from "../utils/categoryProvider"

const Ecommerce = ({ Component, pageProps }) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategoriesAsync = async () => {
      const categories = await fetchCategories()
      setCategories(categories)
    }
    fetchCategoriesAsync()
  }, [])

  return (
    <Layout categories={categories}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default Ecommerce
