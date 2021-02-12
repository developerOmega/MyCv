import axios from 'axios';

const getReq = async (link) => {
  try {
    const req = await axios.get(link);
    return req.data.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export { getReq };