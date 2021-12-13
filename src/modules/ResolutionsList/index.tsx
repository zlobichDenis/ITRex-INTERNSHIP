import { useMemo } from "react";
import { useTable, usePagination } from 'react-table';
import Loader from "react-loader-spinner";

import { FetchStatus } from "const";
import { BackArrowSvg, RightArrowSvg } from "assets";
import {
  ResolutionTable,
  ResolutionTableHead,
  ResolutionTableHeadRow,
  ResolutionTableHeaderCell,
  ResolutionTableRow,
  ResolutionTableCell,
  ResolutionTablePaginationButtonsContainer,
  ResolutionTablePaginationButton,
  ResolutionTableContainer
} from "./styles";
import { resolutionTableColumns, RESOLUTION_TABLE_PAGE_SIZE } from "./schemes";
import { useFetchResolutions } from "./hooks";
import { createResolutionsTableData, createVisiblePagination } from "./helpers";

export type ResolutionTableData = {
  col1: string,
  col2: string,
  col3: string,
  col4: string,
  col5: string,
}

export function ResolutionsList() {
  const { resolutions, fetchStatus, roleName } = useFetchResolutions();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const columns = useMemo(() => resolutionTableColumns, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => createResolutionsTableData(resolutions, roleName), [fetchStatus]);

  const pagesCount = Math.ceil(data.length / RESOLUTION_TABLE_PAGE_SIZE)
  const visiblePagination = createVisiblePagination(pagesCount);

  const initialState = {
    pageCount: pagesCount,
    pageIndex: 0,
    pageSize: 8,
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable<any>({ columns, data, initialState: initialState }, usePagination);


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
      <>
        <ResolutionTableContainer>
          <ResolutionTable {...getTableProps()}>
            <ResolutionTableHead>
            {headerGroups.map(headerGroup => (
              <ResolutionTableHeadRow {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <ResolutionTableHeaderCell {...column.getHeaderProps()}>
                    {column.render('Header')}
                  </ResolutionTableHeaderCell>
                ))}
              </ResolutionTableHeadRow>
            ))}
            </ResolutionTableHead>
            <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row)
              return (
                <ResolutionTableRow {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return <ResolutionTableCell {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </ResolutionTableCell>
                  })}
                </ResolutionTableRow>
              )
            })}
            </tbody>
          </ResolutionTable>
        </ResolutionTableContainer>

        <ResolutionTablePaginationButtonsContainer>
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            <img src={BackArrowSvg} width="7" height="14" alt="icon"/>
          </button>
          <div>
            {visiblePagination
              .map((paginationNumber) => (
              <ResolutionTablePaginationButton
                onClick={() => gotoPage(paginationNumber - 1)}
                isActive={paginationNumber === pageIndex + 1}
                key={`pagination-button-${paginationNumber}`}>
                {paginationNumber}
              </ResolutionTablePaginationButton>
            ))}
          </div>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            <img src={RightArrowSvg} width="7" height="14" alt="icon"/>
          </button>
        </ResolutionTablePaginationButtonsContainer>
      </>
    )
  }
}