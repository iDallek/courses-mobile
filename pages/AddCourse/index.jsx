import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { postData } from '../../helper/axios';

function AddCourse({ navigation }) {
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const [disableBtn, setDisableBtn] = React.useState(true);

  useEffect(() => {
    if (code && title && description) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [code, title, description]);

  const handleSubmit = async () => {
    await postData('https://courses-crud-api.herokuapp.com/curso', {
      idcurso: parseInt(code, 10),
      ds_titulo: title,
      ds_descricao: description,
    });

    navigation.replace('Home');
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          style={styles.button}
          disabled={disableBtn}
          onPress={handleSubmit}
        >
          <Text style={styles.textBtn}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <View>
          <Text style={styles.label}>Código</Text>
          <TextInput
            style={styles.input}
            placeholder="Código"
            value={code}
            onChangeText={(text) => setCode(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Título</Text>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={(text) => setDescription(text)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    display: 'flex',
    flexDirection: 'column',
    width: 'auto',
    gap: '1rem',
    marginTop: '3rem',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    paddingLeft: '0.75rem',
    paddingRight: '2.75rem',
    color: '#374151',
    fontSize: '0.875rem',
    lineHeight: '1.25',
    width: '100%',
    borderRadius: '0.25rem',
    borderWidth: '1px',
    appearance: 'none',
    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  },

  label: {
    fontSize: '0.875rem',
    lineHeight: '1.25',
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: '0.5rem',
  },

  button: {
    display: 'block',
    margin: 'auto',
    backgroundColor: '#1696ff',
    width: '100%',
    padding: '8px',
    textAlign: 'center',
  },

  textBtn: {
    color: '#fff',
    fontSize: '14px',
    textTransform: 'uppercase',
    fontWeight: '600',
  },
});

export default AddCourse;
