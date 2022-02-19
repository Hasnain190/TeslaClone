import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import cars from './cars'
import CarItem from '../carItem'


export default function CarsList() {
    return (
        <View>
            <FlatList
                data={cars}
                renderItem={({ item }) => <CarItem car={item} />}
                keyExtractor={item => item.name}
                snapToAlignment={'center'}
                snapToInterval={Dimensions.get('window').height}
                decelerationRate={'fast'}
                showsVerticalScrollIndicator={false}
            />





        </View>
    )
}