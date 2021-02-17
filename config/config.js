const nodeEnv = process.env.NODE_ENV || 'development'; 

const url =  nodeEnv == 'development' ? 'http://localhost:4000' : 'https://mycvbackend.herokuapp.com';
const id = nodeEnv == 'development' ? 2 : 1;

export { url, id };