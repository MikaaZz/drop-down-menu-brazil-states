import { render } from '@testing-library/react';

import BrasilCitys from './brasil-cities';

describe('BrasilCitys', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BrasilCitys />);
    expect(baseElement).toBeTruthy();
  });
});
