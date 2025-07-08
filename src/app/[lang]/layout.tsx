import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "@/src/components/theme-provider"
import { getDictionary } from "@/src/app/get-dictionary"
import { i18n, type Locale } from "@/src/app/i18n-config"

const inter = Inter({ subsets: ["latin"] })

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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
