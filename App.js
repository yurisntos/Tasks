import { createStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//paginas src

import Menu  from './src/components/pages/Menu.js'; 
import novaTask from './src/components/pages/NovaTask.js';

const Pilha = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Menu" component={Menu}/>
                <Pilha.Screen name="NovaTask"  component={novaTask}></Pilha.Screen>
                <Pilha.Screen name="listarTask"  component={ListarTask}></Pilha.Screen>
            </Pilha.Navigator>
        </NavigationContainer>
    )
}