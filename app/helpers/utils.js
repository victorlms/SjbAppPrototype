import React                from "react";
import { Alert }            from "react-native";
import { Actions }          from "react-native-router-flux";

export function getTime(d = new Date(), addSecs = false) {
    const hour = (d.getHours() < 10) ? "0"+d.getHours() : d.getHours();
    const mins = (d.getMinutes() < 10) ? "0"+d.getMinutes() : d.getMinutes();
    let response = `${hour}:${mins}`;

    if (addSecs)
        response += (d.getSeconds() < 10) ? "0"+d.getSeconds() : d.getSeconds();

    return response;
}

export function getDate(d = new Date()) {
    const year = d.getFullYear();
    const month = ("0" + (d.getMonth() + 1)).slice(-2);
    const date = ("0" + d.getDate()).slice(-2);

    return `${date}/${month}/${year}`;
}

export function popWithRefresh() {
    Actions.pop();
    Actions.refresh({ updatePage: Math.random() });
}

export function getTimestamp() {
    const date = new Date();
    let timestamp = parseInt(`${date.getTime()}`.slice(-10));

    if (timestamp > 0)
        return timestamp;

    return getTimestamp();
}

export function notificationSuccess(description = "") {
    return showMessage({
        message: "Aviso",
        description: description,
        type: "success",
        autoHide: true,
        duration: 1000
    });
}

export function notificationError(description = "") {
    return showMessage({
        message: "Atenção",
        description: description,
        type: "danger",
    });
}

export function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function mask(text, mask) {
    let newText = "";
    let clearStringFromThese = [".", ",", "/", "\\", "|", "-", "_", "(", ")", " "];

    for (var i = 0; i < text.length; i++)
        if (!clearStringFromThese.includes(text[i]))
            newText += text[i];

    text = newText;
    newText = "";

    let j = 0;
    for (var i = 0; i < text.length; i++) {
        if (i <= mask.length - 1) {
            if (mask[j] !== "#") {
                newText += mask[j]; j++;
                newText += text[i];
            } else {
                newText += text[i];
            }
            j++;
        }
    }

    return newText.slice(0, mask.length);
}

export const isDebug = (typeof DedicatedWorkerGlobalScope) !== "undefined";
export function _setTimeout(callback, secs = 1700) {
    if (isDebug) {
        return callback();
    } else {
        return setTimeout(callback, secs);
    }
}

export function simpleAlert(text, title = "Controle de Frotas") {
    Alert.alert(title, text, [
        { text: "Fechar", onPress: () => null },
    ], { cancelable: true })
}
