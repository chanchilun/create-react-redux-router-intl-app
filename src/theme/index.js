import {Colors, ColorBuilder} from './colors';
import Sizes from './sizes';

const Primary = {
  themeColor: Colors.DodgerBlue,
  navigationHeight: Sizes.navigationHeight,
  navBgColor: Colors.DodgerBlue,
  navTextColor: Colors.Nepal,
  navSelectedBorderColor: Colors.Shamrock,
  selectedNavTextColor: Colors.White,
  burgerTextColor: Colors.White,
  selectedBurgerTextColor: Colors.Nepal,
  footerBgColor: Colors.White,
  footerTextColor: Colors.GullGray,
  footerHoverColor: Colors.DodgerBlue,
  appBackgroundColor: Colors.white,
  contentBackgroundColor: Colors.DodgerBlue,
  buttonBasicColor: Colors.Shamrock,
  buttonPositiveColor: Colors.White,
  buttonNegativeColor: Colors.Flamingo,
  buttonHoverBasicColor: ColorBuilder(-0.1, Colors.Shamrock),
  buttonHoverPositiveColor: ColorBuilder(-0.1, Colors.Malachite),
  buttonHoverNegativeColor: ColorBuilder(-0.1, Colors.Flamingo),
  sectionBgColor: Colors.Transparent,
  headerColor: Colors.BlueZodiac,
  subHeaderColor: Colors.Nepal,
  cardColor: Colors.SmokeWhite
};

const Secondary = {
  themeColor: Colors.Yellow,
  navigationHeight: Sizes.navigationHeight,
  navBgColor: Colors.Red,
  navTextColor: Colors.Nepal,
  navSelectedBorderColor: Colors.Shamrock,
  selectedNavTextColor: Colors.White,
  footerBgColor: Colors.White,
  footerTextColor: Colors.GullGray,
  footerHoverColor: Colors.DodgerBlue,
  burgerTextColor: Colors.White,
  selectedBurgerTextColor: Colors.Nepal,
  appBackgroundColor: Colors.white,
  contentBackgroundColor: Colors.DodgerBlue,
  buttonBasicColor: Colors.Shamrock,
  buttonPositiveColor: Colors.Malachite,
  buttonNegativeColor: Colors.Flamingo,
  buttonHoverBasicColor: ColorBuilder(-0.1, Colors.Shamrock),
  buttonHoverPositiveColor: ColorBuilder(-0.1, Colors.Malachite),
  buttonHoverNegativeColor: ColorBuilder(-0.1, Colors.Flamingo),
  sectionBgColor: Colors.Transparent,
  subHeaderColor: Colors.Nepal,
  cardColor: Colors.SmokeWhite
};

export {Primary, Secondary, Sizes, Colors};
