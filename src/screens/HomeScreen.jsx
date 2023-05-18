import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Bem vindo ao sistema de busca!</Text>
      <Button style={styles.botao} labelStyle={{ fontWeight: "bold", fontSize: 20 }} textColor="white" onPress={() => navigation.navigate("BuscarProduto")}>Buscar Produto</Button>
      <Button style={styles.botao} labelStyle={{ fontWeight: "bold", fontSize: 20 }} textColor="white" onPress={() => navigation.navigate("BuscarPessoa")}>Buscar Pessoa</Button>
      <Button style={styles.botao} labelStyle={{ fontWeight: "bold", fontSize: 20 }} textColor="white" onPress={() => navigation.navigate("BuscarCarro")}>Buscar Carro</Button>
      <Button style={styles.botao} labelStyle={{ fontWeight: "bold", fontSize: 20 }} textColor="white" onPress={() => navigation.navigate("BuscarAnimal")}>Buscar Animal</Button>
      <Button style={styles.botao} labelStyle={{ fontWeight: "bold", fontSize: 20 }} textColor="white" onPress={() => navigation.navigate("BuscarCor")}>Buscar Cor</Button>
      <Button style={styles.botao} labelStyle={{ fontWeight: "bold", fontSize: 20 }} textColor="white" onPress={() => navigation.navigate("BuscarFruta")}>Buscar Fruta</Button>
    </View>
  );
}
