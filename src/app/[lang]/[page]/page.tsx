import { Metadata } from "next";
import { notFound } from "next/navigation";

import { DynamicContent } from "@/app/components/DynamicContent";
import { supportedLanguages } from "@/lib/localization";
import { getPageMetadata } from "@/lib/metadata";
import { createPagesSitemap, findPageByUrl } from "@/lib/page";
import { ContentfulPage } from "@/types/ContentfulPage";
import { Language } from "@/types/Language";

interface PageProps {
  params: { lang: Language; page: string };
}

/**
 * Generate metadata for the page
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  if (!supportedLanguages.includes(params.lang)) {
    return {};
  }

  // Metadata typings missing some type exports e.g. Languages<>, going with as keyword for now
  const metadata = (await getPageMetadata(params)) as Metadata;
  return metadata;
}

export const dynamicParams = true;

/**
 * Revalidate page every x seconds
 */
export const revalidate = 0; // 3600; // 1 hour, change to your liking

/**
 * Generate static paths for all pages
 */
export async function generateStaticParams() {
  const sitemap = await createPagesSitemap();
  return sitemap;
}

/**
 * Handles requests to /:lang/:page
 */
export default async function Page({ params }: PageProps) {
  if (!supportedLanguages.includes(params.lang)) {
    return notFound();
  }

  const pageName = params?.page;
  let contentfulPage: ContentfulPage | null = null;

  try {
    contentfulPage = await findPageByUrl(pageName, params.lang);
  } catch (error) {
    console.error(error);
    notFound();
  }

  if (!contentfulPage) {
    notFound();
  }

  const sections = contentfulPage?.contentCollection?.items ?? [];

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex w-full flex-col items-center justify-center gap-10 sm:gap-20">
        {sections.map((section: any, index: number) => (
          <div key={section.sys.id} className={index === 0 ? "mt-8 w-full" : "w-full"}>
            <DynamicContent content={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
