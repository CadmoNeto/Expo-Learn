import { Link, Stack } from "expo-router";
import { FontAwesome } from '@expo/vector-icons'
import Header from "../../components/header";

export default function Layout(){
    return(
        <Stack screenOptions={{animation: "none"}}>
            <Stack.Screen
                name="index/index"
                options={{
                    header() {
                        return(
                            <Header name="Dashboard" tipo={3} />
                        )
                    },
                }}
            />
            <Stack.Screen
                name="settings/index"
                options={{
                    headerStyle:{
                        backgroundColor: '#fff'
                    },
                    headerShadowVisible: false,
                    headerTitleStyle:{
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#000'
                    },
                    headerLeft: () => 
                        <Link href={'dashboard/'} style={{marginRight: 15}}>
                            <FontAwesome name="arrow-left" size={25} color={'#000'} />
                        </Link>
                    ,
                    title: "Configurações"
                }}
            />
        </Stack>
    )
}