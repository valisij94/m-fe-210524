import { chooseCallback, duplicate, customForEach } from "./complexUtils";

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

describe(
  'Test "chooseCallback" function',
  () => {
    // Делаем т.н. "моки" - то есть липовые функции (заглушки)
    let firstCallback;
    let secondCallback;
    beforeEach( () => {
      firstCallback = jest.fn();
      secondCallback = jest.fn();
    })
    it('Check first callback', () => {
      // вызываем нашу функцию, которую мы хотим протестировать
      chooseCallback(firstCallback, secondCallback, 'first');
      // проверяем, что первый колбэк был вызван хотя бы 1 раз
      expect(firstCallback).toBeCalled();
      // проверяем что второй колбэк не был вызван совсем
      expect(secondCallback).not.toBeCalled();
    });

    it('Check second callback', () => {
      // вызываем нашу функцию, которую мы хотим протестировать
      chooseCallback(firstCallback, secondCallback, 'second');
      // проверяем, что первый колбэк был вызван хотя бы 1 раз
      expect(firstCallback).not.toBeCalled();
      // проверяем что второй колбэк не был вызван совсем
      expect(secondCallback).toBeCalled();
      expect(secondCallback).toHaveBeenCalledTimes(1);
    });
  }
);

/*
const customForEach = (array, callback) => {
  if (Array.isArray(array)) {
    array.forEach(callback);
    return 'Success';
  }
  else return 'Cannot iterate over non-array instance'
}
*/

describe(
  'Test customForEach function',
  () => {
    it( 'Incorrect array', () => {
      const result = customForEach(null);
      expect(result).toBe('Cannot iterate over non-array instance');
    });
    it( 'Correct callback', () => {
      const testArray = [1,2,3];
      const testCallback = jest.fn();
      const result = customForEach(testArray, testCallback);
      expect(result).toBe('Success');
      expect(testCallback).toHaveBeenCalledTimes(testArray.length);
    })
  }
);