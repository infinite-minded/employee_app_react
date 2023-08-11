import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import React from 'react';
import SidebarButton from '../../components/Sidebar/Sidebar-Button';

const style = {
  padding: '0px',
  margin: '0px'
};

const ListEmployee: React.FC = () => {
  return (
    <div style={style}>
      <Header />
      <Sidebar>
        <SidebarButton sideMenuText='Employee list' />
      </Sidebar>
    </div>
  );
};

export default ListEmployee;
