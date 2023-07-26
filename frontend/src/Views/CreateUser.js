import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/AppService";
import "./CreateUser.css";

export const CreateUser = () => {
  const [approvedTerms, setApprovedTerms] = useState(false);
  const [images, setImages] = useState({});
  const [user, setUser] = useState({
    images: [],
  });

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const newUser = await createUser(user);
    console.log("new user", newUser);
    navigate("/");
  };

  const validateUser = (user) => {
    return (
      approvedTerms &&
      user.name &&
      user.email &&
      user.description &&
      user.password &&
      user.typeArt &&
      user.profilePic &&
      user.images.length > 0
    );
  };

  const handleImageChange = (field, value) => {
    const imageValues = { ...images, [field]: value };
    setImages(imageValues);
    setUser({ ...user, images: Object.values(imageValues).filter((url)=> !!url) });
  };

  const handleFieldChange = (field, value) => {
    if (field === "birthdate") {
      value = new Date(value).toISOString();
    }
    setUser({ ...user, [field]: value });
  };

  const isValid = validateUser(user);
  console.log("isValid", isValid);

  return (
    <div>
      <div className="body">
        <div className="container">
          <div className="tittleAdd">
            <h4>¡BIENVENIDX! CREA TU PERFIL COMO ARTISTA</h4>
          </div>
          <div className="row">
            <div className="col-4">
              <div>
                <label htmlFor="name">NOMBRE Y APELLIDO *</label>
                <br />
                <input
                  className="inputStyle"
                  name="name"
                  id="nameLastName"
                  type="text"
                  placeholder="nombre y apellido..."
                  required
                  minLength={4}
                  value={user.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                />
              </div>
              <label htmlFor="email">CORREO ELECTRÓNICO *</label>
              <br />
              <input
                className="inputStyle"
                name="email"
                id="email"
                type="email"
                placeholder="correo eletrónico..."
                required
                value={user.email}
                onChange={(e) => handleFieldChange("email", e.target.value)}
              />
              <div>
                <label htmlFor="birthdate">FECHA DE NACIMIENTO </label>
                <br />
                <input
                  className="inputStyle"
                  name="birthdate"
                  id="birthdate"
                  type="date"
                  onChange={(e) =>
                    handleFieldChange("birthdate", e.target.value)
                  }
                />
              </div>
              <label htmlFor="description">
                AGREGA UNA PRESENTACIÓN PARA TU PERFIL *{" "}
              </label>
              <textarea
                name="description"
                form="description"
                required
                placeholder="¡Describe tu arte, date a conocer!"
                password={user.description}
                minLength={100}
                onChange={(e) =>
                  handleFieldChange("description", e.target.value)
                }
              >
                {" "}
              </textarea>
            </div>

            <div className="col-4">
              <label htmlFor="password">CONTRASEÑA *</label>
              <br />
              <input
                className="inputStyle"
                name="password"
                id="password"
                type="password"
                placeholder="****"
                required
                value={user.password}
                minLength={4}
                onChange={(e) => handleFieldChange("password", e.target.value)}
              />
              <input
                className="inputStyle"
                type="url"
                required
                placeholder="https://img de perfil.com"
                id="profilePic"
                onChange={(e) =>
                  handleFieldChange("profilePic", e.target.value)
                }
              />
              <div>
                <input
                  className="inputStyle"
                  name="instagramLink"
                  id="instagramLink"
                  type="url"
                  placeholder="@instagram..."
                  onChange={(e) =>
                    handleFieldChange("instagramLink", e.target.value)
                  }
                />
                <input
                  className="inputStyle"
                  name="facebookLink"
                  id="facebookLink"
                  value={user.facebookLink}
                  type="url"
                  placeholder="@facebook..."
                  onChange={(e) =>
                    handleFieldChange("facebookLink", e.target.value)
                  }
                />
                <input
                  className="inputStyle"
                  name="twitterLink"
                  id="twitterLink"
                  type="url"
                  value={user.twitterLink}
                  placeholder="@twitter..."
                  onChange={(e) =>
                    handleFieldChange("twitterLink", e.target.value)
                  }
                />
                <input
                  className="inputStyle"
                  name="websiteLink"
                  id="websiteLink"
                  type="url"
                  value={user.websiteLink}
                  placeholder="www..."
                  onChange={(e) =>
                    handleFieldChange("websiteLink", e.target.value)
                  }
                />
              </div>
            </div>

            <div className="col-4">
              <label htmlFor="typeArt">¿QUÉ TIPO DE ARTE REALIZAS? *</label>
              <br />
              <select
                name="typeArt"
                id="typeArt"
                required
                value={user.typeArt}
                className="selectForm2"
                onChange={(e) => handleFieldChange("typeArt", e.target.value)}
              >
                <option value="MANUALIDADES">Manualidades</option>
                <option value="PINTURAS">Pintura</option>
                <option value="ILUSTRACIÓN">Ilustración</option>
                <option value="GRAFFITI">Graffiti</option>
                <option value="CERÁMICA">Cerámica</option>
              </select>
              <select
                name="region"
                id="region"
                className="selectForm2"
                onChange={(e) => handleFieldChange("region", e.target.value)}
              >
                <option value="RM">R.M.</option>
                <option value="VALPARAISO">Valparaíso</option>
                <option value="LOS_LAGOS">Los Lagos</option>
              </select>

              <label htmlFor="url">AGREGA IMÁGENES * </label>
              <br />
              <input
                className="inputStyle"
                type="url"
                name="url"
                id="url"
                required
                placeholder="https://img.com"
                pattern="https://.*"
                onChange={(e) => handleImageChange("image1", e.target.value)}
              />
              <input
                className="inputStyle"
                type="url"
                name="url"
                id="url"
                required
                placeholder="https://img.com"
                pattern="https://.*"
                onChange={(e) => handleImageChange("image2", e.target.value)}
              />
              <input
                className="inputStyle"
                type="url"
                name="url"
                id="url"
                required
                placeholder="https://img.com"
                pattern="https://.*"
                onChange={(e) => handleImageChange("image3", e.target.value)}
              />

              <div>
                <input
                  className="inputStyle"
                  name="hashtags"
                  id="hashtags"
                  type="text"
                  value={user.hashtags}
                  placeholder="#tu arte en hashtags favoritos..."
                  onChange={(e) =>
                    handleFieldChange("hashtags", e.target.value)
                  }
                />
              </div>
              <div className="createUserStyle">
                <input
                  className="checkStyle"
                  type="checkbox"
                  id="checkbox"
                  name="checkbox"
                  value={approvedTerms}
                  onChange={() => setApprovedTerms(!approvedTerms)}
                  required
                />
                <label for="checkbox"> Terminos y condiciones </label>
                <br />
                <button
                  disabled={!isValid}
                  onClick={handleSubmit}
                  className={`buttonCreate ${!isValid ? "invalid" : ""}`}
                >
                  Crear Usuario
                </button>
              </div>
            </div>
          </div>
          <p className="subText">
            campos requeridos (*) validamos que todos los perfiles cumplan con
            nuestras politicas y estandares en menos de 24 hrs.
          </p>
        </div>
      </div>
    </div>
  );
};
