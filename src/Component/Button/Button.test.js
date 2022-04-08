import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';
import Button from './Button';

it('rendering the button', () => {
  const {container} = render(<Button />);
  expect(container.firstChild).toHaveClass('dummyButton')
});