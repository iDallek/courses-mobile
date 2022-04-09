import React from 'react';
import { View, Button } from 'react-native';
import CourseCard from '../components/CourseCard';
import { fetchData } from '../helper/axios';

function HomePage({ navigation }) {
  const [courses, setCourses] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const apiUrl = 'https://courses-crud-api.herokuapp.com/curso';

      setCourses(await fetchData(apiUrl));
    };

    fetch();
  }, []);

  return (
    <View>
      <Button title="Adicionar" />
      <View>
        {courses?.map((course) => {
          const courseCardProps = {
            id: course.idcurso,
            title: course.ds_titulo,
            description: course.ds_descricao,
            onPress: () => navigation.navigate('CourseEdit', {
              id: course.idcurso,
            }),
          };

          return <CourseCard key={course.idcurso} content={courseCardProps} />;
        })}
      </View>
    </View>
  );
}

export default HomePage;
