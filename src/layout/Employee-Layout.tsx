import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarButton from '../components/Sidebar/Sidebar-Button';
import Subheader from '../components/Subheader/Subheader';

const EmployeeLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      <Sidebar>
        <SidebarButton sideMenuText='Employee list' />
      </Sidebar>
      <Subheader />
      {props.children}
    </>
  );
};

export default EmployeeLayout;
