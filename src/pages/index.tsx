import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ToastContainer } from "react-toastify"
import { store, persistor } from '@/store/store'
import Header from "@/components/Header/Header"
import Banner from "@/components/Banner/Banner"
import ShopGallery from "@/components/ShopGallery/ShopGallery"
import Footer from "@/components/Footer/Footer"
import 'react-toastify/dist/ReactToastify.css'
import style from "./index.module.sass"


export default function Home() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Header
          logoAlt="Company logo in header"
          logoSrc="/logo.png"
        />

        <main className={style.main}>
          <Banner
            alt="Banner image. Three spoons with spices"
            src="/banner.jpg" />
          <br />
          <ShopGallery />
        </main>

        <Footer
          logoAlt="Company logo in footer"
          logoSrc="/logo.png"
        />

        <ToastContainer
          position="top-left"
          autoClose={1750}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover={false}
          theme="light"
        />
      </PersistGate>
    </Provider >
  )
}
