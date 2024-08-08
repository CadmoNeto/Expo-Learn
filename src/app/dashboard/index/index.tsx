import { Button, Text, View } from 'react-native';
import IconButton from '../../../components/iconButton';
import { useState } from 'react';
import { router } from 'expo-router';
import styles from '../../styles';

export default function Dashboard() {
  const [apertos, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(apertos + 1)
  }

  const goToCalculator = () => {
    router.push('/calculadora/')
  }

  return (
    <View style={styles.dashboard.container}>
      <Text>Dashboard Painel</Text>
      
      <Text style={{marginBottom: 5}}>Você apertou o botão {apertos} vezes!</Text>
      {apertos == 69 && <Text>Você é safado</Text>}
      
      <IconButton tipo='plus' onPress={handleIncrement} />

      <Button title='Calculadora' onPress={goToCalculator} />
    </View>
  );
}
