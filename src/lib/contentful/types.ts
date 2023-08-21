// These are the module names from contentful. They are used to map the contentful data to the correct component.
// If you create your own new modules, you'll need to add them here.

export const SubModuleImageWithContent = "SubModuleImageWithContent";
export const SubModuleContent = "SubModuleContent";
export const SubModuleTable = "SubModuleTable";
export const SubModuleLeadingText = "SubModuleLeadingText";
export const SubModuleStickyOffsetText = "SubModuleStickyOffsetText";
export const SubModuleRevealOnScroll = "SubModuleRevealOnScroll";

/**
 * Should be fixed in contentful! Correct name: ModuleTwoColumn.
 */
export const ModuleTwoColumn = "TwoColumn";
export const ModuleOneColumn = "ModuleOneColumn";

export type ContentfulTypes =
  | typeof SubModuleContent
  | typeof SubModuleImageWithContent
  | typeof SubModuleTable
  | typeof SubModuleLeadingText
  | typeof SubModuleStickyOffsetText
  | typeof SubModuleRevealOnScroll
  | typeof ModuleTwoColumn
  | typeof ModuleOneColumn;
