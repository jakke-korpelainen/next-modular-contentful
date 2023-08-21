import { ContentfulSys } from "./ContentfulSys";
import { Position } from "./Position";
import { TextAlignment } from "./TextAlignment";

export interface ContentfulLeadingText extends ContentfulSys {
  text: string;
  textAlignment: TextAlignment;
  borderDirection: Position;
}
