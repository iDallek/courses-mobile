import axios from 'axios';

const fetchData = async (url) => {
  let response;

  await axios.get(url)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('fetchData error: ', err);
    });

  return response;
};

export {
  fetchData,
};
