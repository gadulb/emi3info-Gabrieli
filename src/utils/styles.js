import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: 'black',
    width: 300,
    height: 50,
    border: 0,
    padding: 0,
    marginBottom: 20,
    boxShadow: 0,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
  lista: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10,
  },
  item: {
    fontSize: 16,
    margin: 10,
  },
  negrito: {
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    width: 300,
    height: 50,
    border: 'solid 3px black',
    padding: 0,
    marginBottom: 20,
    boxShadow: 'black 5px 5px 0 0px',
    borderRadius: 10,
  },
});