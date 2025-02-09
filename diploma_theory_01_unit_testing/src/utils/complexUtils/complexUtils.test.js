import { duplicate } from "./complexUtils";

describe(
  'Test "duplicate" function',
  () => {
    it( 'Check numbers duplication', () => {
      expect(duplicate([1,2,3])).toEqual([2,4,6]);
    });

    it( 'Check strings duplication', () => {
      expect(duplicate(['1','2','3'])).toEqual(['11','22','33']);
    });

    it( 'Check non-number and non-string args', () => {
      expect(duplicate([1,'2',true,{}])).toEqual([2, '22', null, null]);
    })
  }
);