import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
import Card from './Card';


export default function Cards() {
    return (
            <View style={styles.box}>
                <Card 
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    air
                    wifi
                    bath
                    bed='1 King Size Bed'
                    people='2'
                    stars={5}
                    price='99.90'
                />
                <Card 
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    air
                    wifi
                    bath
                    bed='1 King Size Bed'
                    people='2'
                    stars={5}
                    price='99.90'
                />
                <Card 
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    air
                    wifi
                    bath
                    bed='1 King Size Bed'
                    people='2'
                    stars={5}
                    price='99.90'
                />
                <Card 
                    hotel='Hotel Golden Nuggets'
                    destination='Las Vegas'
                    air
                    wifi
                    bath
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