import { ContentfulPage } from "@/types/ContentfulPage";
import { Language } from "@/types/Language";

import { queryAllPages, queryPageByUrl } from "./contentful/page";
import { supportedLanguages } from "./localization";

export const findPageIdByUrl = async (url: string) => {
  let pageId = null;
  for (const language of supportedLanguages) {
    const page = await queryPageByUrl(url, language);
    if (page) {
      pageId = page.sys.id;
      break;
    }
  }

  return pageId;
};

export const findPageByUrl = async (pageName: string, language: Language) => {
  return await queryPageByUrl(pageName, language);
};

/**
 * Currently unused, iterates all known content and their language versions
 * @returns
 */
export const createPagesSitemap = async () => {
  const sitemap: { lang: Language; page: string }[] = [];

  const pagesInAllLanguages: { language: Language; pages: ContentfulPage[] }[] = [];
  for (const language of supportedLanguages) {
    const pages = await queryAllPages(language);
    pagesInAllLanguages.push({ language, pages });
  }

  for (const item of pagesInAllLanguages) {
    for (const page of item.pages) {
      sitemap.push({ lang: item.language, page: page.url });
    }
  }

  return sitemap;
};
