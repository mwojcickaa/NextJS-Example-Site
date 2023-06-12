import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { store, persistor } from '@/store/store'
import Header from "@/components/Header/Header"
import Banner from "@/components/Banner/Banner"
import ShopGallery from "@/components/ShopGallery/ShopGallery"
import Footer from "@/components/Footer/Footer"
import style from "./index.module.sass"

export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header />
        <main className={style.main}>
          <Banner />
          <br />
          <ShopGallery />
        </main>
        <Footer />
      </PersistGate>
    </Provider>
  )
}
