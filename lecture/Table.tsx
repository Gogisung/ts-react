import * as React from 'react';
import { useMemo, FC, Dispatch} from 'react';
import Tr from './tr';

interface Props {
  tableData: string[][];
  dispatch: Dispatch<any>
}

const Table: FC<Props> = ({ tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length).fill(null).map((tr, i) => (
        useMemo(
          () => <Tr key={i} dispatch={dispatch} rowIndex={i} rowData={tableData[i]} />,
          [tableData[i]],
        )
      ))}
    </table>
  )
}

export default Table;