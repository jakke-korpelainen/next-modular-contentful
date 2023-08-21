import { headers } from "next/headers";
import Link from "next/link";
import { Fragment } from "react";

import { queryPageByUrl } from "@/lib/contentful/page";
import { LanguageNames, supportedLanguages } from "@/lib/localization";

const tryFindPage = async () => {
  const headersList = headers();
  const domain = headersList.get("host") ?? "";
  const fullUrl = headersList.get("referer") ?? "";
  const [, pathname] = RegExp(new RegExp(`https?://${domain}(.*)`)).exec(fullUrl) ?? [];
  if (!pathname) return null;

  const splitPath = pathname?.split("/") ?? [];
  const pathWithoutLanguage = splitPath.slice(2).join("/");

  const pages = [];
  for (const language of supportedLanguages) {
    const page = await queryPageByUrl(pathWithoutLanguage, language);
    if (page) {
      pages.push({ name: page.name, url: page.url, language });
    }
  }

  return pages;
};

const getLinkKey = (id: string | number) => `fallback-link-${id}`;

export const FallbackPageLink = async () => {
  const pages = await tryFindPage();
  const hasFoundPages = pages && pages.length > 0;

  return (
    hasFoundPages && (
      <>
        <span> the page in a different language version we were able to locate: </span>
        {pages.map((p, index) => (
          <Fragment key={getLinkKey(index)}>
            <Link href={`/${p.language}/${p.url}`}>
              <span className="capitalize">{p.url}</span> ({LanguageNames[p.language]})
            </Link>{" "}
            or
          </Fragment>
        ))}
        .
      </>
    )
  );
};
