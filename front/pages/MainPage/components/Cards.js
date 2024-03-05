import { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
import { RoomService } from '../../../services/roomService';
import Card from './Card';

export default function Cards() {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const getAll = async () => {
            const response = await RoomService.getAll()
            console.log(response);
            setCards(response);
        }

        getAll();
    }, [])

    return (
            <View style={styles.box}>
                {cards.map((card, i) => <Card key={i} data={card} />)}
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