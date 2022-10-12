import { render } from '@testing-library/react';

import Ibge from './ibge';

describe('Ibge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Ibge />);
    expect(baseElement).toBeTruthy();
  });
});
