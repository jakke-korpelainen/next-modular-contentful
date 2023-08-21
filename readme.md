# next-modular-contentful

Built using the new Next.js App Router. Styled using Tailwind, and written in glorious Typescript. In my opinion, this is so far the best combination to create anything remotely maintainable and keeps the chaos at bay. Eslint, prettier, husky, and lint-staged are included. All of these are configured to work with Tailwind, Typescript and Next.js.

Accepting pull requests, feedback, and improvement suggestions.

[Demo](https://next-modular-contentful.jakke.fi/en-US/home)

## Modularity

All of the default modules are modular, customizable, and can be used or extended however you like. You can easily implement new typed modules following the existing implementations of modules in the dynamic module system. I'll try to document this a more throughly in future, for now you're on your own with exploring my "self-documenting code".

[src\app\components\DynamicContent\index.tsx](https://github.com/jakke-korpelainen/next-modular-contentful/blob/main/src/app/components/DynamicContent/index.tsx#L50)

The whole project was initially built by me for a client in ~28 hours, and since the result was so easy and modular I wanted to publish it as a boilerplate for anyone to use. With the clients permission this was possible, a big thanks to Smart Data Force.

## Installation

[Node.js 16.8](https://nodejs.org/) or later is required.

`npm install`

## Getting Started

First, run the development server:

`npm run dev`

The server will start at `http://localhost:3000`, by default the site retrieves the content from my demo space.

### How to use

- Create or sign into your a new Contentful account
- Create a new space or navigate to your existing one
- Create api keys in `https://app.contentful.com/spaces/your_space_id/api/keys`
- Use [next-modular-contentful-data](https://github.com/jakke-korpelainen/next-modular-contentful-data) to replicate the modular contentful types to your contentful space using contentful-cli
- Create & publish a Page with some modular content, and add a GlobalSettings entry in your contentful space
- Set `CONTENTFUL_*` env variables
  - in `.env.development`
  - and `.env.production`
  - add `.env.local` if you need a separate localhost env
- Configure languages to your use case
  - by adding typing to known languages into `src\types\Language.ts`
  - and setting in `src\lib\localization.ts`
    - `DEFAULT_LANGUAGE` to your default language
    - `supportedLanguages` to your contentful languages
    - `LanguageNames` to language names
    - `LanguageCodes` to language codes
- Adjust revalidation time in `src\app\[lang]\[page]\page.tsx` and `src\lib\contentful.ts`

Now your site should be ready for further customization! Let me know if you've used this boilerplate, I'd love to see what you've built.

## Useful information

### Docs of used libraries

- [Next.js](https://nextjs.org/docs)
- [Tailwind](https://tailwindcss.com/docs/installation)
- [react-social-icons docs](https://jaketrent.github.io/react-social-icons/)

### Contentful

- [Localization with Contentful](https://www.contentful.com/developers/docs/tutorials/general/setting-locales/)
- [Creating and managing API keys](https://training.contentful.com/student/page/1050378-api-keys)

### Support

If you enjoyed this project, saved some precious time or learned something new and want to thank me. I'll [happily accept some 🍕](https://www.buymeacoffee.com/jakke) since I'm too lazy to attend to any developer meetups nowadays.
