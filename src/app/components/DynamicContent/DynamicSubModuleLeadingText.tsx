import { ContentfulLeadingText } from "@/types/ContentfulLeadingText";

import { LeadingText } from "../LeadingText";
import { DynamicComponentProps } from ".";

export interface DynamicSubModuleLeadingTextProps extends DynamicComponentProps {
  content: ContentfulLeadingText;
}

export default function DynamicSubModuleLeadingText({ id, ...props }: DynamicSubModuleLeadingTextProps) {
  const { content } = props;
  const key = `leading-${id}`;
  const borderDirection = content?.borderDirection;
  const textAlign = content?.textAlignment;
  const text = content?.text;

  return (
    <LeadingText key={key} textAlign={textAlign} borderDirection={borderDirection}>
      {text}
    </LeadingText>
  );
}
