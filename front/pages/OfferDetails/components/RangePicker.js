import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker/CalendarPicker";
import Animated, { Easing, useSharedValue, withSpring, useAnimatedStyle } from "react-native-reanimated";
import AntIcon from 'react-native-vector-icons/AntDesign';
import MIIcon from 'react-native-vector-icons/MaterialIcons';

export default function RangePicker({ setDate }) {
    const [expand, setExpand] = useState(false);
    
    const [currentDate, setCurrentDate] = useState(null);

    const togglePicker = () => {
        setExpand(!expand);
    };

    const renderPicker = () => {
        if (expand)
            return (
                <CalendarPicker
                    allowRangeSelection={true}
                    onDateChange={onDateChange}
                    todayBackgroundColor="#5b5b5b"
                    selectedDayColor="#FF881A"
                    textStyle={styles.calendarStyle}
                    scaleFactor={375}
                    headerWrapperStyle={styles.headerStyle}
                />
            )
    }

    const onDateChange = (date) => {
        if(date != null)
            setCurrentDate(date)

        let data = { checkin: currentDate ? currentDate : date, checkout: date ? date : currentDate }
        setDate(data);
    }

    return (
        <View style={[styles.container]} >
            <TouchableOpacity style={styles.expand} onPress={togglePicker}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                    <MIIcon name="date-range" style={{ color: '#dddeee', fontSize: 20 }} />
                    <Text style={styles.expandTitle}>Select Date</Text>
                </View>
                <AntIcon name={expand ? 'up' : 'down'} style={{ color: '#dddeee', fontSize: 20 }} />
            </TouchableOpacity>
            {renderPicker()}
        </View>
    )
}

const styles = StyleSheet.create({
    expand: {
        width: '100%',
        paddingVertical: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    expandTitle: {
        color: '#dddeee',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 500
    },
    calendarStyle: {
        fontFamily: 'Poppins',
        color: '#eee',
    },
    headerStyle: {
        padding: 16
    },
    container: {
        backgroundColor: '#2B2B2B',
        borderRadius: 12,
        paddingHorizontal: 16,
    }
});