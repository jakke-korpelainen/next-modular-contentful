import Link from "next/link";

import { FallbackPageLink } from "@/app/components/FallbackPageLink";
import { blockHeading } from "@/lib/classes";

export default function NotFoundPage() {
  return (
    <div className="flex grow flex-col justify-center gap-5 tracking-wide">
      <h1 className={blockHeading}>404 - Page Not Found</h1>
      <p className="text-xl">
        The page you are looking for does not exist. It may not be available in the language you've requested, have been
        moved, or removed altogether. You can try <FallbackPageLink /> heading to the <Link href="/">homepage</Link>.
      </p>
    </div>
  );
}
