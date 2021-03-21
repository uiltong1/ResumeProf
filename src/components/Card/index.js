import React from 'react'
import {View, Text} from 'react-native'

import style from './style'

const Card = ({titulo, children}) => {
    return (
        <View style={style.container}>
            <View style={style.card}>
                <View style={style.header}>
                    <Text>{titulo}</Text>
                </View>
                <View style={style.content}>
                    {children}
                </View>
            </View>
        </View>
    )
}

export default Card;