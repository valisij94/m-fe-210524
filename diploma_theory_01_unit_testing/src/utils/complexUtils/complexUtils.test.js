import { duplicate, getItemTypes } from "./complexUtils";

describe(
  'Test "duplicate" function',
  () => {
    it( 'Check numbers duplication', () => {
      expect(duplicate([1,2,3])).toEqual([2,4,6]);
    });

    it( 'Check strings duplication', () => {
      expect(duplicate(['1','2','3'])).toEqual(['11','22','33']);
    });
  }
);

describe('Test "getItemTypes" function', () => {
  it('Check numbers', () => {
    expect(getItemTypes([1, 2, 3])).toEqual({ numberCnt: 3 });
  });

  it('Check strings', () => {
    expect(getItemTypes(['1', '2', '3'])).toEqual({ strCnt: 3 });
  });

  it('Check strings and numbers', () => {
    expect(getItemTypes(['1', '2', 3])).toEqual({ strCnt: 2, numberCnt: 1 });
  });

  it('Check arrays', () => {
    expect(getItemTypes([['1'], ['2'], [3]])).toEqual({ arrayCnt: 3 });
  });

  it('Check empty array', () => {
    expect(getItemTypes([])).toEqual({});
  })
});