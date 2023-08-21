import { Language } from "@/types/Language";
import { LanguageResult } from "@/types/LanguageResult";

/**
 * Supported languages of the application
 */
export const supportedLanguages: Language[] = [Language.English, Language.Finnish];

/**
 * Default language of the application
 */
export const DEFAULT_LANGUAGE = Language.English;

/**
 * Language names
 */
export const LanguageNames = {
  "en-US": "English",
  "fi-FI": "Suomi",
};

/**
 * Language codes
 */
export const CountryCodes = {
  "en-US": "en",
  "fi-FI": "fi",
};

/**
 * If language is supported, returns it, otherwise tries to "repair" it if it is a partial match. Otherwise returns default language
 * @param language language to check
 */
export const autofixLanguage = (language?: string | null): LanguageResult => {
  const result = { currentLanguage: DEFAULT_LANGUAGE, requestedLanguage: language ?? null };

  if (!language) {
    return result;
  }

  // if full language code, return if supported
  if (Object.values(Language).includes(language as Language)) {
    result.currentLanguage = language as Language;
  }

  // if partial language code, try to resolve from supported languages
  if (language.length === 2) {
    const fixedLanguage = Object.keys(CountryCodes)[Object.values(CountryCodes).indexOf(language)];
    // return if was able to resolve
    if (fixedLanguage) {
      result.currentLanguage = fixedLanguage as Language;
    }
  }

  // fallback to english
  return result;
};
