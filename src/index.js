import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BuscarAnimal from "./screens/BuscarAnimal";
import BuscarCarro from "./screens/BuscarCarro";
import BuscarCor from "./screens/BuscarCor";
import BuscarFruta from "./screens/BuscarFruta";
import BuscarPessoa from "./screens/BuscarPessoa";
import BuscarProduto from "./screens/BuscarProduto";
import HomeScreen from "./screens/HomeScreen";

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen} />
                <Stack.Screen
                    name="BuscarProduto"
                    component={BuscarProduto} />
                <Stack.Screen
                    name="BuscarPessoa"
                    component={BuscarPessoa} />
                <Stack.Screen
                    name="BuscarCarro"
                    component={BuscarCarro} />
                <Stack.Screen
                    name="BuscarAnimal"
                    component={BuscarAnimal} />
                <Stack.Screen
                    name="BuscarCor"
                    component={BuscarCor} />
                <Stack.Screen
                    name="BuscarFruta"
                    component={BuscarFruta} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}