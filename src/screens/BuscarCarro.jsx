import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

/**
 * [OS NOMES SÓ APARECERAM CASO VOCÊ OS ESCREVA COM A PRIMEIRA LETRA MAIÚSCULA]
 * carro:
 *  idCarro: 1{
 *      NomeCarro: "Sedan",
 *      AnoCarro: "2012",
 *      CorCarro: "cinza",}
 *  idCarro: 2{
 *      NomeCarro: "Gol",
 *      AnoCarro: "2015",
 *      CorCarro: "branco",}
 */

export default function BuscarCarro({navigation}) {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarCarro() {
        const carroRef = collection(db, "carro");
        const buscaCarro = query(carroRef, where('NomeCarro', '==', busca));
        const resultadoSnapshot = await getDocs(buscaCarro);

        const listaCarros = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaCarros);
        setResultado(listaCarros);
    }

    useEffect(() => {
        buscarCarro();
    }, [busca]);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça a busca do carro a partir do nome:</Text>
            <TextInput 
                placeholder="Faça sua busca" 
                value={busca} 
                onChangeText={setBusca}
                style={styles.input}
                mode="flat" />
            <View style={styles.lista}>
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Nome do Carro: </Text> {item.NomeCarro}</Text>
                    }
                />
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Ano do Carro: </Text> {item.AnoCarro}</Text>
                    }
                />
                <FlatList 
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Cor do Carro: </Text> {item.CorCarro}</Text>
                    }
                />
            </View>
        </View>
    );
}