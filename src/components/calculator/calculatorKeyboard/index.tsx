import { Dimensions, StyleSheet, View } from "react-native";
import CalculatorButton from "./calculatorButton";

export default function CalculatorKeyboard({onPress}: any){

    const botoesArray = [
        ["AC", "⌫"],
        [1, 2, 3, "÷"],
        [4, 5, 6, "x"],
        [7, 8, 9, "+"],
        [0, ".", "=", "-"]
    ]

    return(
        <View style={styles.teclado}>
            {botoesArray.map((row, rowIndex) => (
                <View key={rowIndex} style={{flex: 1, flexDirection: 'row', columnGap: 1}}>
                    {row.map((value, buttonIndex) => (
                        <CalculatorButton onPress={() => onPress(value)} key={buttonIndex} valor={value} />
                    ))}
                </View>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    teclado: {
        justifyContent:'center',
        alignItems: 'center',
        height: Dimensions.get("screen").height * 0.4,
        paddingHorizontal: 15,
        rowGap: 1,
    }
})