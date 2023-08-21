import { ALL_PAGES_FIELDS, GLOBAL_SETTINGS_FIELDS, PAGE_FIELDS } from "./fields";

// Contentful GraphQL queries
// https://www.contentful.com/developers/docs/references/graphql/

// You'll need to modify the queries if you want to create / update or delete contentful modules in use.

export const QUERY_PAGE_BY_ID = (id: string, locale: string) => `
query pageEntryQuery {
  page(id: "${id}", locale: "${locale}") {
    ${PAGE_FIELDS}
  }
}`;

export const QUERY_PAGE_BY_URL = (url: string, locale?: string) =>
  locale ? QUERY_PAGE_BY_URL_WITH_LOCALE(url, locale) : QUERY_PAGE_BY_URL_DEFAULT_LOCALE(url);

const QUERY_PAGE_BY_URL_DEFAULT_LOCALE = (url: string) => `
query {
  pageCollection(where: { localizations: { url: "${url}"} }, limit: 10) {
    items {
      ${ALL_PAGES_FIELDS}
    }
  }
}`;

const QUERY_PAGE_BY_URL_WITH_LOCALE = (url: string, locale?: string) => `
query {
  pageCollection(where: { url: "${url}" }, limit: 1, locale: "${locale}") {
    items {
      ${PAGE_FIELDS}
    }
  }
}`;

export const QUERY_ALL_PAGES = (locale: string) => `
query {
  pageCollection(locale: "${locale}") {
    items {
      ${ALL_PAGES_FIELDS}
    }
  }
}
`;

export const QUERY_ALL_GLOBAL_SETTINGS = (locale: string) => `
query {
  globalSettingsCollection(locale: "${locale}") {
    items {
      ${GLOBAL_SETTINGS_FIELDS}
    }
  }
}
`;
