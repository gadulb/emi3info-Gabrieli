import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

/**
 * cor:
 * idCor: 1{
 *     NomeCor: "rosa",
 *     HexadecimalCor: "ffcdb",
 *     RgbCor: "255,192,203"}
 * idCor: 2{
 *     NomeCor: "azul",
 *     HexadecimalCor: "0000ff",
 *     RgbCor: "0,0,255"}
 */

export default function BuscarCor({navigation}) {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarCor() {
        const corRef = collection(db, "cor");
        const buscaCor = query(corRef, where('NomeCor', '==', busca));
        const resultadoSnapshot = await getDocs(buscaCor);

        const listaCores = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaCores);
        setResultado(listaCores);
    }

    useEffect(() => {
        buscarCor();
    }, [busca]);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça a busca da cor a partir do nome:</Text>
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
                        <Text style={styles.item}><Text style={styles.negrito}>Nome da Cor: </Text>{item.NomeCor}</Text>
                    }
                />
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Hexadecimal da Cor: #</Text>{item.HexadecimalCor}</Text>
                    }
                />
                <FlatList 
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Rgb da Cor: </Text>{item.RgbCor}</Text>
                    }
                />
            </View>
        </View>
    );
}