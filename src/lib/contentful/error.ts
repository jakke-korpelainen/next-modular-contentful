import { ContentfulQueryError } from "@/types/ContentfulQueryError";
import { ContentfulResult } from "@/types/ContentfulResult";

export class ContentfulError extends Error {
  constructor(name: string, description: string) {
    super(`${name}\r\n ${description}`);
  }
}

const collectLocations = (locations: { line: number; column: number }[]) =>
  locations
    ? locations.map((location, index) => `\r\n  ${index}: line ${location.line} column ${location.column}`).join("")
    : "";

const collectErrorMessage = (error: ContentfulQueryError) =>
  `Reason: ${error.message}. \r\n Query ${error.path?.join(",")} ${collectLocations(error.locations)} `;

export const collectErrors = <TQuery>(result: ContentfulResult<TQuery>) => {
  if (result.errors) {
    const errorName = result.errors?.[0].extensions?.contentful?.code;
    const errorMessage = result.errors.map(collectErrorMessage).join(",");

    throw new ContentfulError(errorName, errorMessage);
  }
  return result;
};
