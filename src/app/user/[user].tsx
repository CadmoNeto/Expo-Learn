import { Link, useLocalSearchParams } from 'expo-router';
import { ScrollView, Text, View } from 'react-native';
import Header from '../../components/header';
import styles from '../styles';

export default function User() {
  const { user } = useLocalSearchParams()
  return (
    <View style={styles.user.body}>
      <Header name={"Perfil de " + user} tipo={2} />
      <View>
        <ScrollView contentContainerStyle={styles.user.content} style={styles.user.container}>
          <Text>Minha Tela Inicial</Text>
          <Link href={'../'}>Home Page {user}</Link>
        </ScrollView>
      </View>
    </View>
  );
}
