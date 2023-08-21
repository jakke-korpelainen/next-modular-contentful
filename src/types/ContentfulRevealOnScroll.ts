import { ContentfulCollection } from "./ContentfulCollection";
import { ContentfulSys } from "./ContentfulSys";
import { Position } from "./Position";

/**
 * TODO: This type is a stub. Improve it.
 */
type ContentfulRevealOnScrollContent = ContentfulSys & { __typename: string };

export interface ContentfulRevealOnScroll extends ContentfulSys {
  name: string;
  revealFromDirection: Position;
  /** references to content */
  contentCollection: ContentfulCollection<ContentfulRevealOnScrollContent>;
}
