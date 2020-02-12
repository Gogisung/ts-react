import * as React from 'react';
import { Dispatch, useContext, FC, memo } from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

interface Props {
  rowData: string[];
  rowIndex: number;
  dispatch: Dispatch<any>;
}

const Tr: FC<Props> = memo(({ rowData, rowIndex, dispatch }) => {
  const { tableData } = useContext(TableContext);

  return (
    <tr>
      {tableData[0] && Array(tableData[0].length).fill(null).map((td, i) => 
        <Td key={i} rowIndex={rowIndex} cellIndex={i}></Td>
      )}
    </tr>
  );
});

export default Tr;