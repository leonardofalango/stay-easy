import { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity, Touchable, Text, ImageBackground, Image } from 'react-native';
const menuIcon = require('../assets/icons/menuIcon.png');
const searchIcon = require('../assets/icons/searchIcon.png');


export default function SearchBox({ toggleOptions }) {
  

    return (
        <View style={styles.searchBox}>
            <TouchableOpacity onPress={() =>  toggleOptions() }style={styles.searchBtns}><Image source={menuIcon} style={{ width: '40%', height: '40%', resizeMode: 'contain' }} /></TouchableOpacity>
            <TextInput
                style={styles.searchInput}
                placeholder='Find a place to go'
                placeholderTextColor='#AFAFAF'
            />
            <TouchableOpacity style={styles.searchBtns}><Image source={searchIcon} style={{ width: '40%', height: '40%', resizeMode: 'contain' }} /></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: '#3A3A3A',
        width: '100%',
        height: '3.5rem',
        borderRadius: '18px',
        display: 'flex',
        flexDirection: 'row',
    },
    searchBtns: {
        height: '100%',
        width: '20%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        width: '60%',
        minHeight: '100%',
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: '1rem',
        color: '#eee'
    }
});