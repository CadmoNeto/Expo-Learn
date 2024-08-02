import { Tabs, usePathname } from 'expo-router';
import { Dimensions, Modal, StyleSheet, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Layout(){
    const user = "Cadmo"
    const showTabs = !usePathname().includes("dashboard/settings")
    
    return (
        <View style={{flex: 1}}>
            <Tabs screenOptions={{tabBarStyle: styles.tabStyle, tabBarLabelStyle:{fontSize: 15}, tabBarActiveTintColor: '#fff', tabBarInactiveTintColor: '#000', headerShown: false}}>
                <Tabs.Screen
                    name='index'
                    options={{
                        title: 'Início',
                        tabBarIcon: ({focused, color}) => {
                            if (focused) {
                                return <FontAwesome name='home' color={color} size={30} />
                            }
                            return <FontAwesome name='home' color={color} size={30} />
                        }
                    }}
                />
                <Tabs.Screen
                    name='dashboard'
                    options={{
                        href: '/dashboard',
                        title: 'Dashboard',
                        tabBarIcon: ({focused, color}) => {
                            if (focused) {
                                return <FontAwesome name='bar-chart' color={color} size={30} />
                            }
                            return <FontAwesome name='bar-chart' color={color} size={30} />
                        },
                        tabBarStyle: showTabs ? styles.tabStyle: {display: 'none'}
                    }}
                />
                <Tabs.Screen
                    name={'user/[user]'}
                    options={{
                        title: 'Usuário',
                        href: "user/" + user,
                        tabBarIcon: ({focused, color}) => {
                            if (focused) {
                                return <FontAwesome name='user' color={color} size={30} />
                            }
                            return <FontAwesome name='user' color={color} size={30} />
                        }
                    }}
                />
            </Tabs>
        </View>
    )
}

const styles = StyleSheet.create({
  tabStyle: {
    borderRadius: 50,
    height: Dimensions.get('screen').height * 0.07,
    marginBottom: 10,
    marginHorizontal: 10,
    position: 'relative',
    backgroundColor: '#596dab',
  }
});
