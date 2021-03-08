import { render } from '@shared/tests';
import { ResponsivePopover } from '@ui5/webcomponents-react/dist/ResponsivePopover';
import React from 'react';

describe('ResponsivePopover', () => {
  test('Basic Test (generated)', () => {
    const { asFragment } = render(<ResponsivePopover />);
    expect(asFragment()).toMatchSnapshot();
  });
});
