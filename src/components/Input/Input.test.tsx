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
});
