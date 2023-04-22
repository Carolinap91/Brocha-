const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const UsuariosSchema = new mongoose.Schema({
    name: {
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
        minlength: [10, "debe tener un mínimo de 10 caracateres"],
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
    profilePic: {
        type: String
    },
    likesCount: {
        type: Number
    },
    typeArt: {
        type: String
    },
    region: { 
        type: String
    },
    hashtags: [{
        type: String
    }],
});


UsuariosSchema.pre('save', function(next) {
    let user = this;
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('password')){ return next()};

    bcrypt.genSalt(4, function(err, salt) {
        if (err) {return next(err)};

        // hash the password using our new salt
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.password = hash;
            next();
        });
    });
});
     
UsuariosSchema.methods.comparePassword = function(password, callback) {
    bcrypt.compare(password, this.password, function(err, isMatch) {
        if (err) {return callback(err)};

        callback(null, isMatch);
    });
};
    

const Usuarios = mongoose.model("usuarios", UsuariosSchema);
module.exports = Usuarios;
