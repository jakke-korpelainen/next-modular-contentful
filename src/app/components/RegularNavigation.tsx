"use client";

import { supportedLanguages } from "@/lib/localization";
import { ContentfulPage } from "@/types/ContentfulPage";
import { LanguageResult } from "@/types/LanguageResult";
import { PageLanguageVersionCollection } from "@/types/PageLanguageVersionCollection";

import { LanguageSelector } from "./LanguageSelector";
import { NavigationLink } from "./NavigationLink";

interface NavigationProps extends LanguageResult {
  pageLanguageVersions: PageLanguageVersionCollection;
  pages: Pick<ContentfulPage, "sys" | "name" | "url" | "sortIndex">[];
}

export const RegularNavigation = ({
  currentLanguage,
  requestedLanguage,
  pages,
  pageLanguageVersions,
}: NavigationProps) => (
  <div className="hidden gap-6 md:flex">
    <nav>
      <ul className="flex h-full items-center gap-6 text-xl">
        {[...pages]
          .sort((a, b) => a.sortIndex - b.sortIndex)
          .map((page) => (
            <NavigationLink key={`navlink-${page.sys.id}`} name={page.name} language={currentLanguage} url={page.url} />
          ))}
      </ul>
    </nav>
    {supportedLanguages.length > 1 && (
      <LanguageSelector
        languageSelectorId="languageSelectorRegular"
        currentLanguage={currentLanguage}
        requestedLanguage={requestedLanguage}
        pageLanguageVersions={pageLanguageVersions}
      />
    )}
  </div>
);
