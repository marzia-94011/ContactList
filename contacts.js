import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'

const contacts=[
    {id: '1', name:'fahima', phone:'0477849289', email:'fahima@gmail.com'},
    {id: '2', name:'sana', phone:'044778489', email:'sana@gmail.com'},
    {id: '3', name:'sema', phone:'2345678', email:'semaseta@gmail.com'},
    {id: '4', name:'seta', phone:'077887849289', email:'fahima@gmail.com'},
    {id: '5', name:'farhan', phone:'0777849289', email:'farhan@gmail.com'}
]

export default function Contacts(){
   return(
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) =>{
        return <ContactListItem name={item.name} phone={item.phone} />
    }}
   />
   )
  
} 

const styles = StyleSheet.create({
  

})