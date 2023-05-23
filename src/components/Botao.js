import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const Botao = ({ titulo, acao }) => {
    return (
        <TouchableOpacity  onPress={ acao }>
            <View>
            <Text>{ titulo }</Text>
            </View>
        </TouchableOpacity>
    );
}

export default Botao; 