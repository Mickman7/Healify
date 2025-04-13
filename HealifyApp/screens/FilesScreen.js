import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import Header from '../layout/Header'
import { Ionicons } from "@expo/vector-icons";
import FileItem from '../components/FileItem';


const FilesScreen = ({navigation}) => {
    const [value, setValue] = useState(null);

    const files = [
        {
            filename: 'File 1',
            openedAt: 'Today 7:09AM'
        },
        {
            filename: 'File 2',
            openedAt: 'Today 7:09AM'
        },
        {
            filename: 'File 3',
            openedAt: 'Today 7:09AM'
        },
        {
            filename: 'File 4',
            openedAt: 'Today 7:09AM'
        },

    ]
  return (
    <View>
      <Header
            headerText={"Files"}
            rightItem={
              <Image
                source={require("../assets/AppLogo.png")}
                style={styles.logoStyling}
              />
            }
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 25, marginBottom: 20, marginTop: 20}}>
            <Text style={{fontSize: 25, fontWeight: 'bold'}}>All Files</Text>
            <TouchableOpacity onPress={() => console.log('Files sorted')}>
                <Ionicons name='swap-vertical-outline' size={30}/>
            </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollContainer}>
            {files.map((file, index) => (
                <FileItem  
                    key={index} 
                    filename={file.filename} 
                    timeOpened={file.openedAt} 
                    onClick={() => navigation.navigate('PatientResultList')} // Updated to use navigation
                />
            ))}
        </ScrollView>

        <View style={{width: '100%', paddingHorizontal: 35, flexDirection: 'row', alignSelf: 'flex-end'}}>
            <TouchableOpacity style={styles.fileBtn} onPress={() => navigation.navigate('PatientResultList')}>
                <Ionicons name='download-outline' size={30} color='white'/>
            </TouchableOpacity>
            <TextInput 
                value={value}
                onChangeText={setValue}
                placeholder='Search your Files'
                style={styles.fileSearchBar}
            />
        </View>
    </View>
  )
}

export default FilesScreen

const styles = StyleSheet.create({
    scrollContainer: {
        paddingHorizontal: 30,
        height: '70%'
    },
    fileBtn: {
        backgroundColor: '#001C45',
        width: 60,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
      },
      fileSearchBar: {
        width: 300,
        height: 50,
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        paddingHorizontal: 10
      }
})