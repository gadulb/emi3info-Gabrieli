import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

/**
 * fruta:
 * idFruta: 1{
 *     NomeFruta: "banana",
 *     CorFruta: "amarela",
 *     QuantidadeFruta: "10"}
 * idFruta: 2{
 *     NomeFruta: "ameixa",
 *     CorFruta: "vermelha",
 *     QuantidadeFruta: "5"}
 */

export default function BuscarFruta({navigation}) {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarFruta() {
        const frutaRef = collection(db, "fruta");
        const buscaFruta = query(frutaRef, where('NomeFruta', '==', busca));
        const resultadoSnapshot = await getDocs(buscaFruta);

        const listaFrutas = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaFrutas);
        setResultado(listaFrutas);
    }

    useEffect(() => {
        buscarFruta();
    }, [busca]);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça a busca da fruta a partir do nome:</Text>
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
                        <Text style={styles.item}><Text style={styles.negrito}>Nome da fruta:</Text> {item.NomeFruta}</Text>
                    }
                />
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Cor da Fruta:</Text> {item.CorFruta}</Text>
                    }
                />
                <FlatList 
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Quantidade da Fruta:</Text> {item.QuantidadeFruta}</Text>
                    }
                />
            </View>
        </View>
    );
}