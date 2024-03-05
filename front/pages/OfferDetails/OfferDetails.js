import { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import TopBar from "../../components/TopBar";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import RangePicker from "./components/RangePicker";
import RoomDetails from "./components/RoomDetails";
import TicketPicker from "./components/TicketPicker";
import TotalCalculator from "./components/TotalCalculator";

export default function OfferDetails({ route, navigation }) {
    const id = route.params;
    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/129969797.jpg?k=0c82107ad35a2f11a7af5b2b95fff23a63701ea1814c8d8108e4b571d0eeafb1&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382514830.jpg?k=3a27af7d74d38fadce525af9e80133da76195324b642729aa64dff6774601d18&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/314331656.jpg?k=fdc7cf48ef84a885ffbacbc7303aff291e82d387e52938dff3ce6b56e0a23d54&o=&hp=1'
    ]

    const room = {
        name: "Hotel Golden Nuggets",
        hotelDescription: 'A beautiful place to relax and construct new memories. The great localization and the delicious food are a differential.',
        destination: 'Las Vegas',
        amenities:['wifi', 'air', 'dog', 'bath'],
        bed:1,
        people:2,
        stars:5,
        price:'99.90'
    }

    const [date, setDate] = useState({}); 
    // data pra enviar p criar uma reserva (date: { checkin: Date, checkout: Date })

    const [selectedTicket, setSelectedTicket] = useState({});
    //ticket selecionado (ticket: { name: str, info: str, price: number })

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
            <ImageCarousel images={images} />
            <View style={styles.content}>
                <RoomDetails data={room} />
                <RangePicker setDate={setDate} />
                <TicketPicker selectedTicket={selectedTicket} setSelectedTicket={setSelectedTicket}  />
                <TotalCalculator totalPriceHelper={totalPriceHelper} total={total} setTotal={setTotal} />
                <TouchableOpacity style={styles.confirmBtn} onPress={onHandleReserve}>
                    <Text style={styles.textBtn}>Reserve</Text>
                </TouchableOpacity>
            </View>
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