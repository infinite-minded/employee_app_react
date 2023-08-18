import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Input, { InputPropTypes } from './Input';

describe('If input works properly', () => {
  test('If value is shown properly on input', () => {
    const InputProps: InputPropTypes = {
      value: 'name',
      label: 'Email',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    if (element) expect(element.getAttribute('value')).toBe('name');
  });

  test('If type text on input working', () => {
    const InputProps: InputPropTypes = {
      value: 'name',
      label: 'Email',
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

  test('If label displays properly when no value given', () => {
    const InputProps: InputPropTypes = {
      value: '',
      label: 'Email',
      type: 'text'
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('label-test');

    if (element) expect(element.innerHTML).toBe('Email');
  });

  test('If onKeyPress is triggered', () => {
    const onKeyPress = jest.fn();
    const InputProps: InputPropTypes = {
      value: '',
      label: 'Email',
      type: 'text',
      onKeyPress
    };

    render(<Input {...InputProps} />);
    const element = screen.getByTestId('input-test');

    fireEvent.keyPress(element);
    expect(onKeyPress).toBeCalledTimes(1);
  });
});
