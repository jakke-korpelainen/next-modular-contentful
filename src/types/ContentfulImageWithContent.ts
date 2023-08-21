import { ContentfulAsset } from "./ContentfulAsset";
import { ContentfulSys } from "./ContentfulSys";

export interface ContentfulImageWithContent extends ContentfulSys {
  image: ContentfulAsset;
  text: string;
}
