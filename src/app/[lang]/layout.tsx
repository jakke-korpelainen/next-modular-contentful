import { ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
}

/**
 * Pass-through layout
 */
export default function LangLayout({ children }: LayoutProps) {
  return children;
}
