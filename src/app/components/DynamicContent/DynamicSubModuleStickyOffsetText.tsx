import { ContentfulStickyOffsetText } from "@/types/ContentfulStickyOffsetText";

import { StickyOffsetText } from "../StickyOffsetText";
import { DynamicComponentProps } from ".";

export interface DynamicSubModuleStickyOffsetTextProps extends DynamicComponentProps {
  content: ContentfulStickyOffsetText;
}

export default function DynamicSubModuleStickyOffsetText({ id, ...props }: DynamicSubModuleStickyOffsetTextProps) {
  const { content } = props;
  const key = `sticky-${id}`;
  const text = content?.text;

  return <StickyOffsetText key={key} text={text} />;
}
