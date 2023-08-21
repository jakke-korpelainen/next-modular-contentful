import dynamic from "next/dynamic";
import { ComponentType } from "react";

import {
  ContentfulTypes,
  ModuleOneColumn,
  ModuleTwoColumn,
  SubModuleContent,
  SubModuleImageWithContent,
  SubModuleLeadingText,
  SubModuleRevealOnScroll,
  SubModuleStickyOffsetText,
  SubModuleTable,
} from "@/lib/contentful/types";

import type { DynamicModuleOneColumnProps } from "./DynamicModuleOneColumn";
import { DynamicSubModuleContentProps } from "./DynamicSubModuleContent";
import type { DynamicSubModuleImageWithContentProps } from "./DynamicSubModuleImageWithContent";
import type { DynamicSubModuleLeadingTextProps } from "./DynamicSubModuleLeadingText";
import type { DynamicSubModuleRevealOnScrollProps } from "./DynamicSubModuleRevealOnScroll";
import type { DynamicSubModuleStickyOffsetTextProps } from "./DynamicSubModuleStickyOffsetText";
import type { DynamicSubModuleTableProps } from "./DynamicSubModuleTable";
import type { DynamicTwoColumnProps } from "./DynamicTwoColumn";

/**
 * List of known dynamic component props
 * Note: Needs to be updated if you add/remove a new component
 */
type DynamicComponentTypes =
  | ComponentType<DynamicModuleOneColumnProps>
  | ComponentType<DynamicTwoColumnProps>
  | ComponentType<DynamicSubModuleImageWithContentProps>
  | ComponentType<DynamicSubModuleRevealOnScrollProps>
  | ComponentType<DynamicSubModuleStickyOffsetTextProps>
  | ComponentType<DynamicSubModuleLeadingTextProps>
  | ComponentType<DynamicSubModuleTableProps>
  | ComponentType<DynamicSubModuleContentProps>;

export interface DynamicComponentProps {
  content?: unknown;
  typename?: string;
  id?: string | null;
  [key: string]: any;
}

/**
 * List of known contentful modules and their respective components
 * Note: Needs to be updated if you add/remove a new component
 */
export const KnownModules: Record<ContentfulTypes, DynamicComponentTypes> = {
  [SubModuleImageWithContent]: dynamic(() => import("./DynamicSubModuleImageWithContent")),
  [SubModuleContent]: dynamic(() => import("./DynamicSubModuleContent")),
  [SubModuleTable]: dynamic(() => import("./DynamicSubModuleTable")),
  [SubModuleLeadingText]: dynamic(() => import("./DynamicSubModuleLeadingText")),
  [SubModuleStickyOffsetText]: dynamic(() => import("./DynamicSubModuleStickyOffsetText")),
  [SubModuleRevealOnScroll]: dynamic(() => import("./DynamicSubModuleRevealOnScroll")),
  [ModuleTwoColumn]: dynamic(() => import("./DynamicTwoColumn")),
  [ModuleOneColumn]: dynamic(() => import("./DynamicModuleOneColumn")),
};

/**
 * Entry point for dynamic content from contentful, used recursively (when necessary) from within the components
 */
export const DynamicContent = async ({ content }: { content: any }) => {
  if (content === null || !content?.__typename) {
    return null;
  }

  const typename: ContentfulTypes = content.__typename;

  // Identify the component type and render it
  if (KnownModules[typename]) {
    const Component = KnownModules[typename];

    const props = {
      content: { ...content },
      id: content?.sys?.id,
      typename: content.__typename,
    };

    const key = `dynamic-${props.id}`;

    return <Component key={key} {...props} />;
  }

  // component was not of a known type
  console.error("Dynamic Content was unable to determine component type.", content);

  return (
    <div className="animate-bounce border-2 border-red-500 p-5">
      <span className="font-black">Error:</span>{" "}
      <span className="text-base">Unhandled content (type: {content?.typename ?? "N/A"})</span>
      <span className="block text-base">Content: {JSON.stringify(content)}</span>
    </div>
  );
};
