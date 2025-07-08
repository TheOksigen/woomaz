export const i18n = {
  defaultLocale: "az",
  locales: ["az", "ru"],
} as const

export type Locale = (typeof i18n)["locales"][number]
