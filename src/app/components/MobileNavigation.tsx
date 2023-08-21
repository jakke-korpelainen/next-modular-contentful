"use client";
import clsx from "clsx";
import { useState } from "react";

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

const mobileBaseClasses = "absolute left-0 right-0 top-0 flex h-full w-full bg-granite p-5 transition duration-200";
const mobileOpenClasses = "z-50 translate-y-0 opacity-100";
const mobileHiddenClasses = "pointer-events-none z-0 -translate-y-full";

export const MobileNavigation = ({ pages, ...props }: NavigationProps) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const classes = clsx(mobileBaseClasses, { [mobileOpenClasses]: isNavOpen, [mobileHiddenClasses]: !isNavOpen });

  return (
    <div className="flex md:hidden">
      <button className="p-3" onClick={() => setIsNavOpen(true)} type="button">
        <div className="space-y-1">
          <div className="h-0.5 w-5 bg-white"></div>
          <div className="h-0.5 w-5 bg-white"></div>
          <div className="h-0.5 w-5 bg-white"></div>
        </div>
      </button>
      <div className={classes}>
        <div className="flex w-full items-center justify-between">
          <div className="flex grow justify-between">
            <ul className="flex grow items-center gap-4">
              {[...pages]
                .sort((a, b) => a.sortIndex - b.sortIndex)
                .map((page) => (
                  <NavigationLink
                    key={`mobilelink-${page.sys.id}`}
                    name={page.name}
                    url={page.url}
                    language={props.currentLanguage}
                  />
                ))}
            </ul>
            {supportedLanguages.length > 1 && (
              <LanguageSelector languageSelectorId="languageSelectorMobile" {...props} />
            )}
          </div>
          <button className="ml-3 p-2" onClick={() => setIsNavOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
};
