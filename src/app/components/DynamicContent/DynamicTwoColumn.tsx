import { ContentfulTwoColumn } from "@/types/ContentfulTwoColumn";

import { TwoColumn } from "../TwoColumn";
import { DynamicComponentProps, DynamicContent } from ".";

export interface DynamicTwoColumnProps extends DynamicComponentProps {
  content: ContentfulTwoColumn;
}

const leftTextClassNames = "flex flex-col justify-center prose-p-text-base prose-p:lg:text-lg prose-p:xl:text-xl";

export default function DynamicTwoColumn({ id, ...props }: DynamicTwoColumnProps) {
  const { content } = props;
  const key = `two-column-${id}`;
  const borderDirection = content?.leadingText?.borderDirection;
  const textAlign = content?.leadingText?.textAlignment;
  const text = content?.leadingText?.text;
  const background = content?.background ?? true;
  const leftContent = content?.leftContent;
  const rightContent = content?.rightContent;

  return (
    <TwoColumn
      background={background}
      key={key}
      borderDirection={borderDirection}
      textAlign={textAlign}
      heading={text}
      left={
        <DynamicContent key={`two-column-${id}-left`} content={{ ...leftContent, classNames: leftTextClassNames }} />
      }
      right={<DynamicContent key={`two-column-${id}-right`} content={rightContent} />}
    />
  );
}
