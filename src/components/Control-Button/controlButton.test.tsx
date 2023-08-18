import ControlButton, { ControlButtonPropType } from './Control-Button';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import * as router from 'react-router';

describe('If button works properly', () => {
  const navigate = jest.fn();

  beforeEach(() => {
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
  });
  test('If only create employee icon renders', () => {
    const ControlButtonProps: ControlButtonPropType = {
      controlButtonText: 'Control Button',
      type: 'listmenu'
    };

    render(<ControlButton {...ControlButtonProps} />);
    const plus = screen.getByTestId('plus-icon');

    expect(plus).toBeInTheDocument();
    expect(screen.queryByTestId('edit-icon')).toBe(null);
  });

  test('If only edit employee icon renders', () => {
    const ControlButtonProps: ControlButtonPropType = {
      controlButtonText: 'Control Button',
      type: 'viewmenu'
    };

    render(<ControlButton {...ControlButtonProps} />);
    const edit = screen.getByTestId('edit-icon');

    expect(screen.queryByTestId('plus-icon')).toBe(null);
    expect(edit).toBeInTheDocument();
  });
});
