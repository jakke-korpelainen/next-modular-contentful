import { redirect } from "next/navigation";

import { querySingletonGlobalSettings } from "@/lib/contentful/globalSettings";
import { DEFAULT_LANGUAGE } from "@/lib/localization";

/**
 * Redirects requests to / -> /en-US/[startPage]
 */
export default async function AppPage() {
  const globalSettings = await querySingletonGlobalSettings();
  redirect(`/${DEFAULT_LANGUAGE}/${globalSettings.startPage.url}`);
}
