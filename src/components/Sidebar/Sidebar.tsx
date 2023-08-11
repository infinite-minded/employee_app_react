import React from 'react';
import './styles.css';

const Sidebar: React.FC = (props) => {
  return <div className='sidebar'>{props.children}</div>;
};

export default Sidebar;
