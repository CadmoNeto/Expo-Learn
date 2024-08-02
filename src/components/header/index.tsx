import { Text, Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { Link } from "expo-router";

interface HeaderProps {
    name: string
    tipo: number
}

export default function Header({name, tipo}: HeaderProps){
    switch (tipo) {
        case 1:
            return(
                <SafeAreaView>
                        <View style={styles.header}>
                            <FontAwesome name="plus-square" size={30} color={'#fff'} />
                            <Text
                                style={styles.title}>
                                    {name}
                            </Text>
                            <FontAwesome name="gear" size={35} color={'#fff'} />
                        </View>
                </SafeAreaView>
            )
        case 2:
            return(
                <SafeAreaView>
                        <View style={styles.header}>
                            <Link href={'../'}>
                                <FontAwesome name="home" size={30} color={'#fff'} />
                            </Link>
                            <Text
                                style={styles.title}>
                                    {name}
                            </Text>
                            <FontAwesome name="gear" size={35} color={'#fff'} />
                        </View>
                </SafeAreaView>
            )
        case 3:
            return(
                <SafeAreaView>
                        <View style={styles.header}>
                            <Link href={'../'}>
                                <FontAwesome name="home" size={30} color={'#fff'} />
                            </Link>
                            <Text
                                style={styles.title}>
                                    {name}
                            </Text>
                            <Link href={'dashboard/settings/'}>
                                <FontAwesome name="gear" size={35} color={'#fff'} />
                            </Link>
                        </View>
                </SafeAreaView>
            )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        backgroundColor: '#596dab',
        paddingHorizontal: '5%',
        paddingTop: '5%',
        height: Dimensions.get('screen').height * 0.1,
        width: Dimensions.get("screen").width,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        zIndex: 10,
        position: 'absolute'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#fff'
    }
})