import { ContenfulGlobalSettings } from "@/types/ContentfulGlobalSettings";
import { Language } from "@/types/Language";

import { DEFAULT_LANGUAGE } from "../localization";
import { fetchContentfulGraphQL } from ".";
import { QUERY_ALL_GLOBAL_SETTINGS } from "./queries";

interface GlobalSettingsCollectionQuery {
  globalSettingsCollection: { items: ContenfulGlobalSettings[] };
}

export async function querySingletonGlobalSettings(locale?: Language) {
  console.log("Contentful: AllGlobalSettingsQuery", { locale: locale ?? DEFAULT_LANGUAGE });
  const entries = await fetchContentfulGraphQL<GlobalSettingsCollectionQuery>(
    QUERY_ALL_GLOBAL_SETTINGS(locale ?? DEFAULT_LANGUAGE),
  );
  return entries?.data?.globalSettingsCollection?.items?.[0];
}
