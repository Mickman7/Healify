import React, { useState } from 'react';
import { TouchableOpacity, Text, View, Alert, StyleSheet, Platform } from 'react-native';
// import { pick } from "@react-native-documents/picker";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from 'expo-file-system';
import Papa from 'papaparse';
import { Ionicons } from "@expo/vector-icons";
import * as XLSX from 'xlsx'; // Import XLSX for parsing Excel files

const UploadCSV = ({ data, setData }) => {
    const [fileName, setFileName] = useState(""); // State to store the file name

    const selectDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: ['text/csv', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'], // Accept CSV and XLSX
            });
            console.log('DocumentPicker result:', result);

            if (!result.canceled && result.assets && result.assets.length > 0) {
                const fileUri = result.assets[0].uri;
                setFileName(result.assets[0].name); // Set the file name

                // On Android, handle content:// URIs
                if (Platform.OS === 'android') {
                    const fileUriParts = result.uri.split('/');
                    const fileName = fileUriParts[fileUriParts.length - 1];
                    const newUri = `${FileSystem.documentDirectory}${fileName}`;

                    await FileSystem.copyAsync({
                        from: result.uri,
                        to: newUri,
                    });

                    fileUri = newUri;
                }

                // Read the file content
                const fileContent = await FileSystem.readAsStringAsync(fileUri, {
                    encoding: FileSystem.EncodingType.Base64, // Read as Base64 for XLSX
                });

                if (result.assets[0].mimeType === 'text/csv') {
                    // Parse CSV data
                    Papa.parse(fileContent, {
                        header: true,
                        dynamicTyping: true,
                        complete: (results) => {
                            const filteredData = results.data.filter(row =>
                                Object.values(row).some(value => value !== null && value !== "")
                            );
                            setData(filteredData);
                        },
                    });
                } else if (result.assets[0].mimeType === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') {
                    // Parse XLSX data
                    const workbook = XLSX.read(fileContent, { type: 'base64' });
                    const sheetName = workbook.SheetNames[0]; // Get the first sheet
                    const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
                    setData(sheetData); // Set parsed XLSX data
                }
            } else {
                Alert.alert('Error', 'No file selected or unsupported file type.');
            }
        } catch (error) {
            console.error('Error picking or parsing the document:', error);
        }
    }

  return (
    <View>
      <TouchableOpacity onPress={selectDocument} style={styles.uploadBtn}>
            {data.length === 0 ? (
              <View style={styles.addBtn}>
                <Ionicons name='add' size={30} color='white' style={{ fontWeight: 'bold' }} />
            </View>
            ) : (
              <View>
                <Text style={{fontSize: 20}}>File Uploaded:</Text>
                <Text style={styles.fileNameText}>{fileName}</Text>
              </View>
            )}
  
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
    },
    resultText: {
        marginTop: 10,
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
    fileNameText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
})