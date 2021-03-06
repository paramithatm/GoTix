import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'
import { SECONDARY_COLOR, WHITE, TEXT_COLOR } from '../style/style';
import Icon from 'react-native-vector-icons/Ionicons'


const TextInput = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <Text style={styles.textStyle}>
                    Search Movie or Events
                </Text>
                <Icon name='md-search' color={SECONDARY_COLOR} size={24}></Icon>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: SECONDARY_COLOR,
    },
    textInputContainer: {
        padding: 8,
        backgroundColor: WHITE,
        justifyContent: 'space-between',
        alignItems:'center',
        flexDirection:'row'
    },
    textStyle: {
        color: TEXT_COLOR
    }
})

export default TextInput