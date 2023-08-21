import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavigationLinkProps {
  name: string;
  language: string;
  url: string;
}

const linkClass = "font-heading text-xl sm:text-2xl font-extrabold uppercase font-bold";
const activeClass = "border-b-4 border-white";

export const NavigationLink = ({ name, language, url }: NavigationLinkProps) => {
  const pathname = usePathname();
  const href = `/${language}/${url}`;
  const isActive = href === pathname;
  const className = isActive ? `${activeClass} ${linkClass}` : `${linkClass}`;

  return (
    <li>
      <Link href={href} className={className}>
        {name}
      </Link>
    </li>
  );
};
