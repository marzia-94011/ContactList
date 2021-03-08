import React from 'react'
import{ View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../utils/colors.js' 
import Avatar from './Avatar.js'
import { MaterialIcons } from "@expo/vector-icons";

export default function ContatcListItem({name, phone, onPress, onDeleteContact}){
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contactInfo}>
                <Avatar name={name} size={40}/>
                <View style={styles.detail}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subTitle}>{phone}</Text>
                </View>
                <View style={styles.deleteIcon}>
                    <MaterialIcons name="delete" color="red" size={24} onPress={onDeleteContact} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingLeft: 24
    }, 

    contactInfo: {
        flex: 1,
        flexDirection: "row",
        paddingVertical: 16,
        paddingHorizontal: 24,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 0.5,
    },

    detail: {
        flex: 2,
        marginLeft: 20
    },

    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "bold"
    },
    subTitle: {
        color: colors.primary
    },

    deleteIcon: {
        flex: 1,
        marginLeft: 100
    }
})