const UserController = require("../controllers/users.controller");

module.exports = app => {
    app.post("/api/users", UserController.createUser);
    app.get("/api/users", UserController.searchUsers); // [{}, {}, {}]
    app.get("/api/users/:id", UserController.findUserById); // {}
    app.delete("/api/users/:id", UserController.deleteUserById);
};

