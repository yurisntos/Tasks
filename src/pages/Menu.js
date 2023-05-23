import React from 'react';
import{View, Text, StyleSheet} from 'react-native';
import Botao from '../components/botao';

const Menu = ({ navigation }) => {

return(
    
        <View>
            <Botao titulo={"Tarefa"} acao={ () => navigation.navigate('Home')}/>
        </View>
);
} 
export default Menu;  