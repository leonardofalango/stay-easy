import { View, StyleSheet, Text } from "react-native";
import { IconLib, NameIconLib } from "../../../utils/IconLib";
import FA5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

export default function RoomDetails({ data }) {
    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < data.stars; i++)
            stars.push(IconLib.star(i));
        
        return stars;
    }

    const color = '#fff'

    return (
        <View style={styles.container}>
            <View style={styles.nameContainer}>
                <Text style={styles.name}>{data.name}</Text>
                <Text style={styles.location}>{data.destination}, United States</Text>
            </View>
            <View style={styles.underline}></View>
            <View style={styles.infoContainer}>
                <View style={styles.roomDetails}>
                    <View style={styles.stars}>
                        {renderStars()}
                    </View>
                    <View style={styles.amenities}>
                        <View style={styles.detail}>
                            <FA5Icon name="bed" style={[styles.icon, {fontSize: 12}]} />
                            <Text style={styles.detailText}>{data.bed}</Text>
                        </View>
                        <View style={styles.detail}>
                            <MaterialIcon name="people-alt" style={[styles.icon, {fontSize: 15}]} />
                            <Text style={styles.detailText}>{data.people}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.priceContainer}>
                    <Text style={styles.price}>US$ { data.price }</Text>
                </View>
            </View>
            <View style={styles.extensiveAmenities}>
                { data.amenities.map((amenity) => NameIconLib[amenity]()) }
            </View>
            <Text style={styles.description}>{data.hotelDescription}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        minHeight: 130,
        backgroundColor: '#2B2B2B',
        borderRadius: 12,
    },
    name: {
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FF881A'
    },
    location: {
        color: '#dddeee',
        fontFamily: 'Poppins',
        fontSize: 14
    },
    nameContainer: {
        paddingVertical: 6,
        paddingHorizontal: 12
    },
    underline: {
        width: '100%',
        height: 1,
        padding: 0,
        backgroundColor: '#444'
    },
    infoContainer: {
        display: 'flex',
        flexDirection: 'row',
        minHeight: 60,
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
    stars: {
        display: 'flex',
        flexDirection: 'row',
        gap: 2,
    },
    roomDetails: {
        width: '50%',
        justifyContent: 'space-between',
    },
    amenities: {
        display: 'flex',
        flexDirection: 'row',
        gap: 8,
        flexWrap: 'wrap',
        paddingVertical: 6
    },
    priceContainer: {
        width: '50%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    price: {
        fontWeight: 600,
        fontFamily: 'Poppins',
        color: '#fffeee',
        fontSize: 20
    },
    description: {
        color: '#bbb',
        padding: 12,
        textAlign: 'left',
        fontFamily: 'Poppins',
        marginTop: 8
    },
    extensiveAmenities: {
        marginTop: 8,
        paddingHorizontal: 24,
        gap: 4
    },
    detail: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
        width: 'auto',
        height: '1rem'
    },
});