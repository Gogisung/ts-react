import * as React from 'react';
import { useContext } from 'react';
import { TableContext } from './MineSearch';
import Tr from './tr';

const Table = () => {
  const { tableData } =  useContext(TableContext);
  return (
    <table>
      <body>
        {Array(tableData.length).fill(null).map((tr, i) => <Tr key={i} rowIndex={i}/>)}
      </body>
    </table>
  )
}

export default Table;