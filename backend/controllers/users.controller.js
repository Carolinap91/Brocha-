const UsersModel =  require("../models/users");


const createUser = async (request, response) => {
    let requestData = request.body;
    try {
        let newUser = await UsersModel.create(requestData);    
        response.json(newUser);
    } catch(error) {
        console.log('error creating user', {error})
        if (error.code == 11000) {
            error = {"message": "user already exists"}
        };
    response.status(500).json(error);
    }
}

const searchUsers = async (request, response) => {
    const users = await UsersModel.find(request.query);
    return response.json(users);;
}

const findUserById = async (request, response) => {
    const userId = request.params.id;
    const usuarioEncontrado = await UsersModel.findById({ _id: userId });
    console.log("usuario encontrado");
    response.json(usuarioEncontrado);
}

const deleteUserById = async (request, response) => {
    const userId = request.params.id;
    await UsersModel.deleteOne({ _id: userId });
    console.log("usuario eliminado");
    response.json({
        "status": "ok"
    });
}

module.exports = {
    createUser,
    findUserById,
    searchUsers,
    deleteUserById,
}