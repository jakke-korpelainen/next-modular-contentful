import { ContentfulCollection } from "./ContentfulCollection";
import { ContentfulContent } from "./ContentfulContent";
import { ContentfulImageWithContent } from "./ContentfulImageWithContent";
import { ContentfulLeadingText } from "./ContentfulLeadingText";
import { ContentfulSys } from "./ContentfulSys";
import { ContentfulTable } from "./ContentfulTable";

type ContentfulOneColumnContent =
  | ContentfulLeadingText
  | ContentfulContent
  | ContentfulImageWithContent
  | ContentfulTable;

export interface ContentfulOneColumn extends ContentfulSys {
  name: string;
  background: boolean;
  columnContentCollection: ContentfulCollection<ContentfulOneColumnContent>;
}
