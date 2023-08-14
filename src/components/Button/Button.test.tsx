import Button, { ButtonPropTypes } from './Button';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('If button works properly', () => {
  test('If label rendering correctly', () => {
    const ButtonProps: ButtonPropTypes = {
      text: 'Button',
      type: 'button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    if (element) expect(element).toHaveTextContent('Button');
    //or if need to get attributes of a particular html element
    //use element.getAtrribute('attributename')
  });

  test('If button type is correct', () => {
    const ButtonProps: ButtonPropTypes = {
      text: 'Button',
      type: 'button'
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    if (element) expect(element.getAttribute('type')).toBe('button');
  });

  test('If onClick is triggered', () => {
    const onClick = jest.fn();
    const ButtonProps: ButtonPropTypes = {
      text: 'Button',
      type: 'button',
      onClick
    };

    render(<Button {...ButtonProps} />);
    const element = screen.getByTestId('button-test');

    fireEvent.click(element);
    expect(onClick).toBeCalledTimes(1);
  });
});
