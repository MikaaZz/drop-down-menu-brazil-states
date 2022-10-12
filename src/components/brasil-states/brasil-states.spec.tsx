import { render } from '@testing-library/react';

import BrasilStates from './brasil-states';

describe('BrasilStates', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrasilStates />);
    expect(baseElement).toBeTruthy();
  });
});
