import * as React from 'react';
import { useContext, FunctionComponent, memo } from 'react';
import { TableContext } from './MineSearch';
import Td from './Td';

interface Props {
  rowIndex: number;
}

const Tr: FunctionComponent<Props> = memo(({ rowIndex }) => {
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