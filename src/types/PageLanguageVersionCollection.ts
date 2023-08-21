import { Language } from "./Language";

export type PageLanguageVersionCollection = Partial<{ [key in Language]: string }> | null;
