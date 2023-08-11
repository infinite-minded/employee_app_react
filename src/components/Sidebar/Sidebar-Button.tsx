import React from 'react';
import './styles.css';

type SidebarPropType = {
  sideMenuText: string;
  //   onClick: () => void;
};

const SidebarButton: React.FC<SidebarPropType> = (props) => {
  const { sideMenuText /*onClick*/ } = props;

  return (
    <div className='sidemenubutton'>
      <img className='buttonIcon' src='assets/icons/employees.svg'></img>
      <div className='sideMenuText'>{sideMenuText}</div>
    </div>
  );
};

export default SidebarButton;
