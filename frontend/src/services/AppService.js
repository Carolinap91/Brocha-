import axios from 'axios';

const URL = "http://localhost:8080/api/artistCollection"


export const createUser = async (user)=> {
    try {
        const {data} = await axios.post(`${URL}/new`, user);
        return data.user;
    } catch (error) {
        console.log('an error occurred creating a new user', {error, user});
    }
}


//////////////////

// export const getAllUsersManualidades = async ()=> {
//     try {
//         const {data} = await axios.get(URL);
//         return data.user;
//     } catch (error) {
//         console.log('an error occurred getting users from Manualidades', {error});
//     }
// }


// export const getUserDetails = async (id)=> {
//     try {
//         const {data} = await axios.get(`${URL}/${id}`);
//         return data.user;
//     } catch (error) {
//         console.log(`an error occurred getting a user data ${id}`, {error});
//     }
// }

// export const updateUser = async (id, user)=> {
//     try {
//         const {data} = await axios.put(`${URL}/update/${id}`, user);
//         return data.user;
//     } catch (error) {
//         console.log(`an error occurred updating a user ${id}`, user);
//     }
// }