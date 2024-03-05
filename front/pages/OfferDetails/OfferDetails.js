import { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TopBar from "../../components/TopBar";
import { RoomService } from "../../services/roomService";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import RangePicker from "./components/RangePicker";
import RoomDetails from "./components/RoomDetails";
import TicketPicker from "./components/TicketPicker";
import TotalCalculator from "./components/TotalCalculator";

export default function OfferDetails({ route, navigation }) {
    const id = route.params;
    const [room, setRoom] = useState({
        images: [],
        amenities: [],
        price: 0
    });

    const get = async () => {
        const roomResponse = await RoomService.getById(id);
        setRoom(roomResponse);
        console.log(roomResponse);
    }

    useEffect(() => {

        get();
    }, [])

    const [date, setDate] = useState({});
    // data pra enviar p criar uma reserva (date: { checkin: Date, checkout: Date })

    const [selectedTicket, setSelectedTicket] = useState({});
    //ticket selecionado (ticket: { name: str, info: str, price: number })

    const renderRoom = () => {
        if (room.images) {
            return (
                <>
                    <ImageCarousel images={room.images} />
                    <View style={styles.content}>
                        <RoomDetails data={room} />
                        <RangePicker setDate={setDate} />
                        <TicketPicker selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket} />
                        <TotalCalculator totalPriceHelper={totalPriceHelper} total={total} setTotal={setTotal} />
                        <TouchableOpacity style={styles.confirmBtn} onPress={onHandleReserve}>
                            <Text style={styles.textBtn}>Reserve</Text>
                        </TouchableOpacity>
                    </View>
                </>
            )
        }
    }

    const totalPriceHelper = {
        dailyPrice: room.price,
        date: date,
        ticket: selectedTicket,
        people: room.people
    }

    const [total, setTotal] = useState(0);

    const onHandleReserve = () => {
        let reserve = {
            roomId: 1,
            hotel: room,
            date: date,
            selectedTicket: selectedTicket,
            total: total
        }


        console.log(reserve); // criaria a reserva
    }

    return (
        <View style={styles.container}>
            <TopBar btnFunc={() => navigation.navigate("main")} pageName={"Details"} />
            {renderRoom()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
        width: '100%',
        minHeight: '100%',
        paddingBottom: 100
    },
    content: {
        marginTop: 32,
        marginHorizontal: 16,
        width: 'calc(100% - 32)',
        gap: 16,
    },
    confirmBtn: {
        width: '100%',
        backgroundColor: '#FF881A',
        alignItems: 'center',
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center'
    },
    textBtn: {
        color: '#000',
        fontFamily: 'Poppins',
        fontSize: 24,
        fontWeight: 700
    }
})