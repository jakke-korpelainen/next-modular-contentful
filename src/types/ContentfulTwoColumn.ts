import { ContentfulCollection } from "./ContentfulCollection";
import { ContentfulContent } from "./ContentfulContent";
import { ContentfulImageWithContent } from "./ContentfulImageWithContent";
import { ContentfulLeadingText } from "./ContentfulLeadingText";
import { ContentfulSys } from "./ContentfulSys";
import { ContentfulTable } from "./ContentfulTable";

type ContentfulTwoColumnContent =
  | ContentfulLeadingText
  | ContentfulContent
  | ContentfulImageWithContent
  | ContentfulTable;

export interface ContentfulTwoColumn extends ContentfulSys {
  name: string;

  background: boolean;
  leadingText: ContentfulLeadingText;

  leftContent: ContentfulCollection<ContentfulTwoColumnContent>;
  rightContent: ContentfulCollection<ContentfulTwoColumnContent>;
}
