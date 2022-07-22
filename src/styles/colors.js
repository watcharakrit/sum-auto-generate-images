/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * Config - color
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import Color from 'color'

const base = {
  black: '#343434',
  gray: '#848484',
  grayDark: '#535353',
  gray100: '#F5F5F5',
  gray150: '#E8E8E8',
  gray200: '#D9DBD9',
  gray300: '#C0C2C0',
  gray400: '#A7A8A7',
  gray500: '#8D8F8D',
  gray600: '#727572',
  gray700: '#585C59',
  gray800: '#3E423F',
  gray900: '#252926',
  gray1000: '#39473F',
  orange: '#F26524',
  orange100: '#FEECE4',
  orange150: '#FDDDCE',
  orange250: '#FBBEA7',
  orange300: '#F69273',
  orange400: '#F47535',
  orange500: '#F26524',
  darkGreen: '#6F9F32',
  darkGreen100: '#346832',
  green: '#3BAC8F',
  green50: '#F4FAEB',
  green100: '#ECF2E3',
  green200: '#DEE9CE',
  green300: '#B9D191',
  green400: '#96BC58',
  green500: '#7FB036',
  green600: '#76A332',
  green900: '#48631F',
  green1000: '#D0CE38',
  gonGreen: '#488541',
  gonGreenHighlight: '#8DB64F',
  yellow: '#F2AE0F',
  yellow100: '#FFF5E4',
  yellow400: '#FFCF67',
  yellow500: '#FEBE10',
  yellow600: '#F2AE0F',
  lightBlue: '#9DD2E2',
  lightBlueBg: '#F1F8FB',
  lightBrown: '#DACCBF',
  navy: '#00324D',
  blue: '#3D97A8',
  blue100: '#E5F3F8',
  blue300: '#93C8D2',
  blue500: '#00416B',
  brown100: '#ECE5DF',
  brown500: '#AF7A3B',
  red100: '#FFEAEC',
  red: '#D92138',
  purple100: '#ECDDF1',
  purple500: '#85439A',
  Matcha: '#B9D191', // ซอสกะเพรา
  MatchaLatte: '#DEE9CE', // น้ำสลัดกะเพรา
  Ovaltine: '#F1D6CE', // แจ่ว
  Latte: '#E9D4BB', // มิโซะ/มัสมั่น
  MangoSmoothie: '#FFE8BA', // ไข่เค็ม/มะขาม
  ThaiTea: '#FBBEA7', // ต้มยำ
  ThaiTeaLatte: '#FDDDCE', // น้ำสลัด
  StrawberrySmoothie: '#EDB9D0', // น้ำยำ
  Mojito: '#CEE2DB', // เขียวหวาน
  SoyMilk: '#FDEFE1', // น้ำสลัดเต้าหู้
  ButterflyPeaLatte: '#EBE3F3', // ขนม
  BlueLagoon: '#C7ECF8', // น้ำ
  Wheatgrass: '#95BF9E', // ซอสกะเพรา
  WheatgrassSmoothie: '#BDE0C4', // น้ำสลัดกะเพรา
  TomatoJuice: '#FFCCCC',
}

const colors = {
  // primary: base.gonGreen,
  primaryHover: Color(base.gonGreen).lighten(0.2).hex(),
  // primaryBg: Color(base.gonGreen).darken(0.1),
  second: base.gonGreenHighlight,
  secondHover: Color(base.gonGreenHighlight).lighten(0.2).hex(),
  warning: base.orange500,
  notice: base.yellow500,
  information: base.lightBlue,
  textBlack: base.black,
  textGray: base.gray,
  grayDark: base.grayDark,
  grayDisabled: '#B7B7B7',
  bgGray: '#EAEAEA',
  bgGrayContent: '#fcfcfc',
  errorBg: '#FBE9EB',
  discountLabel: '#FFD860',
  ...base,

  primary: '#0E9755',
  secondary: '#7FB036',
  secondaryLight: '#FDFFFB',
  tertiary: '#76BC21',
  highlight: '#F1F8E8',
  price: '#FA7C42',
  error: '#EB5757',
  errorDark: '#D82424',
  errorHover: Color('#EB5757').lighten(0.2).hex(),
  errorLight: '#FADFDF',
  errorBgLight: '#FFFAFA',
  warningBase: '#FBBC19',
  warningLight: '#FFFCF3',
  success: '#67AE21',
  white: '#FFFFFF',
  base: '#333333',
  darkGrey: '#828282',
  baseGrey: '#B9B9B9',
  infoBase: '#2E8CE2',
  infoLight: '#F5FAFF',
  infoDark: '#1662A8',
  lightGrey: '#EBEBEB',
  veryLightGrey: '#F6F6F6',
  successLight: '#F8FFF4',
  successLightBg: '#def3d4',
  successDark: '#4C9306',
  bgColor: '#FAFAFA',
  accent: '#F5EA61',
  borders: '#E0E0E0',
}

export default colors
