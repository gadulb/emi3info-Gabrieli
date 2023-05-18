import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

/**
 * animal:
 *  idAnimal: 1{
 *     NomeAnimal: "girafa"
 *     IdadeAnimal: "12"
 *     TamanhoAnimal: "5m"}
 *  idAnimal: 2{
 *      NomeAnimal: "zebra"
 *      IdadeAnimal: "15"
 *      TamanhoAnimal: "1m"}
 */

export default function BuscarAnimal({navigation}) {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarAnimal() {
        const animalRef = collection(db, "animal");
        const buscaAnimal = query(animalRef, where('NomeAnimal', '==', busca));
        const resultadoSnapshot = await getDocs(buscaAnimal);

        const listaAnimais = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaAnimais);
        setResultado(listaAnimais);
    }

    useEffect(() => {
        buscarAnimal();
    }, [busca]);
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>
          Faça a busca do animal a partir do nome:
        </Text>
        <TextInput
          placeholder="Faça sua busca"
          value={busca}
          onChangeText={setBusca}
          style={styles.input}
          mode="flat"
        />
        <View style={styles.lista}>
          <FlatList
            style={{ margin: 0 }}
            data={resultado}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                <Text style={styles.negrito}>Nome do Animal: </Text>
                {item.NomeAnimal}
              </Text>
            )}
          />
          <FlatList
            style={{ margin: 0 }}
            data={resultado}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                <Text style={styles.negrito}>Idade do Animal: </Text>
                {item.IdadeAnimal}
              </Text>
            )}
          />
          <FlatList
            data={resultado}
            renderItem={({ item }) => (
              <Text style={styles.item}>
                <Text style={styles.negrito}>Tamanho do Animal: </Text>
                {item.TamanhoAnimal}
              </Text>
            )}
          />
        </View>
      </View>
    );
}