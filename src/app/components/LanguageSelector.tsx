"use client";
import "/node_modules/flag-icons/css/flag-icons.min.css";

import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { CountryCodes, LanguageNames, supportedLanguages } from "@/lib/localization";
import { Language } from "@/types/Language";
import { LanguageResult } from "@/types/LanguageResult";
import { PageLanguageVersionCollection } from "@/types/PageLanguageVersionCollection";

interface FlagIconProps {
  countryCode: string;
}

const fiCircleClass = "w-[24px] h-[24px] text-[24px] rounded-full shadow-inset bg-paper";

function FlagIcon({ countryCode = "" }: FlagIconProps) {
  if (countryCode === "en") {
    countryCode = "gb";
  }

  const countryCodeClass = `fi-${countryCode}`;
  return <span className={clsx(`fi fis mr-2 inline-block`, fiCircleClass, countryCodeClass)} />;
}

interface LanguageSelectorProps extends LanguageResult {
  pageLanguageVersions: PageLanguageVersionCollection;
  languageSelectorId: string;
}

export const LanguageSelector = ({
  requestedLanguage,
  pageLanguageVersions,
  languageSelectorId,
}: LanguageSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectedLanguage = supportedLanguages.find((language) => language === requestedLanguage);

  const handleLanguageChange = async (language: Language) => {
    console.log("Changed language to", language);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleWindowClick = (event: any) => {
      const target = event.target.closest("button");
      if (target && target.id === languageSelectorId) {
        return;
      }
      setIsOpen(false);
    };
    window.addEventListener("click", handleWindowClick);
    return () => {
      window.removeEventListener("click", handleWindowClick);
    };
    // eslint-disable-next-line
  }, []);

  if (!selectedLanguage) {
    return null;
  }

  const countryCode = CountryCodes[selectedLanguage];
  const defaultClasses = "font-mono block inline-flex items-center px-4 py-2 text-left text-sm";
  const linkSelectedClasses = "bg-orange/[0.8] text-white";
  const linkClasses = "transition duration-200 text-black hover:bg-orange/[0.10]";

  const languageVersions =
    pageLanguageVersions &&
    Object.entries(pageLanguageVersions).map(([language, url]) => {
      const lang = language as Language;
      return (
        <Link
          href={url}
          key={`language-link-${language}`}
          onClick={() => handleLanguageChange(lang)}
          className={clsx(defaultClasses, {
            [linkSelectedClasses]: selectedLanguage === language,
            [linkClasses]: selectedLanguage !== language,
          })}
          role="menuitem"
        >
          <FlagIcon countryCode={CountryCodes[lang]} />
          <span className="truncate text-xs ">{LanguageNames[lang]}</span>
        </Link>
      );
    });

  const languageSelectorClasses = `font-mono inline-flex w-full items-center justify-center rounded-md border-2 border-transparent bg-transparent px-4 py-2 text-white transition hover:border-granite/[0.5] focus:bg-granite/[0.5] focus:outline-none focus:ring-0`;

  return (
    <>
      <div className="flex items-center">
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={languageSelectorClasses}
              id={languageSelectorId}
              aria-haspopup="true"
              aria-expanded={isOpen}
            >
              <FlagIcon countryCode={countryCode} />
              <span className="text-xs xl:flex">{LanguageNames[selectedLanguage]}</span>
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {isOpen && (
            <div
              className="absolute right-0 mt-2 w-32 origin-top-right rounded-md bg-paper shadow-lg ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="language-selector"
            >
              <div className="grid grid-cols-1 gap-2 py-1" role="none">
                {languageVersions}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
