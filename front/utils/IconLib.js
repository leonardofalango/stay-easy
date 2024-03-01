import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons';
import { StyleSheet, View, Text } from 'react-native';

export class IconLib {
    static air = (color = '#FF881A') => <FAIcon name="snowflake-o" key="snowflake-o" style={[styles.icon, {color: color}]} />;
    static bath = (color = '#FF881A') => <FA5Icon name="bath" key="bath" style={[styles.icon, {color: color}]} />;
    static wifi = (color = '#FF881A') => <FA5Icon name="wifi" key="wifi" style={[styles.icon, {color: color}]} />;
    static dog = (color = '#FF881A') => <FA5Icon name="dog" key="dog" style={[styles.icon, {color: color}]} />;
    static star = (i) => <AntIcon name="star" key={i} style={[styles.icon, {fontSize: 12}]} />;
}

export class NameIconLib {
    static air = () => (
        <View style={styles.container}>
            <FAIcon name="snowflake-o" key="snowflake-o" style={[styles.icon, {color: '#ccc', width: 20}]} />
            <Text style={styles.text}>Conditioned Air</Text>
        </View>
    )

    static bath = () => (
        <View style={styles.container}>
            <FAIcon name="bath" key="bath" style={[styles.icon, {color: '#ccc', width: 20}]} />
            <Text style={styles.text}>Hydromassage</Text>
        </View>
    )

    static wifi = () => (
        <View style={styles.container}>
            <FA5Icon name="wifi" key="wifi" style={[styles.icon, {color: '#ccc', width: 20}]} />
            <Text style={styles.text}>Wi-Fi</Text>
        </View>
    )

    static dog = () => (
        <View style={styles.container}>
            <FA5Icon name="dog" key="dog" style={[styles.icon, {color: '#ccc', width: 20}]} />
            <Text style={styles.text}>Allow Animals</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: { fontSize: 16, color: '#FF881A', },
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Poppins',
        fontSize: 14,
        color: '#ccc'
    }
});
