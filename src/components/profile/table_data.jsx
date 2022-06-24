import PropTypes from 'prop-types';
import React from 'react';

const TableData = ({ name }) => (
  <tr>
    <td style={{ padding: '10px' }}>
      {name}
    </td>
  </tr>
);

TableData.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TableData;
