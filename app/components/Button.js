import React, { Component }         from "react";
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from "react-native";

export default class Button extends Component {
    render() {
        const { style, textStyle, children, onPress, color } = this.props;

        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: color }, style ]} onPress={ onPress }>
                {(typeof children === "string") ? (
                    <Text style={[ styles.text, textStyle ]}>{ children }</Text>
                ) : (
                    children
                )}
            </TouchableOpacity>
        )
    }
}

Button.defaultProps = {
    style: {},
    textStyle: {},
    color: "#3d31bd",
    onPress: () => null,
    children: null,
}

const styles = StyleSheet.create({
    button: {
        marginVertical: 15,
        height: 50,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 15,
        width: "60%"
    },

    text: {
        color: "#FFF",
        fontSize: 16,
        fontWeight: "300"
    }
})
