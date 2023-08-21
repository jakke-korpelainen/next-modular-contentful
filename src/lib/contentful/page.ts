import { ContentfulCollection } from "@/types/ContentfulCollection";
import { ContentfulPage } from "@/types/ContentfulPage";
import { Language } from "@/types/Language";

import { fetchContentfulGraphQL } from ".";
import { QUERY_ALL_PAGES, QUERY_PAGE_BY_ID, QUERY_PAGE_BY_URL } from "./queries";

interface PageQuery {
  page: ContentfulPage;
}

interface PageCollectionQuery {
  pageCollection: ContentfulCollection<ContentfulPage>;
}

export async function queryAllPages(locale: Language) {
  console.log("Contentful: AllPagesQuery", { locale });
  const entries = await fetchContentfulGraphQL<PageCollectionQuery>(QUERY_ALL_PAGES(locale));
  return entries?.data?.pageCollection?.items;
}

export async function queryPageByUrl(url: string, locale?: Language) {
  console.log("Contentful: PageByUrlQuery", { url, locale });
  const entries = await fetchContentfulGraphQL<PageCollectionQuery>(QUERY_PAGE_BY_URL(url, locale));
  return entries?.data?.pageCollection?.items?.[0];
}

export async function queryPageById(id: string, locale: Language) {
  console.log("Contentful: PageQuery", { id, locale });
  const entries = await fetchContentfulGraphQL<PageQuery>(QUERY_PAGE_BY_ID(id, locale));
  return entries?.data?.page;
}
