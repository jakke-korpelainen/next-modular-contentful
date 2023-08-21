import { ContentfulTable } from "@/types/ContentfulTable";

import { Table } from "../Table";
import { DynamicComponentProps } from ".";

export interface DynamicSubModuleTableProps extends DynamicComponentProps {
  content: ContentfulTable;
}

export default function DynamicSubModuleTable({ id, ...props }: DynamicSubModuleTableProps) {
  const { content } = props;
  const key = `table-${id}`;
  return <Table key={key} id={`table-${id}`} data={content?.data} />;
}
