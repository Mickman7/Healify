import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet, Platform } from 'react-native';
// import { pick } from "@react-native-documents/picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';
import { Ionicons } from "@expo/vector-icons";



const UploadCSV = () => {
    const [data, setData] = useState([]);

    const selectDocument = async() => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
              type: 'text/csv', 
            });
            console.log('DocumentPicker result:', result);
      
            if (!result.canceled && result.assets && result.assets.length > 0) {
              const fileUri = result.assets[0].uri;
      
              // On Android, the URI might be a `content://` URI, which needs to be copied to a local file
              if (Platform.OS === 'android') {
                const fileUriParts = result.uri.split('/');
                const fileName = fileUriParts[fileUriParts.length - 1];
                const newUri = `${FileSystem.documentDirectory}${fileName}`;
      
                // Copy the file to a local directory
                await FileSystem.copyAsync({
                  from: result.uri,
                  to: newUri,
                });
      
                fileUri = newUri;
              }
      
              // Read the file content using expo-file-system
              const fileContent = await FileSystem.readAsStringAsync(fileUri);
      
              // Parse the CSV data
              Papa.parse(fileContent, {
                header: true, // Assumes the first row is the header
                dynamicTyping: true, // Automatically convert numeric values
                complete: (results) => {
                  setData(results.data); // Set the parsed data to state
                  console.log(results.data)
                },
              });
            }else{
                Alert.alert('error')
            }
          } catch (error) {
            console.error('Error picking or parsing the document:', error);
          }
       
    }

  return (
    <View>
      <TouchableOpacity onPress={selectDocument} style={styles.uploadBtn}>
        <View style={styles.addBtn}>
            <Ionicons name='add' size={30} color='white' style={{fontWeight: 'bold'}}/>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default UploadCSV

const styles = StyleSheet.create({
    uploadBtn: {
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: 'grey',
        padding: 50,
        width: 350,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        shadowColor: "grey",
        shadowOffset: { width: -3, height: -3 }, 
        shadowOpacity: 0.5,
        shadowRadius: 7,
        elevation: 8,
        alignSelf: 'center'
    },
    addBtn: {
        backgroundColor: '#001C45',
        width: 50,
        height: 50,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})