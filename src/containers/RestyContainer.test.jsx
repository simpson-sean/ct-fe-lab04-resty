import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RestyContainer from './RestyContainer';

describe('RestyContainer', () => {
  it('should display a controls section and a display section', async () => {
    render(<RestyContainer />);
    const controls = screen.getByTestId('controls');
    expect(controls).not.toBeEmptyDOMElement();

    const url = await screen.findByPlaceholderText('Enter URL');
    userEvent.type(url, 'http://futuramaapi.herokuapp.com/api/quotes');

    const get = await screen.findByText('GET');
    userEvent.click(get);

    });
});
