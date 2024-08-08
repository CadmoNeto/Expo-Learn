import { Dimensions, StyleSheet, View } from "react-native";
import Calculator from '../../components/calculator'
import Header from "../../components/header";

export default function Calculadora() {
    return(
        <View style={styles.body}>
            <Header name="Calculadora" tipo={2} />
            <View style={styles.content}>
                <Calculator />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    content: {
        marginTop: Dimensions.get('screen').height * 0.1,
        marginBottom: Dimensions.get('screen').height * 0.1,
    }
})