import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
import Card from './Card';


export default function Cards() {
    return (
            <View style={styles.box}>
                <Card 
                    key={1}
                    id={1}
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    amenities={['air', 'wifi']}
                    bed='1 King Size Bed'
                    people='2'
                    stars={5}
                    price='99.90'
                />
                <Card 
                    key={2}
                    id={1}
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    amenities={['air', 'bath']}
                    bed='1 King Size Bed'
                    people='2'
                    stars={5}
                    price='99.90'
                />
                <Card 
                    key={3}
                    id={1}
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    amenities={['wifi', 'air', 'dog', 'bath']}
                    bed='1 King Size Bed'
                    people='2'
                    stars={5}
                    price='99.90'
                />
            </View>
    )
}

const styles = StyleSheet.create({
    box: {
        width: '100vw',
        paddingHorizontal: '1rem',
        display: 'flex',
        gap: '24px'
    },

});