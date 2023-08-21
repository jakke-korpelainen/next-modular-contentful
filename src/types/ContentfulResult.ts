import { ContentfulQueryError } from "./ContentfulQueryError";

export interface ContentfulResult<TQuery> {
  data: TQuery;
  errors: ContentfulQueryError[];
}
