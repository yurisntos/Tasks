import React from 'react';
import react from 'react';
import axios from 'axios';

const tasks = ({ navigation, id}) => {
    const [pagina, setTask] = react.useState(null);

    let baseApi = `https://localhost:/tarefas/${id}`;
    React.useEffect(() => {

        axios.get(baseApi)

        .then((response) => {
            setTask(response.data)
        })
        .catch((error) => {
            alert('desculpe deu errado')
        })
    })
    if(!pagina ) return null

    return (
        <View style={estilos.container}>
        <View style={estilos.logo}>
            <Text style={estilos.titulo}>{pagina.titulo}</Text>
            <Text >{pagina.data}</Text>
            <Text >{pagina.descricao}</Text>
        </View>

        <View style={estilos.botoes}>
            <Botao titulo="Voltar" acao={ () => navigation.navigate('Menu') } />
            <Botao titulo="Editar" />
        </View>
    </View>    
    )
}