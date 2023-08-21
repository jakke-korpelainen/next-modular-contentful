import clsx from "clsx";

interface StickyOffsetTextProps {
  text?: string;
  children?: React.ReactNode;
}

const invisibleStyles = "hidden";
const visibleStyles =
  "xl:sticky xl:flex xl:w-[115%] max:w-[130%] justify-end text-right right-full top-[9rem] h-full border-t-4 border-orange/[0.15]";

export const StickyOffsetText = ({ text, children }: StickyOffsetTextProps) => {
  return (
    <div className={clsx(invisibleStyles, visibleStyles)}>
      <div className="absolute right-0 top-0 w-96">
        {text && (
          <h2 className="select-none break-all bg-gradient-to-b from-orange/[0.6] to-orange/[0.25] bg-clip-text font-black uppercase text-transparent xl:text-2xl max:text-4xl">
            {text}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};
