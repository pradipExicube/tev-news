import {
	View,
	Text,
	TouchableOpacity,
	Switch
} from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from '../../../constants/ThemeContext';
import { GlobalStyles, HelperFunctions, Theme } from '../../../constants';


function AccountScreen({ navigation }) {
	const styles = GlobalStyles();
	const onPress = () => HelperFunctions.sampleFunction('its working fine');
	// We're also pulling setScheme here!
	const { setScheme, isDark } = useTheme();
	const toggleScheme = () => {
		isDark ? setScheme('light') : setScheme('dark');
	}

	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={onPress}
			>
				<Text style={styles.text}>Account Screen </Text>
			</TouchableOpacity>
		</View>
	)
}

export default AccountScreen