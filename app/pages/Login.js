import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
}                   from "react-native";
import { Actions }  from "react-native-router-flux";
import { Button }   from "../components/";
import globalStyles from "../styles";

export default class Login extends Component {
    goToAboutPage = () => Actions.about();
    openModal = () => Actions.bottomModal();

    render() {
        return (
            <View style={ globalStyles.containerCenter }>
                <Text style={ globalStyles.title }>Login page</Text>
            </View>
        )
    }
}
