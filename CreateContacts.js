import React, { useState, useEffect } from 'react'
import{ View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import colors from '../utils/colors.js' 

import * as SQLite from 'expo-sqlite' 
const db = SQLite.openDatabase('contacts.db')

export default function CreateContacts({navigation}){
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
    const addContact = (name, email, phone) => {
        db.transaction(tx => {
            tx.executeSql("insert into contacts(name, phone, email) values(?, ?, ?);", [name, phone, email], () => navigation.navigate("Contacts"))
        })
    }

    return (
        <View style={styles.formContainer}>
            <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={(name)=>setName(name)}/>
            <TextInput placeholder="Email" keyboardType="email-address" style={styles.input} value={email} onChangeText={(email)=>setEmail(email)}/>
            <TextInput placeholder="Phone" keyboardType="numeric" style={styles.input} value={phone} onChangeText={(phone)=>setPhone(phone)}/>
            <TouchableOpacity style={[styles.button, {backgroundColor: colors.primary}]}>
                <Text style={styles.buttonTxt} onPress={() => addContact(name, email, phone)}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, {backgroundColor: 'red'}]}>
                <Text style={styles.buttonTxt}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    formContainer: {
        backgroundColor: colors.white,
        borderRadius: 30,
        marginTop: 60,
        paddingVertical: 20,
        paddingHorizontal: 40
    },
   
    input: {
        paddingBottom: 10,
        marginBottom: 10,
        borderBottomColor: colors.secondary,
        borderBottomWidth: 1
    },

    button: {
        padding: 20,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },

    buttonTxt: {
        color: colors.white, 
    }
}) 