import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { db } from "../config/firebase";
import { styles } from "../utils/styles";

/**
 * [OS NOMES SÓ APARECERAM CASO VOCÊ OS ESCREVA COM A PRIMEIRA LETRA MAIÚSCULA]
 * pessoa:
 *  idPessoa: 1{
 *      NomePessoa: "Joana"
 *      SobrenomePessoa: "Silvanis"
 *      IdadePessoa: "28"}
 *  idPessoa: 2{
 *     NomePessoa: "Claudinei"
 *     SobrenomePessoa: "Raul"
 *     IdadePessoa: "47"}
 */

export default function BuscarPessoa({navigation}) {
    const [busca, setBusca] = useState('');
    const [resultado, setResultado] = useState([]);

    async function buscarPessoa() {
        const pessoaRef = collection(db, "pessoa");
        const buscaPessoa = query(pessoaRef, where('NomePessoa', '==', busca));
        const resultadoSnapshot = await getDocs(buscaPessoa);

        const listaPessoas = resultadoSnapshot.docs.map(doc => doc.data());
        console.log(listaPessoas);
        setResultado(listaPessoas);
    }

    useEffect(() => {
        buscarPessoa();
    }, [busca]);
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Faça a busca da pessoa a partir do nome:</Text>
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
                        <Text style={styles.item}><Text style={styles.negrito}>Nome da Pessoa: </Text> {item.NomePessoa}</Text>
                    }
                />
                <FlatList 
                    style={{margin: 0}}
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Sobrenome da Pessoa: </Text> {item.SobrenomePessoa}</Text>
                    }
                />
                <FlatList 
                    data={resultado}
                    renderItem={({item}) => 
                        <Text style={styles.item}><Text style={styles.negrito}>Idade da Pessoa: </Text> {item.IdadePessoa}</Text>
                    }
                />
            </View>
        </View>
    );
}