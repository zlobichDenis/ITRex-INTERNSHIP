import { useMemo } from "react";
import { useTable, useSortBy } from 'react-table';

import { useAppSelector } from "store";
import { getUserResolutions } from "../../redux";
import { resolutionTableColumns } from "../../schemes";

export function ResolutionsList() {
  const data = useAppSelector(getUserResolutions);
  const columns = useMemo(() => resolutionTableColumns, []);

  return (
    <>
      <table>
        <th>

        </th>
      </table>
    </>
  )
}