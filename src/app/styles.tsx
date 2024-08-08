import { Dimensions, StyleSheet } from "react-native"

const app = StyleSheet.create({
    body: {
      flex: 1
    },
    container: {
      padding: 16,
    },
    content: {
      marginTop: Dimensions.get('screen').height * 0.1,
      marginBottom: Dimensions.get('screen').height * 0.1,
    },
    contentView: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 5
    },
    buttonsSview: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
    }
})

const appLayout = StyleSheet.create({
    tabStyle: {
        borderRadius: 50,
        height: Dimensions.get('screen').height * 0.07,
        marginBottom: 10,
        marginHorizontal: 10,
        position: 'absolute',
        paddingHorizontal: 10,
        backgroundColor: '#596dab',
    }
});

const user = StyleSheet.create({
    body: {
        flex: 1
    },
    container: {
        backgroundColor: '#fff',
        marginTop: Dimensions.get('screen').height * 0.1,
        marginBottom: Dimensions.get('screen').height * 0.1,
    },
    content: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

const dashboard = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

const dashboardSettings = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const styles = {
    app,
    appLayout,
    user,
    dashboard,
    dashboardSettings
}

export default styles