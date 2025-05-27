export function persianToEnglish(n: string | number): number {
  if (typeof n === 'number') return n;
  const persianDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return Number(n.replace(
    /[۰-۹]/g,
    (d: string) => englishDigits[persianDigits.indexOf(d)]
  ));
}

export const toFarsiDigits = function (str: string) {
  return str.replace(/[0-9]/g, function (w: string | number) {
    var persian = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
    return persian[Number(w)];
  });
};
