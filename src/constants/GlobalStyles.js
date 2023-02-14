import {
    StyleSheet,
    StatusBar,
    Platform
} from 'react-native';
import Theme from './Theme';
// import Theme from './Theme';
import { useTheme } from './ThemeContext';

const GlobalStyles = () => {
  const {isDark} = useTheme();
    return StyleSheet.create({
        container: {
            flex: 1,
            paddingTop: Platform.OS === 'ios' ? StatusBar.currentHeight : 0,
            backgroundColor: isDark ? Theme.darkColors.background : Theme.lightColors.background
            // backgroundColor:Theme.colors.primary
          },
        text:{
            color:'red'
        }  
    });
};

export default GlobalStyles;