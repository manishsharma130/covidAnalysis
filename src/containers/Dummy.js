import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker, Callout, Polygon, Circle } from "react-native-maps";

// [{ "name": "Govindpuri", "latitude": 28.535439, "longitude": 77.263931 },
// { "name": "Uttar Pradesh", "latitude": 27.138201, "longitude": 80.859352 },
// { "name": "Nani Tal", "latitude": 27.659440, "longitude": 30.904240 },
// { "name": "Gujarat", "latitude": 22.258652, "longitude": 71.192383 },
// { "name": "Uttam Nager", "latitude": 28.621271, "longitude": 77.061325 }]

const Dummy = () => {
    const [coordinates, setCoordinates] = React.useState(
        [{ "name": "Govindpuri", "latitude": 28.535439, "longitude": 77.263931 },
        { "name": "Uttar Pradesh", "latitude": 27.138201, "longitude": 80.859352 },
        { "name": "Nani Tal", "latitude": 27.659440, "longitude": 30.904240 },
        { "name": "Gujarat", "latitude": 22.258652, "longitude": 71.192383 },
        { "name": "Uttam Nager", "latitude": 28.621271, "longitude": 77.061325 }]
    );

    return (<View style={styles.mainStyle}>
        <View style={styles.header} />
        <View style={styles.content}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={{ flex: 1 }}
                region={{
                    latitude: 28.535439,
                    longitude: 77.263931,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                {/* <Polygon
                    coordinates={coordinates}
                    fillColor={"pink"}
                    strokeColor={"black"}
                    strokeWidth={5}
                /> */}
                <Circle
                    center={{ "latitude": 28.535439, "longitude": 77.263931 }}
                    radius={500}
                    fillColor={"rgba(100,100,100,.5)"}
                    strokeColor={"rgba(100,100,100,.5)"}
                />
                <Marker
                    draggable
                    onPress={(e) => {
                        console.log("on Marker Click:- ", e.nativeEvent);
                    }}
                    coordinate={{ latitude: 28.535439, longitude: 77.263931 }}
                // title={"My Current location"}
                >
                    <Callout
                        onPress={(e) => {
                            alert("Hello");
                            console.log("E:- ", e);
                        }}
                    >
                        <Text>{"GovindPuri"}</Text>
                    </Callout>
                    <View style={{ backgroundColor: "red", width: 100, height: 100, borderRadius: 50, justifyContent: "center", alignItems: "center" }}>
                        <Text>{"GovindPuri"}</Text>
                    </View>


                </Marker>


            </MapView>
        </View>
        <View style={styles.footer} />
    </View >);
}

const styles = StyleSheet.create({
    mainStyle: {
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
    },
    header: {
        height: 105,
        width: "100%",
        backgroundColor: "green"
    },
    footer: {
        height: 70,
        width: "100%",
        backgroundColor: "green"
    },
    content: {
        flex: 1
    },
    map: {
        flex: 1
        // ...StyleSheet.absoluteFillObject,
    },
});

export default Dummy;