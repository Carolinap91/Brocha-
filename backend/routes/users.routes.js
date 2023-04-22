const UserController = require("../controllers/users.controller");

module.exports = app => {
    app.get("/api/users", UserController.searchUsers);
    app.get("/api/users/:id", UserController.findUserById); 
    app.post("/api/users", UserController.createUser);

    // app.delete("/api/users/:id", UserController.deleteUserById);
};

