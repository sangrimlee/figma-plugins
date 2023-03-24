import { parseHEX, parseNamedColor, parseRGBA } from '../parse';

describe('@/shared/utils/color', () => {
  describe('parseHEX', () => {
    it('should parse short HEX.', () => {
      expect(parseHEX('#123')).toEqual({
        r: 17 / 255,
        g: 34 / 255,
        b: 51 / 255,
        a: 1,
      });
    });
    it('should parse short HEX with opacity.', () => {
      expect(parseHEX('#1234')).toEqual({
        r: 17 / 255,
        g: 34 / 255,
        b: 51 / 255,
        a: 68 / 255,
      });
    });

    it('should parse long HEX.', () => {
      expect(parseHEX('#102030')).toEqual({
        r: 16 / 255,
        g: 32 / 255,
        b: 48 / 255,
        a: 1,
      });
    });

    it('should parse long HEX with opacity.', () => {
      expect(parseHEX('#10203040')).toEqual({
        r: 16 / 255,
        g: 32 / 255,
        b: 48 / 255,
        a: 64 / 255,
      });
    });

    it('should return null, if it is invalid format.', () => {
      expect(parseHEX('#12')).toBeNull();
      expect(parseHEX('#12345')).toBeNull();
      expect(parseHEX('#1234567')).toBeNull();
      expect(parseHEX('rgb(0, 0, 0)')).toBeNull();
      expect(parseHEX('rgba(0, 0, 0, 0.47)')).toBeNull();
      expect(parseHEX('lightblue')).toBeNull();
      expect(parseHEX('invalidColor')).toBeNull();
    });
  });

  describe('parseRGBA', () => {
    it('should parse rgb.', () => {
      expect(parseRGBA('rgba(10, 20, 30)')).toEqual({
        r: 10 / 255,
        g: 20 / 255,
        b: 30 / 255,
        a: 1,
      });

      expect(parseRGBA('rgba(10%, 20%, 30%)')).toEqual({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        a: 1,
      });
    });

    it('should parse rgba.', () => {
      expect(parseRGBA('rgba(10, 20, 30, 0.4)')).toEqual({
        r: 10 / 255,
        g: 20 / 255,
        b: 30 / 255,
        a: 0.4,
      });

      expect(parseRGBA('rgba(10%, 20%, 30%, 40%)')).toEqual({
        r: 0.1,
        g: 0.2,
        b: 0.3,
        a: 0.4,
      });
    });

    it('should return null, if it is invalid format.', () => {
      expect(parseRGBA('#123')).toBeNull();
      expect(parseRGBA('#123456')).toBeNull();
      expect(parseRGBA('#12345678')).toBeNull();
      expect(parseRGBA('rgb(0)')).toBeNull();
      expect(parseRGBA('rgba(0,0)')).toBeNull();
      expect(parseRGBA('lightblue')).toBeNull();
      expect(parseRGBA('invalidColor')).toBeNull();
    });
  });

  describe('parseNamedColor', () => {
    it('should parse namedColor.', () => {
      expect(parseNamedColor('red')).toEqual({
        r: 1,
        g: 0,
        b: 0,
        a: 1,
      });
      expect(parseNamedColor('transparent')).toEqual({
        r: 0,
        g: 0,
        b: 0,
        a: 0,
      });
    });

    it('should return null, if it is invalid format.', () => {
      expect(parseNamedColor('#123')).toBeNull();
      expect(parseNamedColor('#123456')).toBeNull();
      expect(parseNamedColor('#12345678')).toBeNull();
      expect(parseNamedColor('rgb(0,0,0)')).toBeNull();
      expect(parseNamedColor('rgba(0,0,0,0)')).toBeNull();
      expect(parseNamedColor('invalidColor')).toBeNull();
    });
  });
});
