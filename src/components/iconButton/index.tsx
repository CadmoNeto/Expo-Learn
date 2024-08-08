import { StyleSheet, TouchableOpacity, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'

interface IconButtonProps {
    tipo: string;
    onPress: () => void;
}

export default function IconButton({tipo, onPress} : IconButtonProps,){
    switch (tipo) {
        case 'plus':
            return(
                <View style={styles.plusButton}>
                    <TouchableOpacity onPress={onPress}>
                        <FontAwesome style={{color: '#fff'}} size={20} name="plus" />
                    </TouchableOpacity>
                </View>
            )
    }
}

const styles = StyleSheet.create({
    plusButton: {
        backgroundColor: '#596dab',
        width: 35,
        height: 35,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    }
})