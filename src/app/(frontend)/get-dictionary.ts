import "server-only"
import type { Locale } from "./i18n-config"

// A mapping of locales to their dictionary import functions.
const dictionaries = {
  az: () => import("../../dictionaries/az.json").then((module) => module.default),
  ru: () => import("../../dictionaries/ru.json").then((module) => module.default),
}

/**
 * Asynchronously loads the dictionary for a given locale.
 * Uses a named export to avoid import/export mismatches.
 * Falls back to the default locale ('az') if the requested locale is not found.
 * @param {Locale} locale - The locale to load the dictionary for.
 * @returns {Promise<any>} A promise that resolves to the dictionary object.
 */
export const getDictionary = async (locale: Locale) => {
  return locale in dictionaries ? dictionaries[locale]() : dictionaries.az()
}
