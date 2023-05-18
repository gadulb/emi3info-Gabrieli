import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

/**
 * produto: 
 *  IdProduto: 1{
 *      NomeProduto: "escova"
 *      PrecoProduto: "10"
 *      QuantidadeProduto: "5"}
 *  IdProduto: 2{
 *      NomeProduto: "mochila"
 *      PrecoProduto: "200"
 *      QuantidadeProduto: "8"}
 */

export default function BuscarProduto({navigation}) {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarProduto() {
        const produtoRef = collection(db, "produto");
        const buscaProduto = query(produtoRef, where('NomeProduto', '==', busca));
        const resultadoSnapshot = await getDocs(buscaProduto);

        const listaProdutos = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaProdutos);
        setResultado(listaProdutos);
    }

    useEffect(() => {
        buscarProduto();
    }, [busca]);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça a busca de seu produto a partir do nome:</Text>
            <TextInput 
                placeholder="Faça sua busca" 
                value={busca} 
                onChangeText={setBusca}
                style={styles.input}
                mode="flat"
                />
            <View style={styles.lista}>
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Nome do Produto: </Text> {item.NomeProduto}</Text>
                    }
                />
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Preço do Produto: </Text> {item.PrecoProduto}</Text>
                    }
                />
                <FlatList 
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Quantidade do Produto: </Text> {item.QuantidadeProduto}</Text>
                    }
                />
            </View>
        </View>
    );
}