import React from 'react';
import './styles.css';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

type ControlButtonPropType = {
  controlButtonText: string;
  type: string;
};

const ControlButton: React.FC<ControlButtonPropType> = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <button className='controlButton'>
      <div className='controlButtonParent'>
        {props.type === 'listmenu' && (
          <div
            className='controlButtonIcon'
            onClick={() => {
              navigate('/employees/create');
            }}
          >
            +
          </div>
        )}
        {props.type === 'viewmenu' && (
          <div
            className='controlButtonIcon'
            onClick={() => {
              navigate(`/employees/${id}/edit`);
            }}
          >
            <img className='editControlIcon' src='/assets/icons/edit-button.svg'></img>
          </div>
        )}
        {props.type === 'viewmenu' && (
          <div
            onClick={() => {
              navigate(`/employees/${id}/edit`);
            }}
            className='controlButtonBox'
          >
            {props.controlButtonText}
          </div>
        )}
        {props.type === 'listmenu' && (
          <div
            onClick={() => {
              navigate('/employees/create');
            }}
            className='controlButtonBox'
          >
            {props.controlButtonText}
          </div>
        )}
      </div>
    </button>
  );
};

export default ControlButton;
