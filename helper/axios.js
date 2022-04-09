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

const fetchDataWithParams = async (url, params) => {
  let response;

  await axios.get(`${url}/${params}`)
    .then((res) => {
      response = res.data;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('fetchDataWithParams error: ', err);
    });

  return response;
};

const putData = async (url, param, data) => {
  let response;

  await axios.put(`${url}/${param}`, data)
    .then((res) => { response = res.data; })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log('putData error: ', err);
    });

  return response;
};

export {
  fetchData, fetchDataWithParams, putData,
};
