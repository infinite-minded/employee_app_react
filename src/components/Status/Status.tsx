import React from 'react';
import './styles.css';

type StatusPropType = {
  type: boolean;
};

const Status: React.FC<StatusPropType> = (props) => {
  const { type } = props;

  return (
    <>
      {type && <div className='activeStatus'>Active</div>}
      {!type && <div className='inactiveStatus'>Inactive</div>}
    </>
  );
};

export default Status;
