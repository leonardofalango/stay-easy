import { StyleSheet, View } from "react-native";
import TopBar from "../components/TopBar";

export default function OfferDetails({ route, navigation }) {
    const id = route.params;
    return (
        <View style={styles.container}>
            <TopBar btnFunc={() => navigation.navigate("main")} pageName={"Details"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#222222',
        width: '100vw',
        minHeight: '100vh'
    }
})