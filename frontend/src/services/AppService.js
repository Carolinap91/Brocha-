import axios from "axios";

const URL = "http://localhost:8080/api";

export const createUser = async (user) => {
  try {
    const { data } = await axios.post(`${URL}/users`, user);
    return data.user;
  } catch (error) {
    console.log("an error occurred creating a new user", { error, user });

  }
};

export const searchUsers = async (filters = {}) => {
  try {
    const response = await axios.get(`${URL}/users`, {params: filters});
    console.log('response', response)
    return response.data;
  } catch (error) {
    console.log("an error occurred getting users", { filters, error });
    throw error;
  }
};

export const getUserDetails = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/users/${id}`);
    return data.user;
  } catch (error) {
    console.log(`an error occurred getting a user data ${id}`, { error });
  }
};