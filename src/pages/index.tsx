import Header from "@/components/Header/Header"
import Banner from "@/components/Banner/Banner"
import ShopGallery from "@/components/ShopGallery/ShopGallery"
import Footer from "@/components/Footer/Footer"
import style from "./index.module.sass"

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Banner />
        <br />
        <ShopGallery />
      </main>
      <Footer />
    </>
  )
}
