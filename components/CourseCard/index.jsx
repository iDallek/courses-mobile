import React, { StyleSheet, View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

function CourseCard({
  navigation, content: {
    id, idCourse, title, description,
  },
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={
        () => navigation.navigate('Edit', {
          id,
          navigation,
        })
      }
      role="button"
    >
      <View style={styles.ribbon} />
      <View style={styles.ribbon2} />
      <View style={styles.ribbon3} />
      <View>
        <Text style={styles.code}>
          { `# ${idCourse}` }
        </Text>
        <Text style={styles.title}>
          { title }
        </Text>
        <Text style={styles.description}>
          { description }
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    position: 'relative',
    width: '300px',
    height: '250px',
    backgroundColor: '#fff',
    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.15)',
    borderRadius: '15px',
    marginTop: '60px',
  },

  ribbon: {
    position: 'absolute',
    top: '40px',
    left: '-12px',
    width: '280px',
    height: '40px',
    backgroundColor: '#247cff',
    borderRadius: '20px',
    borderBottomLeftRadius: '0',
  },

  ribbon2: {
    position: 'absolute',
    top: '80px',
    left: '-12px',
    width: '12px',
    height: '24px',
    backgroundColor: '#002dc2',
    borderTopLeftRadius: '25px',
    borderBottomLeftRadius: '25px',
    zIndex: '2',
  },

  ribbon3: {
    position: 'absolute',
    top: '80px',
    left: '-12px',
    width: '12px',
    height: '14px',
    backgroundColor: '#247cff',
  },

  code: {
    position: 'absolute',
    top: '8px',
    right: '15px',
    fontWeight: '900',
    fontSize: '20px',
    color: '#9b9b9b',
  },

  title: {
    position: 'absolute',
    top: '45px',
    left: '15px',
    fontSize: '20px',
    fontWeight: '200',
    color: '#fff',
  },

  description: {
    position: 'absolute',
    top: '120px',
    left: '15px',
    marginRight: '15px',
    fontSize: '15px',
    fontWeight: '300',
    color: 'gray',
  },
});

export default CourseCard;
