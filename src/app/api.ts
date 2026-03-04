import axios from "axios";

const instance = axios.create({ baseURL: "https://jsonplaceholder.typicode.com/posts" });

export const getActivity = async (id: number) => {
  try {
    const response = await instance.get(`/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
