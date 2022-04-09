import React from 'react';
import { View, Button } from 'react-native';
import CourseCard from '../../components/CourseCard';
import { fetchData } from '../../helper/axios';

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
            id: course.id,
            idCourse: course.idcurso,
            title: course.ds_titulo,
            description: course.ds_descricao,
          };

          return (
            <CourseCard
              key={course.idcurso}
              navigation={navigation}
              content={courseCardProps}
            />
          );
        })}
      </View>
    </View>
  );
}

export default HomePage;
