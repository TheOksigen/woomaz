import type {Metadata} from "next"
import type {ReactNode} from "react"
import {Poppins} from "next/font/google"
import "../globals.css"
import {getDictionary} from "@/src/app/get-dictionary"
import {i18n, type Locale} from "@/src/app/i18n-config"

const inter = Poppins({
    subsets: ["latin"],
    weight: ["400"]
})

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({lang: locale}))
}


export async function generateMetadata({params}: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
    const {lang} = await params;
    const dictionary = await getDictionary(lang);
    return {
        title: dictionary.metadata.title,
        description: dictionary.metadata.description,
    }
}

type Props = {
    children: ReactNode
    params: Promise<{ lang: Locale }>
}

export default async function RootLayout({children, params}: Props) {
    const {lang} = await params;
    return (
        <html lang={lang} suppressHydrationWarning>
        <body className={inter.className}>
        {children}
        </body>
        </html>
    )
}
