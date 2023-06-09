import Link from 'next/link'
import { Grid } from "@mui/material"
import Image from "@/components/Image/Image"
import useRouterHref from "@/hooks/useRouterHref"
import CartWithNumber from "./CartWithNumber/CartWithNumber"
import style from './Header.module.sass'

export default function Header() {
    const LogoImage = () => (
        <Image
            alt="Company logo in header"
            src="/logo.png"
        />
    )

    return (
        <Grid
            component="header"
            container
            className={style.grid}
        >
            {
                useRouterHref("/")
                    ?
                    <LogoImage />
                    :
                    <Link
                        href="/"
                        className={style.logo}
                    >
                        <LogoImage />
                    </Link>
            }
            {
                useRouterHref("/cart")
                    ?
                    <CartWithNumber />
                    :
                    <Link href="/cart">
                        <CartWithNumber />
                    </Link>
            }
        </Grid>
    )
}