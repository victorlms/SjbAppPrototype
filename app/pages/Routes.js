import React, { Component } from "react";
import {
    ActionConst,
    Lightbox,
    Router,
    Scene,
    Stack,
}                                   from "react-native-router-flux";
import StackViewStyleInterpolator   from "react-navigation-stack/src/views/StackView/StackViewStyleInterpolator";
import * as Pages                   from "./";

export default class Routes extends Component {
    render() {
        return (
            <Router cardStyle={{ backgroundColor: "#EFFEFE" }}>
                <Lightbox>
                    <Stack key="root" hideNavBar transitionConfig={() => ({ screenInterpolator: StackViewStyleInterpolator.forHorizontal })}>
                        <Scene key="login" component={ Pages.Login }  type={ ActionConst.REPLACE } initial/>
                        <Scene key="SJB" component={ Pages.SJB } />
                        <Scene key="Agenda" component={ Pages.Agenda } />
                    </Stack>
                </Lightbox>
            </Router>
        )
    }
}