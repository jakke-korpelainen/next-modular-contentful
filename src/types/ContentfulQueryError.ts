export interface ContentfulQueryError {
  message: string;
  locations: { line: number; column: number }[];
  path: string[];
  extensions: {
    contentful: {
      code: string;
      requestId: string;
    };
  };
}
