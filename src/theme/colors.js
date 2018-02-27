const ColorBuilder = (p, from, to) => {
  //[30% Lighter] percent=0.3 [30% Darker] percent=-0.3
  if (
    typeof p !== 'number' ||
    p < -1 ||
    p > 1 ||
    typeof from !== 'string' ||
    (from[0] !== 'r' && from[0] !== '#') ||
    (typeof to !== 'string' && typeof to !== 'undefined')
  )
    return null; //ErrorCheck
  if (!this.sbcRip)
    this.sbcRip = (d) => {
      let l = d.length,
        RGB = {};
      if (l > 9) {
        d = d.split(',');
        if (d.length < 3 || d.length > 4) return null; //ErrorCheck
        RGB[0] = i(d[0].slice(4));
        RGB[1] = i(d[1]);
        RGB[2] = i(d[2]);
        RGB[3] = d[3] ? parseFloat(d[3]) : -1;
      } else {
        if (l === 8 || l === 6 || l < 4) return null; //ErrorCheck
        if (l < 6) {
          d =
            '#' +
            d[1] +
            d[1] +
            d[2] +
            d[2] +
            d[3] +
            d[3] +
            (l > 4 ? d[4] + '' + d[4] : ''); //3 digit
        }

        d = i(d.slice(1), 16);
        RGB[0] = (d >> 16) & 255;
        RGB[1] = (d >> 8) & 255;
        RGB[2] = d & 255;
        RGB[3] =
          l === 9 || l === 5 ? r(((d >> 24) & 255) / 255 * 10000) / 10000 : -1;
      }
      return RGB;
    };
  let i = parseInt;
  let r = Math.round;
  let h = '';
  h =
    typeof to === 'string'
      ? to.length > 9 ? true : to === 'c' ? !h : false
      : from.length > 9;
  let b = p < 0;
  let finalP = b ? p * -1 : p;
  let finalTo = to && to !== 'c' ? to : b ? '#000000' : '#FFFFFF';
  let f = this.sbcRip(from);
  let t = this.sbcRip(finalTo);
  if (!f || !t) return null; //ErrorCheck
  if (h)
    return (
      'rgb(' +
      r((t[0] - f[0]) * finalP + f[0]) +
      ',' +
      r((t[1] - f[1]) * finalP + f[1]) +
      ',' +
      r((t[2] - f[2]) * finalP + f[2]) +
      (f[3] < 0 && t[3] < 0
        ? ')'
        : ',' +
          (f[3] > -1 && t[3] > -1
            ? r(((t[3] - f[3]) * finalP + f[3]) * 10000) / 10000
            : t[3] < 0 ? f[3] : t[3]) +
          ')')
    );
  else
    return (
      '#' +
      (
        0x100000000 +
        (f[3] > -1 && t[3] > -1
          ? r(((t[3] - f[3]) * finalP + f[3]) * 255)
          : t[3] > -1 ? r(t[3] * 255) : f[3] > -1 ? r(f[3] * 255) : 255) *
          0x1000000 +
        r((t[0] - f[0]) * finalP + f[0]) * 0x10000 +
        r((t[1] - f[1]) * finalP + f[1]) * 0x100 +
        r((t[2] - f[2]) * finalP + f[2])
      )
        .toString(16)
        .slice(f[3] > -1 || t[3] > -1 ? 1 : 3)
    );
};

const Colors = {
  White: '#FFFFFF',
  Red: '#ff0000',
  Yellow: '#ffff00',
  Black: '#000000',
  DodgerBlue: '#108ee9',
  Nepal: '#9eacbe',
  BlueZodiac: '#3c4859',
  Transparent: 'Transparent',
  Malachite: '#31E95D',
  Flamingo: '#E9585D',
  SmokeWhite: '#e8e8e8',
  Shamrock: '#34BEB7',
  GullGray: '#9FACBD'
};

export {Colors, ColorBuilder};
