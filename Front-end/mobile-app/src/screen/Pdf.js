import React, {useState} from "react";
import {Text, View, StyleSheet, Button, TextInput} from "react-native";
import * as ExpoDocumentPicker from "expo-document-picker";
import axios from "axios";

const Pdf = () => {
    const [pdfDoc, setPdfDoc] = useState()
    const [question, setQuestion] = useState('')
    const [result, setResult] = useState('')
    const handleFilePicker = async () => {
        let result = await ExpoDocumentPicker.getDocumentAsync({copyToCacheDirectory: true});
        setPdfDoc(result.file)
    }
    
    const handleUpload = async () => {
        try {
            const data = new FormData();
            data.append('question', question);
            data.append('file', pdfDoc);
            const response = await axios.post('http://10.0.2.2:6154/file/upload', data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            if (response.status === 200) {
                setQuestion('');
                setResult(response.data.text);
            }
        } catch (error) {
            console.error('Error al manejar la carga:', error);
        }
    };

    return (
        <View>
            <Button title={'Selecciona el documento PDF'} color={'#D2B48C'} onPress={handleFilePicker}/>
            <TextInput style={styles.input} value={question} onChangeText={setQuestion}
                       placeholder={'Ingresa tu pregunta'}/>
            <Button title={'Enviar'} color={'#D2B48C'} onPress={handleUpload}/>
            <Text>{result}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        margin: 10
    }
})
export default Pdf