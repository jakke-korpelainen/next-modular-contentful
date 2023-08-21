import { ContentfulAsset } from "./ContentfulAsset";
import { ContentfulPage } from "./ContentfulPage";
import { ContentfulSys } from "./ContentfulSys";

export interface ContenfulGlobalSettings extends ContentfulSys {
  name: string;
  logo: ContentfulAsset;
  contactEmail: string;
  contactPhone: string;
  socialLinks: string[];
  startPage: Pick<ContentfulPage, "url">;
}
