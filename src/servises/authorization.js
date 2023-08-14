import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const setToken = token => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const dellToken = () => {
  instance.defaults.headers['Authorization']='';
};

export const signUp = async body => {
  const responce = await instance.post('/users/signup', body);
  setToken(`Bearer ${responce.data.token}`);
  return responce.data;
};

export const login = async body => {
  const responce = await instance.post('/users/login', body);
  setToken(`Bearer ${responce.data.token}`);
  return responce.data;
};

export const getProfile = async () => {
  const { data } = await instance('users/current');
  return data;
};