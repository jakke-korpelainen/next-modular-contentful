import { SubModuleContent } from "@/lib/contentful/types";
import { ContentfulOneColumn } from "@/types/ContentfulOneColumn";

import { Block } from "../Block";
import { DynamicComponentProps, DynamicContent } from ".";

export interface DynamicModuleOneColumnProps extends DynamicComponentProps {
  content: ContentfulOneColumn;
}

const subContentClasses = "prose-p:text-xl text-center";

export default function DynamicModuleOneColumn({ id, ...props }: DynamicModuleOneColumnProps) {
  const { content } = props;
  const key = `block-${id}`;
  const contentCollection = content?.columnContentCollection?.items ?? [];
  const background = content?.background ?? true;

  return (
    <Block background={background} key={key}>
      <div className="flex w-full grow flex-col items-center gap-20">
        {contentCollection.map((contentItem: any) => {
          if (contentItem.__typename === SubModuleContent) {
            contentItem.classNames = subContentClasses;
          }
          return <DynamicContent key={`block-${id}-content-${contentItem.sys.id}`} content={contentItem} />;
        })}
      </div>
    </Block>
  );
}
