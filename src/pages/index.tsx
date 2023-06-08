import Header from "@/components/Header/Header"
import Banner from "@/components/Banner/Banner"
import Footer from "@/components/Footer/Footer"
import style from "./index.module.sass"

export default function Home() {
  return (
    <>
      <Header />
      <main className={style.main}>
        <Banner />
      </main>
      <Footer />
    </>
  )
}
