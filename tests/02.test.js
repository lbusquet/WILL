const stringMasLarga = require('../02.js');

describe('stringMasLarga', function() {
    it('should return "guten tag"', function() {
      expect(stringMasLarga(['hi', 'hello', 'nihao', 'gutentag'])).toBe('gutentag');
    });
    it('should return "JavaScript"', function() {
      expect(stringMasLarga(['JavaScript', 'HTML', 'CSS'])).toBe('JavaScript');
    });
  });