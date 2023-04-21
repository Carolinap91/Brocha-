const mongoose = require("mongoose");

const UsuariosSchema = new mongoose.Schema({
    nameLastName: {
        type: String,
        required: [true, "Nombre y Apellido es requerido"],
        minlength: [4, "Debe tener un mínimo de 3 caracateres"]
    },
    email: {
        type: String,
        required: [true, "Email es requerido"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "Contraseña es requerido"],
        minlength: [4, "Debe tener un mínimo de 4 caracateres"]
    },
    birthdate: {
        type: Date,
    },
    description: {
        type: String,
        required: [true, "Descripción es requerido"],
        minlength: [300, "debe tener un mínimo de 300 caracateres"],
    },
    instagramLink: {
        type: String,
    },
    facebookLink: {
        type: String,
    },
    twitterLink: {
        type: String,
    },
    websiteLink: {
        type: String,
    },
    images: [{
        type: String
    }],
    likesCount: {
        type: Number
    },
    typeArt: {
        type: String
    },
    region: { 
        type: String
    },
    hstash: {
        type: String,
    },
});

const Usuarios = mongoose.model("usuarios", UsuariosSchema);
module.exports = Usuarios;

// user
// id, nombre, mail ... ig_link, fb_link, description, likes
// valores: 
// 1, gonza, g@g.com, ig.....
// 2, yane, y@y.com, ig.....

// 1 -> N

// images
// id, url, user_id
// 1, www.ig.com/123, 1

// forma 3
// id, nombre, mail ... ig_link, fb_link, description, likes, TAGS
// 1, gonza, g@g.com, ig....., [manualiddes, bla, foo]

// ---- forma 1
// user_tags
// user_id, tag_name
// valores:
// (1, "manualidades")
// (1, "grafiti")
// (1, "pintura")
// (2, "manualidades")
// (2, "Grafiti")

// ---- forma 2
// user_tags:
// user_id, tag_id
// 1, 1

// ---- forma 2
// tags
// id, tag_name
// 1, grafiti

