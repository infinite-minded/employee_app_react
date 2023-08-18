import React from 'react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import SidebarButton from '../components/Sidebar/Sidebar-Button';
import Subheader from '../components/Subheader/Subheader';

type EmployeeLayoutPropType = {
  heading: string;
  controlButtonText: string;
  type: string;
};

const EmployeeLayout: React.FC<EmployeeLayoutPropType> = (props) => {
  return (
    <>
      <Header />
      <Sidebar>
        <SidebarButton sideMenuText='Employee list' />
      </Sidebar>
      <Subheader
        type={props.type}
        heading={props.heading}
        controlButtonText={props.controlButtonText}
      />
      {props.children}
    </>
  );
};

export default EmployeeLayout;
