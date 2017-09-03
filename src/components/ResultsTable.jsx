import React from 'react';
import PropTypes from 'prop-types';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import searchConfig from '../constants/searchConfig';

const ResultsTable = (props) => {
  const columns = searchConfig.types[props.searchType].tableColumns;

  return (
    <BootstrapTable data={props.results} className='addSideMargin'>
      {
        columns.map(
          (column, i) => (
            <TableHeaderColumn
              dataField={column.selector}
              key={column.title}
              isKey={i === 0}
              dataSort
            >
              {column.title}
            </TableHeaderColumn>
          )
        )
      }
    </BootstrapTable>
  );
};

ResultsTable.propTypes = {
  results: PropTypes.array.isRequired,
  searchType: PropTypes.number.isRequired,
};

export default ResultsTable;
