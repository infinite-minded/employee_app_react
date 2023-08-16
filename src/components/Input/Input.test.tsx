import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Input, { InputPropTypes } from './Input';

describe('If input works properly', () => {
  test('If value is shown properly on input', () => {
    const InputProps: InputPropTypes = {
      value: 'name',
      label: 'Username',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    if (element) expect(element.getAttribute('value')).toBe('name');
  });

  test('If type text on input working', () => {
    const InputProps: InputPropTypes = {
      value: 'name',
      label: 'Username',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    if (element) expect(element.getAttribute('type')).toBe('text');
  });

  test('If type password on input working', () => {
    const InputProps: InputPropTypes = {
      value: 'name',
      label: 'Password',
      type: 'password'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    if (element) expect(element.getAttribute('type')).toBe('password');
  });
});
