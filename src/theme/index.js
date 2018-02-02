import {Colors, ColorBuilder} from './colors';
import Sizes from './sizes';

const Primary = {
  themeColor: Colors.themeRed,
  navColor: Colors.themeYellow,
  appBackgroundColor: Colors.themeWhite,
  contentBackgroundColor: Colors.themeBlue,
  buttonBasicColor: Colors.buttonBasic,
  buttonPositiveColor: Colors.buttonPositive,
  buttonNegativeColor: Colors.buttonNegative,
  buttonHoverBasicColor: ColorBuilder(-0.1, Colors.buttonBasic),
  buttonHoverPositiveColor: ColorBuilder(-0.1, Colors.buttonPositive),
  buttonHoverNegativeColor: ColorBuilder(-0.1, Colors.buttonNegative),
  sectionBgColor: Colors.transparent,
  headerColor: Colors.themeDarkGrey,
  subHeaderColor: Colors.themeGrey,
  cardColor: Colors.smokeWhite,
  navigationHeight: Sizes.navigationHeight,
  contentMaxWidth: Sizes.contentMaxWidth
};

const Secondary = {
  themeColor: Colors.themeYellow,
  navColor: Colors.themeBlack,
  appBackgroundColor: Colors.themeWhite,
  contentBackgroundColor: Colors.themeBlue,
  buttonBasicColor: Colors.buttonBasic,
  buttonPositiveColor: Colors.buttonPositive,
  buttonNegativeColor: Colors.buttonNegative,
  buttonHoverBasicColor: ColorBuilder(-0.1, Colors.buttonBasic),
  buttonHoverPositiveColor: ColorBuilder(-0.1, Colors.buttonPositive),
  buttonHoverNegativeColor: ColorBuilder(-0.1, Colors.buttonNegative),
  sectionBgColor: Colors.transparent,
  subHeaderColor: Colors.themeGrey,
  cardColor: Colors.smokeWhite,
  navigationHeight: Sizes.navigationHeight,
  contentMaxWidth: Sizes.contentMaxWidth
};

export {Primary, Secondary};
