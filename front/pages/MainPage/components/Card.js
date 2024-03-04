import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { IconLib } from '../../../utils/IconLib';
const hotelImg = require('../../../assets/hotel.png');
const airImg = require('../../../assets/icons/air.png');
const bedImg = require('../../../assets/icons/bed.png');
const wifiImg = require('../../../assets/icons/wifi.png');
const bathImg = require('../../../assets/icons/bath.png');
const peopleImg = require('../../../assets/icons/people.png');
const star = require('../../../assets/icons/star.png');

export default function Card(props) {
    const navigation = useNavigation();

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < props.stars; i++)
            stars.push(<AntIcon name="star" key={i} style={[styles.icon, {fontSize: 12}]} />);
        
        return stars;
    }

    return (
        <TouchableOpacity style={styles.box} onPress={() => navigation.navigate('offer', props.id)}>
            <View style={styles.imgBox}>
                <Image source={hotelImg} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderBottomLeftRadius: 16, borderTopLeftRadius: 16 }} />
            </View>
            <View style={styles.infoBox}>
                <View style={styles.info}>
                    <Text style={styles.name}>{props.hotel}</Text>
                    <Text style={styles.destination}>{props.destination}</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.simpleDetails}>
                        { props.amenities.map((amenity) => IconLib[amenity]()) }
                    </View>
                    <View style={styles.detail}>
                        <FA5Icon name="bed" style={[styles.icon, {fontSize: 12}]} />
                        <Text style={styles.detailText}>{props.bed}</Text>
                    </View>
                    <View style={styles.detail}>
                        <MaterialIcon name="people-alt" style={[styles.icon, {fontSize: 15}]} />
                        <Text style={styles.detailText}>{props.people} people</Text>
                    </View>
                </View>
                <View style={styles.bottom}>
                    <View style={styles.stars}>
                        {renderStars()}
                    </View>
                    <View style={styles.priceBox}>
                        <Text style={styles.price}>US$ {props.price}</Text>
                        <Text style={styles.perday}>per day</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    simpleDetails: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: '8px',
        flexWrap: 'wrap'
    },
    box: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#3A3A3A',
        minHeight: '12rem',
        borderRadius: 16,
    },
    imgBox: {
        width: '40%',
        height: '100%',
    },
    infoBox: {
        width: '60%',
        height: '100%',
        paddingVertical: '6px',
        paddingHorizontal: '8px',
    },
    info: {
        display: 'flex',
        width: '100%',
    },
    name: {
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#FF881A'
    },
    destination: {
        fontFamily: 'Poppins',
        fontSize: '12px',
        fontWeight: 300,
        color: '#eee'
    },
    details: {
        width: '100%',
        display: 'flex',
        gap: '8px',
        marginTop: '1rem',
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '6px',
        width: 'auto',
        height: '1rem'
    },
    detailText: {
        color: '#ddd',
        fontFamily: 'Poppins',
        fontSize: '0.75rem'
    },
    bottom: {
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12
    },
    priceBox: {
        alignItems: 'flex-end',
        height: '100%'
    },
    price: {
        fontFamily: 'Poppins',
        color: '#fff',
        fontWeight: '500',
        fontSize: '1.25rem',
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
        marginTop: '20px'
    },
    perday: {
        color: '#ABABAB',
        fontFamily: 'Poppins'
    },
    icon: { fontSize: 16, color: '#FF881A' },
    
});