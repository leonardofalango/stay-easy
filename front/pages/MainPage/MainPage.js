import { useEffect } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
import Cards from './components/Cards';
import Filter from '../../components/Filter';
import SearchBox from '../../components/SearchBox';
import { useSelector } from "react-redux";

export default function MainPage({ navigation }) {
    const { token } = useSelector((store) => store.user);
    
    const verifyLogin = () => {
        if(token == null) {
            navigation.navigate('login');
        }
    }

    useEffect(() => {
        verifyLogin();
    }, [])
    
    return (
        <View style={styles.container}>
            <SearchBox />
            <Filter />
            <Cards />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222222',
        alignItems: 'center',
        width: '100vw',
        minHeight: '100vh',
        padding: '1rem',
        gap: '20px'
    },
});