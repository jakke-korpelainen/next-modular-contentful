import Image from "next/image";
import Link from "next/link";

import { ContenfulGlobalSettings } from "@/types/ContentfulGlobalSettings";
import { ContentfulPage } from "@/types/ContentfulPage";
import { LanguageResult } from "@/types/LanguageResult";
import { PageLanguageVersionCollection } from "@/types/PageLanguageVersionCollection";

import { MobileNavigation } from "./MobileNavigation";
import { RegularNavigation } from "./RegularNavigation";

interface LogoProps extends Pick<LanguageResult, "requestedLanguage"> {
  siteName: string;
  logo: { url: string; description: string };
  startPageUrl: string;
}

const logoClassNames = `flex flex-col gap-0 text-xs font-extrabold uppercase sm:flex-row sm:gap-2 sm:text-2xl md:gap-2 lg:text-4xl xl:text-[2.5707rem]`;
const siteNameKey = (id: string | number) => `site-name-word-${id}`;
const Logo = ({ requestedLanguage, logo, siteName, startPageUrl }: LogoProps) => (
  <Link href={`/${requestedLanguage}/${startPageUrl}`}>
    <div className="flex flex-nowrap items-center gap-2 sm:gap-4">
      {logo.url && (
        <Image
          className="h-10 w-10 object-contain sm:h-auto sm:w-auto xl:h-14 xl:w-14"
          alt={logo.description}
          height={58}
          width={58}
          src={logo.url}
        />
      )}
      <h1 className={logoClassNames}>
        {siteName?.split(" ").map((word, index) => <span key={siteNameKey(index)}>{word}</span>)}
      </h1>
    </div>
  </Link>
);

const Navigation = (props: HeaderProps) => (
  <div className="z-10 flex justify-end gap-5 xl:gap-10">
    <RegularNavigation {...props} />
    <MobileNavigation {...props} />
  </div>
);

interface HeaderProps extends LanguageResult {
  globalSettings: ContenfulGlobalSettings;
  pageLanguageVersions: PageLanguageVersionCollection;
  pages: Pick<ContentfulPage, "sys" | "name" | "url" | "sortIndex">[];
}

export const Header = (props: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 h-20 w-full bg-granite text-white sm:h-28">
      <div className="2xl:max-w-screen-xl mx-auto flex h-full w-full items-center justify-between p-5 md:max-w-screen-md lg:max-w-screen-lg xl:p-0">
        <Logo
          startPageUrl={props.globalSettings.startPage.url}
          siteName={props.globalSettings.name}
          logo={props.globalSettings.logo}
          requestedLanguage={props.requestedLanguage}
        />
        <Navigation {...props} />
      </div>
    </header>
  );
};
