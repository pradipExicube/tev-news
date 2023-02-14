const colors = {
  // primary: '#2DB552',
  // secondary: "#ffff",
  // black: '#0000',
  // white: '#ffffff',
  // borderDark: "",
  // borderLight: "",
  // borderMedium: "",
  // error:"",
  // warning:"",
  // sucess:"",
  // info:""

  primary : '#c5161d', 
  secondary : '#087ea4',  //-- use rating point, small label, some of highlight part etc
  white : '#fff',
  black : '#000',
  grey : '#d8d8d8',
  light_grey : '#f0f0f0'
};


// Light theme colors
const lightColors = {
  background: '#ffffff',
  // checklistColor: 'lightgrey',
  // homeBackground: 'white',
  // primary: '#4543D2',
  // text: '#121212',
  // placeholder: '#9B9EAA',
  // error: '#FF3B30',
  // tabBackground: '#F4F4F4',
  // cardBackground: '#E5E5E5',
  // textSecondary: '#121212',
  // textTertiary: '#000000',
  // border: '#E5E5E5',
  // buttonBackground: '#4543D2',
  // rightPaneRow: '#E5E5E5',
  // skeletonBg: '#E1E9EE',
  // skeletonHighlight: '#F2F8FC',
};

// Dark theme colors
const darkColors = {
  background: '#121212',
  // homeBackground: '#282c34',
  // checklistColor: '#7c829c',
  // primary: '#4543D2',
  // text: '#FFFFFF',
  // error: '#FF3B30',
  // tabBackground: '#222222',
  // cardBackground: '#373B4C',
  // placeholder: '#9B9EAA',
  // textSecondary: '#8A8C99',
  // textTertiary: '#CED2D9E5',
  // border: '#373B4C',
  // buttonBackground: '#373B4C',
  // rightPaneRow: '#585E77',
  // skeletonBg: '#10171E',
  // skeletonHighlight: '#15202B',
};




const sizes = {
  tiny: 10,
  sm: 12,
  h6: 13,
  h5: 16,
  h4: 18,
  h3: 20,
  h2: 22,
  h1: 24,
  large_title:32
};

const fontFamily = {
  helvetica: {
    light: 'HelveticaNeu-Light',
    normal: 'HelveticaNeu',
    medium: 'HelveticaNeu-Medium',
    bold: 'HelveticaNeu-Bold',
  },
};


const Theme = { colors, sizes, fontFamily, lightColors, darkColors };

export default Theme;