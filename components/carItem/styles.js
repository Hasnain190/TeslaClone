

import { StyleSheet, Dimensions } from 'react-native';
const styles = StyleSheet.create({
    carContainer: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,

    }
    ,
    titles: {

        marginTop: '30%',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5c5c',
    },
    taglineCTA: {
        fontStyle: 'italic',
        textDecorationLine: 'underline',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
    },

    buttonContainer: {
        position: 'absolute',
        bottom: 30,
        width: '100%',
    },


})

export default styles;
