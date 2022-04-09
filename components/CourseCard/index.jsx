import React, { View, Text } from 'react-native';

function CourseCard({
  content: {
    id, title, description, onPress,
  },
}) {
  return (
    <View
      onPress={onPress}
      role="button"
    >
      <View>
        <Text>
          { `# ${id}` }
        </Text>
        <Text>
          { title }
        </Text>
        <Text>
          { description }
        </Text>
      </View>
    </View>
  );
}

export default CourseCard;
