import { ContentfulRevealOnScroll } from "@/types/ContentfulRevealOnScroll";

import { RevealOnScroll } from "../RevealOnScroll";
import { DynamicComponentProps, DynamicContent } from ".";

export interface DynamicSubModuleRevealOnScrollProps extends DynamicComponentProps {
  content: ContentfulRevealOnScroll;
}

export default function DynamicSubModuleRevealOnScroll({ id, ...props }: DynamicSubModuleRevealOnScrollProps) {
  const { content } = props;
  const key = `reveal-${id}`;
  const revealFromDirection = content?.revealFromDirection;
  const contentCollection = content?.contentCollection?.items ?? [];

  return (
    <RevealOnScroll key={key} direction={revealFromDirection}>
      {contentCollection.map((item: any) => (
        <DynamicContent key={`reveal-${id}-content-${item.sys.id}`} content={item} />
      ))}
    </RevealOnScroll>
  );
}
