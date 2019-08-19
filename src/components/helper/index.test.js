import { max_number } from './index';
import { italic } from 'ansi-colors';

describe('max_number', () => {
  describe('given an empty array', () => {
    it('returns 0', () => {
      expect(max_number([])).toEqual(0);
    });
  });
});
