import { Language } from "./Language";

export interface LanguageResult {
  currentLanguage: Language;
  requestedLanguage: string | null;
}
