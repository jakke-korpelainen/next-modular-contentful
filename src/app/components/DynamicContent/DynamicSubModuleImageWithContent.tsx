import clsx from "clsx";
import Image from "next/image";
import { remark } from "remark";
import html from "remark-html";

import { proseDefaultClasses } from "@/lib/classes";
import { ContentfulImageWithContent } from "@/types/ContentfulImageWithContent";

import { DynamicComponentProps } from ".";

export interface DynamicSubModuleImageWithContentProps extends DynamicComponentProps {
  content: ContentfulImageWithContent;
}

export default function DynamicSubModuleImageWithContent({ id, ...props }: DynamicSubModuleImageWithContentProps) {
  const { content } = props;
  const key = `image-with-content-${id}`;
  const image = content?.image;
  const text = content?.text;
  const textContent = remark().use(html).processSync(text).toString();

  return (
    <div key={key} className="flex flex-col gap-10 md:flex-row">
      <div className="w-full md:w-4/12">
        <Image className="object-fit" src={image.url} alt={image.description} width={200} height={200} />
      </div>
      <div
        className={clsx(`w-full md:w-8/12`, proseDefaultClasses)}
        dangerouslySetInnerHTML={{ __html: textContent }}
      ></div>
    </div>
  );
}
