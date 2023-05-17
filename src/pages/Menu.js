const Menu = ({ navigation }) => {
    return (
        <View style={estilos.container}>
            <View style={estilos.logo}>
                <Text style={estilos.titulo}>Minhas tarefas</Text>
            </View>

            <View style={estilos.botoes}>
                <Botao titulo="Nova Tarefa" acao={ () => navigation.navigate('NovaTask')} />
                <Botao titulo="Lista de Eventos" acao={ () => navigation.navigate('ListarTask')} />
            </View>
        </View>
    );
}
export default Menu; 