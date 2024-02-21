import { useEffect, useState } from "react";
import { View, StyleSheet } from 'react-native';
import Cards from '../components/Cards';
import Filter from '../components/Filter';
import SearchBox from '../components/SearchBox';
import OptionsModal from '../components/OptionsModal';
const menuIcon = require('../assets/icons/menuIcon.png');
const searchIcon = require('../assets/icons/searchIcon.png');

export default function MainPage({ navigation }) {
    const [isOptionsActive, setIsOptionsActive] = useState(false);

    const verifyLogin = () => {
        const jwt = sessionStorage.getItem('jwt');

        if(jwt == null) {
            navigation.navigate('login');
        }
    }

    useEffect(() => {
        verifyLogin();
    }, [])
    return (
        <View style={styles.container}>
            <SearchBox setIsOptionsActive={setIsOptionsActive} />
            <Filter />
            <Cards />
            <OptionsModal modalOptionsVisible={isOptionsActive}/>
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