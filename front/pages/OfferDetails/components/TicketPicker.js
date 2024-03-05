import { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function TicketPicker({ selectedTicket, setSelectedTicket }) {
    const tickets = [
        {
            name: "Economic",
            info: "cheap tickets",
            price: "79.80"
        },
        {
            name: "Business",
            info: "travel with comfort",
            price: "118.50"
        },
        {
            name: "1st Class",
            info: "the best experience",
            price: "187.40"
        }
    ]

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <FAIcon name="plane" style={{ color: '#FF881A', fontSize: 32 }} />
                <Text style={styles.title}>Select your plane ticket</Text>
            </View>
            <View style={styles.ticketsContainer}>
                {tickets.map((ticket) =>
                    <TouchableOpacity 
                        key={ticket.name}
                        style={[styles.ticket, (selectedTicket.name == ticket.name) ? { backgroundColor: '#000' } : '']} 
                        onPress={() => setSelectedTicket(ticket)}
                    >
                        <View style={styles.ticketNameContainer}>
                            <Text style={styles.ticketName}>{ticket.name}</Text>
                            <Text style={styles.ticketInfo}>{ticket.info}</Text>
                        </View>
                        <View style={styles.ticketPrice}>
                            <Text style={styles.price}>US$ {ticket.price}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2B2B2B',
        borderRadius: 12,
        padding: 16,
        alignItems: 'center'
    },
    title: {
        color: '#dddeee',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 600
    },
    titleContainer: {
        alignItems: 'center'
    },
    ticketsContainer: {
        display: 'flex',
        gap: 12,
        width: '100%',
        marginTop: 8
    },
    ticket: {
        backgroundColor: '#222',
        width: '100%',
        minHeight: 80,
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center'
    },
    ticketNameContainer: {
        width: '50%',
    },
    ticketName: {
        color: '#dddeee',
        fontFamily: 'Poppins',
        fontSize: 16,
        fontWeight: 600
    },
    ticketInfo: {
        color: '#dddeee',
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: 400
    },
    ticketPrice: {
        width: '50%',
        alignItems: 'flex-end'
    },
    price: {
        color: '#FF881A',
        fontFamily: 'Poppins',
        fontSize: 20,
        fontWeight: 700
    },
});
