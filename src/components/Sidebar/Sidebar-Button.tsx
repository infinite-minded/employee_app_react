import React from 'react';
import './styles.css';

type SidebarPropType = {
  sideMenuText: string;
};

const SidebarButton: React.FC<SidebarPropType> = (props) => {
  const { sideMenuText } = props;

  return (
    <div className='sidemenubutton'>
      <div className='buttonIconContainer'>
        <img className='buttonIcon' src='/assets/icons/employees.svg'></img>
      </div>
      <div className='sideMenuText'>{sideMenuText}</div>
    </div>
  );
};

export default SidebarButton;
