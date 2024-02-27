import { useRef, useState } from "react";
import { FlatList, StyleSheet, View, Image, Text, Dimensions, Animated } from "react-native";
import Pagination from "./Pagination";

export default function ImageCarousel({ images }) {
    const [index, setIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;

    const handleOnScroll = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset: {
                        x: scrollX,
                    },
                },
            },
        ],
        {
            useNativeDriver: false,
        }
        )(event);
    };

    const viewabilityConfig = useRef({
        itemVisiblePercentThreshold: 50,
    }).current;

    return (
        <View style={{ marginTop: 8 }}>
            <FlatList 
                data={images}
                style={styles.flat}
                renderItem={({item}) => <Image style={styles.image} source={item} /> }
                horizontal
                pagingEnabled
                snapToAlignment="center"
                showsHorizontalScrollIndicator={false}
                onScroll={handleOnScroll}
                viewabilityConfig={viewabilityConfig}
            />
            <Pagination data={images} scrollX={scrollX} />
        </View>
    )
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    image: {
        width: width - 32,
        height: width / 1.5,
        marginHorizontal: 16,
        borderRadius: 8
    },
    flat: {
        display: 'flex',
        flexDirection: 'row',
        gap: 16
    }
});
