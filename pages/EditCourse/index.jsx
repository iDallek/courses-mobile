import React, { useEffect, useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native';
import { fetchDataWithParams, putData, removeData } from '../../helper/axios';

function EditCourse({ navigation, route }) {
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { id } = route.params;

  useEffect(() => {
    const fetchData = async () => {
      const courseData = await fetchDataWithParams('https://courses-crud-api.herokuapp.com/curso', id);

      setCode(courseData?.idcurso);
      setTitle(courseData?.ds_titulo);
      setDescription(courseData?.ds_descricao);
    };

    fetchData();
  }, []);

  const [disableBtn, setDisableBtn] = useState(true);

  useEffect(() => {
    if (code && title && description) {
      setDisableBtn(false);
    } else {
      setDisableBtn(true);
    }
  }, [code, title, description]);

  const handleSubmit = async () => {
    await putData('https://courses-crud-api.herokuapp.com/curso', id, {
      idcurso: parseInt(code, 10),
      ds_titulo: title,
      ds_descricao: description,
    });

    navigation.replace('Home');
  };

  const [toggleModal, setToggleModal] = React.useState(styles.none);

  const removeSubmit = async () => {
    await removeData('https://courses-crud-api.herokuapp.com/curso', id);

    navigation.replace('Home');
  };

  return (
    <View>
      <View>
        <TouchableOpacity
          style={styles.margin}
          disabled={disableBtn}
          onPress={handleSubmit}
        >
          <Text style={styles.button}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.margin}
          onPress={() => setToggleModal(styles.visible)}
        >
          <Text style={styles.button}>Excluir</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.modal, toggleModal]}>
        <View style={styles.modalContent}>
          <Text>Confirma a exclusão?</Text>
          <Text>
            Deseja remover o registro
            {' '}
            {title}
            ?
          </Text>
          <View>
            <TouchableOpacity
              onPress={() => setToggleModal(styles.none)}
            >
              <Text>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={removeSubmit}
            >
              <Text>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  none: {
    display: 'none',
  },

  visible: {
    display: 'visible',
  },

  modal: {
    display: 'none',
    position: 'fixed',
    zIndex: '1',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },

  modalContent: {
    backgroundColor: '#fff',
    borderRadius: '4',
    border: '1px solid #888',
    padding: '20px',
    margin: 'auto',
    width: '80%',
  },

  button: {
    display: 'block',
    margin: 'auto',
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: '4px',
    width: '80%',
    color: '#fff',
    padding: '10px',
    textAlign: 'center',
    fontSize: '16px',
  },

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

  margin: {
    margin: '5px',
  },
});

export default EditCourse;
