import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'



export default function Header() {
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./images/logo.png')} />
            <Image style={styles.menu} source={require('./images/menu.png')} />
        </View>
    )
}