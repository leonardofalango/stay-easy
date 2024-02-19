import { View } from "react-native";

export default function OfferDetails({ route, navigation }) {
    const id = route.params;
    return (
        <View>
            {id}
        </View>
    )
}