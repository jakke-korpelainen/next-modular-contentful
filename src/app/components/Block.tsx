import clsx from "clsx";

interface BlockProps {
  children?: React.ReactNode;
  background: boolean;
}

const blockClassNames = `relative flex w-full grow items-center justify-center p-5 pb-10 sm:pb-20 sm:min-h-[calc(100vh-11rem)] sm:p-10 lg:p-10`;
const backgroundStyles = "shadow-xl border border-[#f5f5f5] bg-[#ffffff]";

export const Block = ({ children, background }: BlockProps) => {
  return (
    <div className={clsx(blockClassNames, { [backgroundStyles]: background })}>
      <>{children}</>
    </div>
  );
};
