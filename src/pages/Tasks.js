import React from 'react';
import{View, Text, StyleSheet} from 'react-native';
import axios from 'axios';

import Duty from '../components/Duty';

const Tasks = ({ navigation}) => {
    const [tasks, setTasks] = React.useState(null);


    let baseApi = ` http://localhost:3000/tasks`;

    React.useEffect(() => {

        axios
        .get(baseApi)

        .then((response) => {
            setTasks(response.data)
        })
        .catch((error) => {
            alert('desculpe deu errado')
        })
    },[])
   

    if(!tasks ) return null

    const ListTasks = tasks.map(task => 
        <Duty key={task.id} task={task} navigation={navigation} />
    );
       
    return(
        <View >
            {ListTasks}
        </View>    
    );
}

const estilos = StyleSheet.create({
    box: {
        display: "flex",
        padding: 5,
        borderRadius: 10,
        border:" 1px solid black",
        margin: 10, 
    },
    title: {
        fontSize: "2em",
        fontFamily: "Arial",
    }
})
export default Tasks 