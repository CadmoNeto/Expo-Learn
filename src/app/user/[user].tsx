import { Link, useLocalSearchParams } from 'expo-router';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import Header from '../../components/header';

export default function User() {
  const { user } = useLocalSearchParams()
  return (
    <View style={styles.body}>
      <Header name={"Perfil de " + user} tipo={2} />
      <View>
        <ScrollView contentContainerStyle={styles.content} style={styles.container}>
          <Text>Minha Tela Inicial</Text>
          <Link href={'../'}>Home Page {user}</Link>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    backgroundColor: '#fff',
    marginTop: Dimensions.get('screen').height * 0.1,
    marginBottom: Dimensions.get('screen').height * 0.1,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
