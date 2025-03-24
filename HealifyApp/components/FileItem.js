import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const FileItem = ({filename, timeOpened, onClick}) => {
  return (
    <View>
        <TouchableOpacity onPress={onClick} style={styles.fileItem}> 
            <Text style={styles.filenameText}>{filename}</Text>
            <Text style={styles.openTimeText}>{timeOpened}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default FileItem

const styles = StyleSheet.create({
    fileItem: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: "grey",
        shadowOffset: { width: 3, height: 3 }, 
        shadowOpacity: 0.5,
        shadowRadius: 7,
        marginVertical: 5

    },
    filenameText: {

    },
    openTimeText: {
        color: 'grey',
        alignSelf: 'flex-end',
        marginRight: 5
    }
})