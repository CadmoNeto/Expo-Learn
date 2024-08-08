import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function CalculatorDisplay({displayValue}: any){
    return(
        <View style={{paddingHorizontal: 15}}>
            <View style={styles.display}>
                <Text style={{fontSize: 70, fontWeight: 'bold', color: '#00000084'}}>{displayValue}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    display: {
        height: Dimensions.get("screen").height * 0.15,
        backgroundColor: '#665744c7',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    }
})