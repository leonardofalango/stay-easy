import { StyleSheet, View } from "react-native";
import TopBar from "../../components/TopBar";
import HotelDetails from "./components/HotelDetails";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";

export default function OfferDetails({ route, navigation }) {
    const id = route.params;
    const images = [
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/129969797.jpg?k=0c82107ad35a2f11a7af5b2b95fff23a63701ea1814c8d8108e4b571d0eeafb1&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/382514830.jpg?k=3a27af7d74d38fadce525af9e80133da76195324b642729aa64dff6774601d18&o=&hp=1',
        'https://cf.bstatic.com/xdata/images/hotel/max1024x768/314331656.jpg?k=fdc7cf48ef84a885ffbacbc7303aff291e82d387e52938dff3ce6b56e0a23d54&o=&hp=1'
    ]

    return (
        <View style={styles.container}>
            <TopBar btnFunc={() => navigation.navigate("main")} pageName={"Details"} />
            <ImageCarousel images={images} />
            <View style={styles.content}>
                <HotelDetails />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
        width: '100%',
        minHeight: '100%',
    },
    content: {
        marginTop: 42,
        marginHorizontal: 16,
        width: 'calc(100% - 32)'
    },
})