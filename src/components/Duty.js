import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Dusty = ({task, navigation}) => {

    return(
        <TouchableOpacity onPress={ () => navigation.navigate("Home", {id:task.id}) } >
        <View style={estilos.box}>
        <Text> {task.title}</Text>
        <Text>{task.description}</Text>
        </View>
        </TouchableOpacity>
    );
}

const estilos = StyleSheet.create({
    box: {
        border: "1px solid black",
        backgroundColor: "#ffff",
        padding: 5,
        borderRadius: 5,
    }
})
export default Dusty; 