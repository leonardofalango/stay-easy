import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get('screen');

export default function Pagination({ data, scrollX, index }) {
    return (
        <View style={styles.container}>
            {data.map((_, idx) => {
                const inputRange = [(idx - 1) * width, idx * width, (idx + 1) * width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [12, 30, 12],
                    extrapolate: 'clamp',
                });

                const backgroundColor = scrollX.interpolate({
                    inputRange,
                    outputRange: ['#323232', '#616161', '#323232'],
                    extrapolate: 'clamp',
                });

                return <Animated.View key={idx.toString()} style={[
                    styles.dot, 
                    {width: dotWidth, backgroundColor}
                ]} />
            })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: -20,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 6,
        marginHorizontal: 3,
    },
});