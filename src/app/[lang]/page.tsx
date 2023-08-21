import { redirect } from "next/navigation";

import { querySingletonGlobalSettings } from "@/lib/contentful/globalSettings";
import { DEFAULT_LANGUAGE, supportedLanguages } from "@/lib/localization";
import { Language } from "@/types/Language";

interface LangPageProps {
  params: {
    lang: Language;
  };
}

/**
 * Redirects requests to /:lang/ -> /en-US/[startPage]
 */
export default async function LangPage({ params }: LangPageProps) {
  let locale = undefined;
  if (supportedLanguages.includes(params.lang)) {
    locale = params.lang;
  }

  const globalSettings = await querySingletonGlobalSettings(locale);
  redirect(`/${locale ?? DEFAULT_LANGUAGE}/${globalSettings.startPage.url}`);
}
