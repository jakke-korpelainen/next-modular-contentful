import { ContentfulCollection } from "./ContentfulCollection";
import { ContentfulSys } from "./ContentfulSys";

type ContentfulPageContent = ContentfulSys & { __typename: string };

interface ContentfulLanguageVersion {
  name: string;
  language: string;
}

export interface ContentfulPage extends ContentfulSys {
  name: string;
  url: string;
  sortIndex: number;
  description: string;
  languageVersionsCollection: ContentfulCollection<ContentfulLanguageVersion>;
  contentCollection: ContentfulCollection<ContentfulPageContent>;
}
