import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Poppins } from "next/font/google"
import "../globals.css"
import { getDictionary } from "@/src/app/(frontend)/get-dictionary"
import { i18n, type Locale } from "@/src/app/(frontend)/i18n-config"

const inter = Poppins({ 
  subsets: ["latin"], 
  weight: ["400"]
})

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}


export async function generateMetadata({
  params,
}: {
  params: { lang: Locale }
}): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang)
  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description,
  }
}

type Props = {
  children: ReactNode
  params: { lang: Locale }
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
