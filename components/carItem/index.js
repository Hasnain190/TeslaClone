import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './styles'
import StyledButton from '../StyledButtons'

const CarItem = (props) => {
    const { name, tagline, image, taglineCTA } = props.car
    return (

        <View style={styles.carContainer}>

            <ImageBackground style={styles.image} source={image} ></ImageBackground>
            <View style={styles.titles}>
                <Text style={styles.title} >{name}</Text>
                <Text style={styles.subtitle}>{tagline}{"\n"}</Text>

                <Text style={styles.taglineCTA}>
                    {taglineCTA}
                </Text>




            </View>
            <View style={styles.buttonContainer}>
                <StyledButton type={'primary'} content={'Custom Order'} onPress={() => console.warn('custom order is being processed...')} />
                <StyledButton type={'secondary'} content={'Existing Inventory'} onPress={() => console.warn(' Existing inventory is pressed...')} />
            </View>
        </View >

    )
}

export default CarItem