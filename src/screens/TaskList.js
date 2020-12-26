import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet } from 'react-native'

//Imagnes 
import todayImage from './src/assets/imgs/today.jpeg'


export default class TaskList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={todayImage} style={style.background} />

                <View style={style.tackList}>
                    <Text>
                        TaskList
                     </Text>
                </View>


            </View>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1
    },
    background: {
        flex: 3
    },
    tackList: {
        flex: 7
    }
})