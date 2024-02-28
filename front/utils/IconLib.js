import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons';
import { StyleSheet } from 'react-native';

export class IconLib {
    static air = (color = '#FF881A') => <FAIcon name="snowflake-o" key="snowflake-o" style={[styles.icon, {color: color}]} />;
    static bath = (color = '#FF881A') => <FA5Icon name="bath" key="bath" style={[styles.icon, {color: color}]} />;
    static wifi = (color = '#FF881A') => <FA5Icon name="wifi" key="wifi" style={[styles.icon, {color: color}]} />;
    static dog = (color = '#FF881A') => <FA5Icon name="dog" key="dog" style={[styles.icon, {color: color}]} />;
    static star = (i) => <AntIcon name="star" key={i} style={[styles.icon, {fontSize: 12}]} />;
}

const styles = StyleSheet.create({
    icon: { fontSize: 16, color: '#FF881A' },
});