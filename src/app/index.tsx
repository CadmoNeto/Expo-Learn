import { router } from 'expo-router';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Dimensions } from 'react-native';
import Header from '../components/header';
import SideNavBar from '../components/sideNavBar';

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
      <View style={styles.body}>
        <Header name='Cadmo Expo App' tipo={1} />
        <View>
          <ScrollView style={styles.container}>
            <View style={styles.content}>
              {[...Array(15)].map((_, index) => (
                <View key={index} style={styles.contentView}>
                  <Text>Minha Tela Inicial</Text>
                  <View style={styles.buttonsSview}>
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

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  container: {
    padding: 16,
  },
  content: {
    marginTop: Dimensions.get('screen').height * 0.1,
    marginBottom: Dimensions.get('screen').height * 0.1,
  },
  contentView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5
  },
  buttonsSview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  }
})