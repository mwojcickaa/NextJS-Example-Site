import Link from 'next/link'
import { Grid } from "@mui/material"
import Image from "@/components/Image/Image"
import useRouterHref from "@/hooks/useRouterHref"
import CartWithNumber from "./CartWithNumber/CartWithNumber"
import style from './Header.module.sass'

export default function Header(props: HeaderProps) {
    const isHomePage = useRouterHref("/")
    const isCartPage = useRouterHref("/cart")
    console.log(props.logoSrc)
    const LogoImage = () => (
        <Image
            alt={props.logoAlt}
            src={props.logoSrc}
        />
    )

    return (
        <Grid
            component="header"
            container
            className={style.grid}
        >
            {
                isHomePage
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
                isCartPage
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