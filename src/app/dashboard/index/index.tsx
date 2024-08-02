import { Button, StyleSheet, Text, View } from 'react-native';

function handleIncrement() {
  apertos++
}

var apertos = 0

export default function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard Painel</Text>
      <Text style={{marginBottom: 5}}>Você apertou o botão {apertos} vezes!</Text>
      {apertos == 69 && <Text>Você é safado</Text>}
      <Button title='' onPress={handleIncrement}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
