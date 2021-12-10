import { useMemo } from "react";
import { useTable, useSortBy, TableOptions, usePagination } from 'react-table';
import Loader from "react-loader-spinner";

import { FetchStatus } from "const";
import {
  ResolutionTable,
  ResolutionTableHead,
  ResolutionTableHeadRow,
  ResolutionTableHeaderColumn,
  ResolutionTableRow,
  ResolutionTableCell
} from "./styles";
import { resolutionTableColumns } from "../../schemes";
import { useFetchResolutions } from "../../hooks";
import { createResolutionsTableData } from "../../helpers";

export type ResolutionTableData = {
  col1: string,
  col2: string,
  col3: string,
  col4: string,
  col5: string,
}

export function ResolutionsList() {
  const { resolutions, fetchStatus, roleName } = useFetchResolutions();
  const columns = useMemo(() => resolutionTableColumns, []);
  const data = useMemo(() => createResolutionsTableData(resolutions, roleName), [fetchStatus]);

  const initialState: any = {
    pageIndex: 1,
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable<any>({ columns, data, initialState }, useSortBy, usePagination);

//TODO implement pagination and buttons

  if (fetchStatus === FetchStatus.PENDING) {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}/>
    )
  } else {
    return (
      <ResolutionTable>
        <ResolutionTableHead>
          {headerGroups.map(headerGroup => (
            <ResolutionTableHeadRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <ResolutionTableHeaderColumn
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </ResolutionTableHeaderColumn>
              ))}
            </ResolutionTableHeadRow>
          ))}
        </ResolutionTableHead>
        <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row)
          return (
            <ResolutionTableRow {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <ResolutionTableCell
                    {...cell.getCellProps()}
                  >
                    {cell.render('Cell')}
                  </ResolutionTableCell>
                )
              })}
            </ResolutionTableRow>
          )
        })}
        </tbody>
      </ResolutionTable>
    )
  }
}