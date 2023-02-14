import {
  View,
  Text,
  TouchableOpacity,
  Switch
} from 'react-native';
import React from 'react'
import {
  GlobalStyles,
  HelperFunctions,
  Theme
} from '../../constants'
import { useTheme } from '../../constants/ThemeContext';

import Icon from 'react-native-vector-icons/Ionicons';


function Courier({ navigation }) {

  const styles = GlobalStyles();

  const onPress = () => HelperFunctions.sampleFunction('its working fine');

  // We're also pulling setScheme here!
  const {setScheme, isDark} = useTheme();

  const toggleScheme = () => {
      /*
      * setScheme will change the state of the context
      * thus will cause childrens inside the context provider to re-render
      * with the new color scheme
      */
      isDark ? setScheme('light') : setScheme('dark');
  }
 
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
      >
        <Text style={styles.text}>Press Here</Text>
      </TouchableOpacity>
      <View>
      <Switch value={isDark}  onValueChange={toggleScheme}/>

      <Icon name="checkmark-circle" size={20} style={{color:'#299c71'}} />
      </View>
    </View>
  )
}

export default Courier