import { ContentfulPage } from "@/types/ContentfulPage";
import { PageLanguageVersionCollection } from "@/types/PageLanguageVersionCollection";

import { queryPageById } from "./contentful/page";
import { supportedLanguages } from "./localization";
import { findPageIdByUrl } from "./page";

/**
 * Returns structure used by next to create <link rel="alternate"> tags for the language versions of a page
 */
const createAlternates = (
  languageVersions: { language: string; page: ContentfulPage }[],
  absoluteUrls: boolean = true,
): PageLanguageVersionCollection => {
  const rootUrl = absoluteUrls ? process.env.APP_BASE : "";
  let languages: PageLanguageVersionCollection = {};

  for (const version of languageVersions) {
    languages = {
      ...languages,
      [version.language]: `${rootUrl}/${version.language}/${version.page.url}`,
    };
  }

  return languages;
};

/**
 * Returns page metadata for the language version of a page
 * @param params
 * @param absoluteUrls if true, will return absolute urls, otherwise relative
 * @returns
 */
export const getPageMetadata = async (params: { lang: string; page: string }, absoluteUrls: boolean = true) => {
  const lang = params.lang;
  const page = params.page;

  const pageId = await findPageIdByUrl(page);
  if (!pageId) {
    return {};
  }

  const pageLanguageVersions: { language: string; page: ContentfulPage }[] = [];
  for (const language of supportedLanguages) {
    const pageLanguage = await queryPageById(pageId, language);
    pageLanguageVersions.push({ language: language, page: pageLanguage });
  }

  const pageInCurrentLanguage = pageLanguageVersions.find((page) => page.language === lang);
  if (!pageLanguageVersions.length || !pageInCurrentLanguage) {
    return {};
  }

  const languageVersions = pageLanguageVersions.filter((page) => page.language !== lang);
  const rootUrl = absoluteUrls ? process.env.APP_BASE : "";

  const alternates = {
    canonical: `${rootUrl}/${lang}/${pageInCurrentLanguage.page.url}`,
    languages: createAlternates(languageVersions, absoluteUrls),
  };

  return {
    title: `${pageInCurrentLanguage.page.name} - ${process.env.APP_NAME}`,
    description: pageInCurrentLanguage.page.description,
    alternates,
  };
};
