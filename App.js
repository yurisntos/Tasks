
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

//paginas src

import Tasks from './src/pages/Tasks';
import Home from './src/pages/home'; 
import Menu from './src/pages/Menu';

const Pilha = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen name="Tasks" component={Tasks}/>
                <Pilha.Screen name="Home" component={Home}/>
                <Pilha.Screen name="Menu" component={Menu} />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}