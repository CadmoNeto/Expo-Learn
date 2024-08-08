import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FontAwesome } from '@expo/vector-icons'

interface CalculatorButtonProps {
    valor: any
    onPress: () => {}
}

export default function CalculatorButton({valor, onPress} : CalculatorButtonProps){
    return(
        <TouchableOpacity onPress={onPress} activeOpacity={0.5} style={styles.calculatorButton}>
            <Text style={{color: '#fff', fontSize: 35}}>{valor}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    calculatorButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#596dab'
    }
})