import React, { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

function CourseCard({
  navigation, content: {
    id, idCourse, title, description,
  },
}) {
  return (
    <TouchableOpacity
      onPress={
        () => navigation.navigate('Edit', {
          id,
          navigation,
        })
    }
      role="button"
    >
      <View>
        <Text>
          { `# ${idCourse}` }
        </Text>
        <Text>
          { title }
        </Text>
        <Text>
          { description }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default CourseCard;
