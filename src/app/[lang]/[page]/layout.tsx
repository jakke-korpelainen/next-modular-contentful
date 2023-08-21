import "@/global.css";

import clsx from "clsx";
import { type ReactNode, Suspense } from "react";

import { Footer } from "@/app/components/Footer";
import { Header } from "@/app/components/Header";
import { Loading } from "@/app/components/Loading";
import { querySingletonGlobalSettings } from "@/lib/contentful/globalSettings";
import { queryAllPages } from "@/lib/contentful/page";
import { oxygen, oxygen_mono, raleway } from "@/lib/fonts";
import { autofixLanguage, supportedLanguages } from "@/lib/localization";
import { getPageMetadata } from "@/lib/metadata";
import { ContentfulPage } from "@/types/ContentfulPage";
import { Language } from "@/types/Language";
import { PageLanguageVersionCollection } from "@/types/PageLanguageVersionCollection";

interface LayoutProps {
  children?: ReactNode;
  params: { lang: Language; page: string };
}

const baseClassNames = "min-w-screen flex min-h-screen w-full flex-col font-sans";

/**
 * Layout in /:lang/:page
 * @param param0
 * @returns
 */
export default async function PageLayout({ children, params }: LayoutProps) {
  let allPages: ContentfulPage[] = [];
  let pageLanguageVersions: PageLanguageVersionCollection = {};
  if (supportedLanguages.includes(params.lang)) {
    const metadata = await getPageMetadata(params, false);
    allPages = await queryAllPages(params.lang);
    pageLanguageVersions = metadata?.alternates?.languages ?? {};
  }

  const languageResult = autofixLanguage(params?.lang);
  const globalSettings = await querySingletonGlobalSettings(languageResult.currentLanguage);

  return (
    <html lang={languageResult.currentLanguage}>
      <body>
        <div className={clsx(baseClassNames, oxygen.variable, oxygen_mono.variable, raleway.variable)}>
          <Header
            pages={allPages}
            pageLanguageVersions={pageLanguageVersions}
            globalSettings={globalSettings}
            {...languageResult}
          />

          <div className="flex grow flex-col bg-paper">
            <main className="2xl:max-w-screen-xl mx-auto flex w-full grow flex-col px-0 sm:px-5 md:max-w-screen-md lg:max-w-screen-lg lg:px-0">
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </main>

            <Footer globalSettings={globalSettings} />
          </div>
        </div>
      </body>
    </html>
  );
}
