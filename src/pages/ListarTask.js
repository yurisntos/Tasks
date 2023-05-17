import axios, { Axios } from "axios";

const listaTarefas = () => {
    const [tarefas, setTask] = React.useState(null);

    let url = "https://localhost:/ var /"; 

    React.useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setTask(response.data);
            })
            .catch((error) => {
                alert('desculpa deu errado')
            })
    });
    


if(!) return null; 

    const ListarTask = .map(pagina =>
        //pegar pela pilha
    ); 

return 
<View style={estilos.container}>
<Text style= {estilos.titulo}>Meus dias </Text>
<View>{listaPaginas} </View>
</View>
);
}