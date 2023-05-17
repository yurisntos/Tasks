import axios from "axios";

const novaTask = () => {
    const [titulo, setTitulo] = useState(""); 
    const [data, setData] = useState(""); 
    const [descricao, setDescricao] = useState(""); 

    const salvar = () => {
        let baseApi = "http://localhost:3000/Tasks.js";

        let dados = {
            titulo : titulo,
            data: data,
            descricao: descricao,
        };

        axios
        .post(baseApi, dados)
        .then((Response) => {

        })
        .catch((error) => {
            alert('Desculpe,deu errado')
        });
    }

    return(
        <View style={estilos.container}>
        <Text style={estilos.titulo}>Formulário Diário</Text>

        <TextInput 
            style={estilos.campo}
            placeholder="Título"
            value={ titulo }
            onChangeText={ setTitulo }
        />

        <TextInput 
            style={estilos.campo}
            placeholder="Data"
            value={ data }
            onChangeText={ setData }
        />

        <TextInput 
            style={estilos.campo}
            placeholder='Descrição'
            multiline
            numberOfLines={ 4 }
            editable
            value={ descricao }
            onChangeText={ setDescricao }
        />

        <Botao titulo="Salvar" acao={salvar} />
    </View>
    )
};
export default novaTask;