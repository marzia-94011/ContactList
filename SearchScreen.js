import React, {useState, useEffect} from 'react'
import{ View, Text, StyleSheet, TextInput, FlatList } from 'react-native'

import ContactListItem from '../components/ContactListItem'
import colors from '../utils/colors.js' 

import * as SQLite from 'expo-sqlite' 

const db = SQLite.openDatabase('contacts.db')

export default function SearchScreen(){
    const [allContacts, setAllContacts] = useState([])
    const [filteredContacts, setFilteredContacts] = useState([])
    
    useEffect(()=>{
        db.transaction(tx => {
            tx.executeSql('select * from contacts', [], (tx, {rows}) => {
                var data = []
                for (let index = 0; index < rows.length; index++) {
                   data.push(rows[index])
                    
                }

                setAllContacts(data)
            })
        })
    })

    const searchContact = (text) => {
        const filterText = text.toLowerCase()
        const newContacts = allContacts.filter((contact) => {
            const item = contact.name.toLowerCase()
            return item.indexOf(filterText) > -1
        })

        setFilteredContacts(newContacts)

        if(text.length < 1){
            setFilteredContacts([])
        }
    }

    return (
        <View style={styles.searchContainer}>
            <View>
                <TextInput placeholder="Search..." style={styles.searchInput} onChangeText={(text) => searchContact(text)}/>
            </View>
            {filteredContacts.length > 0 ? <FlatList 
            data={filteredContacts}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return <ContactListItem name={item.name} phone={item.phone} onPress={() => navigation.navigate("Profile", {item: item})} onDeleteContact={() => deleteContact(item.id)}/>
            }}
            />: <View><Text>Nothing to display!</Text></View>}
     
        </View>
    )
}

const styles = StyleSheet.create({
    searchContainer: {
        backgroundColor: colors.white
    },
   
    searchInput: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        margin: 20,
        borderBottomColor: colors.white
    },
})