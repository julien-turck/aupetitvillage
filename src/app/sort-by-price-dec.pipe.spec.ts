import { SortByPriceDecPipe } from './sort-by-price-dec.pipe';

describe('SortByPriceDecPipe', () => {
  it('create an instance', () => {
    const pipe = new SortByPriceDecPipe();
    expect(pipe).toBeTruthy();
  });
});
