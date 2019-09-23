import React, { Component }     from "react";
import { AppRegistry, View }    from "react-native";
import { Routes }               from "./app/pages";
import { name as appName }      from './app.json';

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Routes/>
            </View>
        )
    }
}

AppRegistry.registerComponent(appName, () => App);
