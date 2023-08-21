import { SocialIcon } from "react-social-icons";

import { ContenfulGlobalSettings } from "@/types/ContentfulGlobalSettings";

interface FooterProps {
  globalSettings: ContenfulGlobalSettings;
}

const socialKey = (id: string, socialId: string | number) => `${id}-social-${socialId}`;

export const Footer = ({ globalSettings }: FooterProps) => {
  return (
    <footer className="mt-0 flex flex-col bg-granite text-white sm:mt-10">
      <div className="2xl:max-w-screen-xl mx-auto w-full md:max-w-screen-md lg:max-w-screen-lg">
        <div className="flex flex-col justify-between gap-5 p-5 py-10 sm:flex-row xl:px-0">
          <div className="flex flex-col gap-5 sm:w-7/12">
            <p>
              This is a modular nextjs+contentful boilerplate created by{" "}
              <a href="https://jakke.fi">Jakke Korpelainen</a>
            </p>

            <ul className="font-mono">
              <li>
                Tel: <a href={`tel:${globalSettings.contactPhone}`}>{globalSettings.contactPhone}</a>
              </li>
              <li>
                Email: <a href={`mailto:${globalSettings.contactEmail}`}>{globalSettings.contactEmail}</a>
              </li>
            </ul>
            <ul className="flex gap-5">
              {globalSettings.socialLinks.map((link, index) => (
                <li key={socialKey(globalSettings.sys.id, index)}>
                  <SocialIcon target="_blank" fgColor={"white"} style={{ width: 42, height: 42 }} url={link} />
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:w-5/12">
            <ul className="flex flex-col text-left font-mono sm:gap-1 sm:text-right">
              <li className="text-gray-500">{globalSettings.name}</li>

              <li>
                <a href="https://jakke.fi">About me</a>{" "}
              </li>
              <li>
                <a href="https://nextjs.org/">NextJs</a>
              </li>
              <li>
                <a href="https://www.contentful.com/">Contentful</a>
              </li>
              <li>
                <a href="https://tailwindcss.com/">Tailwind</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
