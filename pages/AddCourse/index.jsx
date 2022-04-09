import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
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
          disabled={disableBtn}
          onPress={handleSubmit}
        >
          <Text>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>Código</Text>
        <TextInput
          placeholder="Código"
          value={code}
          onChangeText={(text) => setCode(text)}
        />
      </View>
      <View>
        <Text>Título</Text>
        <TextInput
          placeholder="Título"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />
      </View>
      <View>
        <Text>Descrição</Text>
        <TextInput
          placeholder="Descrição"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
      </View>
    </View>
  );
}

export default AddCourse;
