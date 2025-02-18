import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import DynamicText from './DynamicText';

describe('DynamicText', () => {
  it('renders DynamicText component with text prop', () => {
    render(<DynamicText text='Some text'/>);
    const visibleEl = screen.getByText('Some text');
    expect(visibleEl).toBeInTheDocument();
    expect(visibleEl.classList.contains('dynamicTextContainer')).toBe(true);
  });
  it('renders DynamicText component without text prop', () => {
    render(<DynamicText />);
    const visibleEl = screen.getByText('Dummy!');
    expect(visibleEl).toBeInTheDocument();
    expect(visibleEl.classList.contains('dynamicTextContainer')).toBe(true);
  });
});