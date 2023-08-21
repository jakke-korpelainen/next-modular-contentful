import {
  ModuleOneColumn,
  ModuleTwoColumn,
  SubModuleContent,
  SubModuleImageWithContent,
  SubModuleLeadingText,
  SubModuleRevealOnScroll,
  SubModuleStickyOffsetText,
  SubModuleTable,
} from "./types";

// Contentful GraphQL fields for queries
// If you want to create your own new modules, or modify/delete existing you'll need to keep them up-to-date here.

export const SUBMODULE_TABLE_FIELDS = `
sys { id }
data
`;

export const SUBMODULE_CONTENT_FIELDS = `
sys { id }
text
`;

export const SUBMODULE_LEADING_TEXT_FIELDS = `
sys { id }
text
borderDirection
textAlignment
`;

export const SUBMODULE_IMAGE_WITH_CONTENT_FIELDS = `
sys { id }
name,
image {
  url
  description
}
text
`;

export const MODULE_TWO_COLUMNS_FIELDS = `
sys { id }
name
background
leftContent {
  __typename
  ... on ${SubModuleImageWithContent} {
    ${SUBMODULE_IMAGE_WITH_CONTENT_FIELDS}
  }
  ... on ${SubModuleContent} {
    ${SUBMODULE_CONTENT_FIELDS}
  }
  ... on ${SubModuleTable} {
    ${SUBMODULE_TABLE_FIELDS}
  }
}

rightContent {
  __typename
  ... on ${SubModuleImageWithContent} {
    ${SUBMODULE_IMAGE_WITH_CONTENT_FIELDS}
  }
  ... on ${SubModuleContent} {
    ${SUBMODULE_CONTENT_FIELDS}
  }
  ... on ${SubModuleTable} {
    ${SUBMODULE_TABLE_FIELDS}
  }
}

leadingText {
  ${SUBMODULE_LEADING_TEXT_FIELDS}
}`;

export const SUBMODULE_STICKY_OFFSET_TEXT_FIELDS = `
sys { id }
text
`;

export const MODULE_ONE_COLUMN_FIELDS = `
sys { id }
name
background
columnContentCollection {
  items {
    __typename
    ... on ${SubModuleTable} {
      ${SUBMODULE_TABLE_FIELDS}
    }
    ... on ${SubModuleContent} {
      ${SUBMODULE_CONTENT_FIELDS}
    }
    ... on ${SubModuleLeadingText} {
      ${SUBMODULE_LEADING_TEXT_FIELDS}
    }
    ... on ${SubModuleImageWithContent} {
      ${SUBMODULE_IMAGE_WITH_CONTENT_FIELDS}
    }
  }
}
`;

export const SUBMODULE_REVEAL_ON_SCROLL_FIELDS = `
sys { id }
name
revealFromDirection
contentCollection {
  items {
    __typename
    ... on ${SubModuleStickyOffsetText} {
      ${SUBMODULE_STICKY_OFFSET_TEXT_FIELDS}
    }
    ... on ${ModuleOneColumn} {
      ${MODULE_ONE_COLUMN_FIELDS}
    }
    ... on ${ModuleTwoColumn} {
      ${MODULE_TWO_COLUMNS_FIELDS}
    }
  }
}
`;

export const PAGE_FIELDS = `
sys { id }
name
description
sortIndex
url
contentCollection {
  items {
    ... on ${ModuleOneColumn} {
      ${MODULE_ONE_COLUMN_FIELDS}
    }
    ... on ${ModuleTwoColumn} {
      ${MODULE_TWO_COLUMNS_FIELDS}
    }
    ... on ${SubModuleRevealOnScroll} {
      ${SUBMODULE_REVEAL_ON_SCROLL_FIELDS}
    }
    __typename
  }
}
`;

export const GLOBAL_SETTINGS_FIELDS = `
sys {
  id
}
name
logo {
  url
  description
}
contactEmail
contactPhone
socialLinks
startPage {
  url
}
`;

export const ALL_PAGES_FIELDS = `
sys { id }
url
name
sortIndex
`;
