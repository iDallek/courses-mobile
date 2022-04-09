import React, { View, Text, TouchableOpacity } from 'react-native';

function Header({ props: { title, buttons } }) {
  return (
    <View>
      <Text>{ title }</Text>
      <View>
        { buttons.map((button) => (
          <TouchableOpacity onPress={button.onPress}>
            <Text>{ button.title }</Text>
          </TouchableOpacity>
        )) }
      </View>
    </View>
  );
}

export default Header;
