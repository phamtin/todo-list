import React from 'react';
import { DeleteOutlined } from '@ant-design/icons';

import './options.scss';

const Options = ({ del }) => {
  const deleteItem = () => del();

  return (
    <div className="options">
      <DeleteOutlined
        style={{ fontSize: '22px', padding: '10px', color: '#ef2828' }}
        onClick={deleteItem}
      />
    </div>
  );
};

export default Options;
