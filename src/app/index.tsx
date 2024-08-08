import { router } from 'expo-router';
import { Button, ScrollView, Text, View } from 'react-native';
import Header from '../components/header';
import styles from './styles'

export default function App() {
  const user = 'Cadmo'
  
  function handleNavigate(route: number){
    switch (route) {
      case 1:
        router.push("/dashboard/")
        break;
      case 2:
        router.push("/user/"+user)
        break;
      default:
        break;
    }
  }

  return (
      <View style={styles.app.body}>
        <Header name='Cadmo Expo App' tipo={1} />
        <View>
          <ScrollView style={styles.app.container}>
            <View style={styles.app.content}>
              {[...Array(15)].map((_, index) => (
                <View key={index} style={styles.app.contentView}>
                  <Text>Minha Tela Inicial</Text>
                  <View style={styles.app.buttonsSview}>
                    <Button title={user + ' Page'} color={'#8fa6eb'} onPress={() => {handleNavigate(2)}} />
                    <Button title='Dashboard' color={'#8fa6eb'} onPress={() => {handleNavigate(1)}} />
                  </View>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
  );
}