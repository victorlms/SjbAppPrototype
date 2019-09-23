import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

const globalStyles = StyleSheet.create({
    containerCenter: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        width: width,
        height: height,
    },
    containerCenterFlex: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    rowCentered: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    row: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    column: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },
    columnCentered: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        lineHeight: 22,
        color: "#000",
        opacity: 0.7,
        marginBottom: 10,
        marginTop: 5,
        textAlign: "center"
    },
    title: {
        fontSize: 24,
        color: "#000",
        textAlign: "center",
        marginBottom: 15
    },

    // Used on modal boxes
    bottomModal: {
        backgroundColor: "#FFF",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: 20,
        elevation: 10,
        maxHeight: height/2
    },
});

export default globalStyles;
