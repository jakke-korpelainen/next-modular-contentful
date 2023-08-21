import { Block } from "./Block";
import { LeadingText, LeadingTextProps } from "./LeadingText";

interface TwoColumnProps extends LeadingTextProps {
  background: boolean;
  heading: React.ReactNode;
  left: React.ReactNode;
  right: React.ReactNode;
}

export const TwoColumn = ({ background, heading, left, right, ...leadingTextProps }: TwoColumnProps) => {
  return (
    <Block background={background}>
      <div className="flex grow flex-col gap-20 pb-10">
        <LeadingText {...leadingTextProps}>{heading}</LeadingText>

        <div className="flex h-full grow flex-col gap-20 tracking-wide lg:flex-row">
          <div className="min-h-full w-full flex-1 flex-col gap-10 text-base lg:text-lg">{left}</div>
          <div className="min-h-full w-full flex-1 flex-col gap-5 ">{right}</div>
        </div>
      </div>
    </Block>
  );
};
