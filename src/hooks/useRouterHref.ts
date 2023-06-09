import { useRouter } from 'next/router'

export default function useRouterHref(href: string) {
    const { asPath } = useRouter()
    return asPath == href
}