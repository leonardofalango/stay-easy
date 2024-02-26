import { View, StyleSheet, TouchableOpacity } from 'react-native';

export default function EditProfile({  }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("main")}> voltar </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
   
});