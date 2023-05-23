import React from 'react';
import{View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import Botao from '../components/botao';

const Home = ({ route, navigation}) => {

    const [task, setTask] = React.useState(null);
    const id = route.params.id
  

    let url = `http://localhost:3000/tasks/${id}`; 

    React.useEffect(() => {

        axios
        .get(url)
        
        .then((response) => {
            setTask(response.data)
        })
        
        .catch((error) => {
            alert('desculpa')
        });

    });
    if(!task) return null 

    return (
        <View>
            <View>
                <Text>{task.title}</Text>
                <Text>{task.description}</Text>
            </View>

            <View>
                <Botao titulo={"Voltar"} acao={ ()=> navigation.goBack() }></Botao>
            </View>
        </View>
    )
};

export default Home; 