import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function CalculatorDisplay({displayValue1, displayValue2}: any){
    return(
        <View style={{paddingHorizontal: 15}}>
            <View style={styles.displayUpper}>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#00000084'}}>{displayValue1}</Text>
            </View>

            <View style={styles.displayCenter}>
                <Text style={{fontSize: 70, fontWeight: 'bold', color: '#00000084'}}>{displayValue2}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    displayUpper: {
        height: Dimensions.get("screen").height * 0.025,
        backgroundColor: '#665744c7',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    },
    displayCenter: {
        height: Dimensions.get("screen").height * 0.125,
        backgroundColor: '#665744c7',
        flexDirection: 'row-reverse',
        alignItems: 'center',
    }
})