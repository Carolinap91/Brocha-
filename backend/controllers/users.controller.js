const UsersModel =  require("../models/users");


module.exports.createUser = async (request, response) => {
    let requestData = request.body;
    try {
        let newUser = await UsersModel.create(requestData);    
        response.json(newUser);
    } catch(error) {
        response.json(error);
    }
}

module.exports.findUserById = async (request, response) => {
    const userId = request.params.id;
    const usuarioEncontrado = await UsersModel.findById({ _id: userId });
    console.log("usuario encontrado");
    response.json(usuarioEncontrado);
}

module.exports.deleteUserById = async (request, response) => {
    const userId = request.params.id;
    await UsersModel.deleteOne({ _id: userId });
    console.log("usuario eliminado");
    response.json({
        "status": "ok"
    });
}

