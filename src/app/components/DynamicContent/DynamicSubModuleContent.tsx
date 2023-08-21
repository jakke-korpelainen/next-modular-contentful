import clsx from "clsx";
import { remark } from "remark";
import html from "remark-html";

import { proseDefaultClasses } from "@/lib/classes";
import { ContentfulContent } from "@/types/ContentfulContent";

import { DynamicComponentProps } from ".";

export interface DynamicSubModuleContentProps extends DynamicComponentProps {
  content: ContentfulContent & { classNames?: string };
}

export default function DynamicSubModuleContent({ id, ...props }: DynamicSubModuleContentProps) {
  const { content } = props;
  const key = `content-${id}`;
  const text = content?.text;
  const classNames = content?.classNames ?? "";
  const textDescription = remark().use(html).processSync(text).toString();

  return (
    <div
      key={key}
      className={clsx(proseDefaultClasses, classNames)}
      dangerouslySetInnerHTML={{ __html: textDescription }}
    />
  );
}
