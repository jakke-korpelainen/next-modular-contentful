/* customize these as you want */

export const blockHeading = "text-3xl lg:text-4xl xl:text-4xl tracking-wide font-sans font-black uppercase";

export const blockSubheading = "text-xl tracking-wide font-sans font-black uppercase";

export const leftClass = `
  prose text-base lg:text-lg
`;

export const rightClass = `
  prose
`;

/**
 * See https://tailwindcss.com/docs/typography-plugin
 * for prose documentation
 */
export const proseDefaultClasses = `
  ${leftClass} 
  ${rightClass}

  h-full
  prose-p:font-sans
  prose-p:tracking-wide
  prose-p:text-base

  prose-ol:flex
  prose-ol:flex-col
  prose-ol:font-mono
  prose-ol:text-base
  prose-ol:gap-2

  prose-strong:text-xl
  prose-strong:font-heading
  prose-strong:uppercase
  prose-strong:font-black
  prose-strong:text-heading

  prose-h3:text-heading
  prose-h3:text-3xl 
  prose-h3:lg:text-4xl 
  prose-h3:xl:text-4xl 
  prose-h3:tracking-wide 
  prose-h3:font-heading 
  prose-h3:font-black 
  prose-h3:uppercase

  prose-h4:text-heading
  prose-h4:text-xl 
  prose-h4:tracking-wide 
  prose-h4:font-heading
  prose-h4:font-black
  prose-h4:uppercase

  prose-h5:text-black
  prose-h5:ml-10
  prose-h5:font-normal
  prose-h5:text-sm
  prose-h5:font-mono
`;
