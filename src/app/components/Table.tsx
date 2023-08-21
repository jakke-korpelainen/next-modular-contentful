import clsx from "clsx";

const hoverScaleTransition =
  "bg-orange/[0.75] select-none transition duration-200 hover:z-10 hover:scale-105 hover:bg-orange";

// TODO: Make a smart render function instead of this dupe code mess

const getTableKey = (
  id?: string | number,
  rowId?: string | number,
  cellId?: string | number,
  subCellId?: string | number,
  subCellItemId?: string | number,
) => {
  let key = `${id}`;

  if (rowId) {
    key += `-row-${rowId}`;
  }
  if (cellId) {
    key += `-cell-${cellId}`;
  }
  if (subCellId) {
    key += `-subCell-${subCellId}`;
  }
  if (subCellItemId) {
    key += `-item-${subCellItemId}`;
  }

  return key;
};

const renderTableSubCell = (
  tableId: string,
  rowIndex: number,
  cellIndex: number,
  subCellIndex: number,
  cell: string[],
) => {
  return (
    <>
      <p>{cell[0]}</p>
      <ul>
        {cell.slice(1).map((item, index) => (
          <li key={getTableKey(tableId, rowIndex, cellIndex, subCellIndex, index)}>{item}</li>
        ))}
      </ul>
    </>
  );
};

const renderTableCell = (tableId: string, rowIndex: number, cellIndex: number, cell: string[][]) => {
  const isArray = Array.isArray(cell);

  if (!isArray) {
    return cell;
  }

  return (
    <>
      <p>{cell[0]}</p>

      <div className="flex flex-col justify-evenly gap-5 md:flex-row md:gap-0">
        {cell.slice(1).map((item, subCellIndex) => (
          <div key={getTableKey(tableId, rowIndex, cellIndex, subCellIndex)}>
            {renderTableSubCell(tableId, rowIndex, cellIndex, subCellIndex, item)}
          </div>
        ))}
      </div>
    </>
  );
};

const rowClasses = clsx("flex grow flex-col gap-5 p-5 lg:w-full", hoverScaleTransition);
const renderTableRow = (tableId: string, rowIndex: number, row: string[][]) => {
  const isArray = Array.isArray(row);

  if (!isArray) {
    return (
      <div key={getTableKey(tableId, rowIndex)} className={rowClasses}>
        {row}
      </div>
    );
  }

  return row.map((cell: any, cellIndex: number) => (
    <div key={getTableKey(tableId, rowIndex, cellIndex)} className={rowClasses}>
      {renderTableCell(tableId, rowIndex, cellIndex, cell)}
    </div>
  ));
};

interface TableProps {
  id: string;
  data: any;
}

export const Table = ({ id, data }: TableProps) => {
  if (!data) {
    return null;
  }

  return (
    <div className="2xl:w-8/12 flex h-full w-full flex-col justify-center gap-2 self-end font-mono text-white">
      {data.map((row: any, rowIndex: number) => (
        <div key={getTableKey(id, rowIndex)} className="flex flex-wrap justify-evenly gap-2 lg:flex-nowrap">
          {renderTableRow(id, rowIndex, row)}
        </div>
      ))}
    </div>
  );
};
