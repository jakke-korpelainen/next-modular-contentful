import type { ContentfulSys } from "./ContentfulSys";

export interface ContentfulContent extends ContentfulSys {
  name: string;
  /**
   * markdown content
   */
  text: string;
}
