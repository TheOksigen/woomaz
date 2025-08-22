import type { Locale } from "@/src/app/(frontend)/i18n-config"
import { getDictionary } from "@/src/app/(frontend)/get-dictionary"
import PageContent from "./page-content"

// This is now a pure Server Component.
// It fetches data and passes it to the client component.
export default async function Page({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang)

  return <PageContent dictionary={dictionary} lang={lang} />
}
