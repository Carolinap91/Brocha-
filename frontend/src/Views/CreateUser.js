import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {NavBarMenu, Footer}  from '../Components';
import './CreateUser.css'


export const CreateUser = () => {
    const [user, setUser] = useState({
        nameLastName: true,
        email: true,
        birthdate: true,
        description: true,
        password: true,

        
    });

    return (
        <div>

            <div className="body">
                <div className="container" >
                    <div className="tittleAdd">
                        <h4>¡BIENVENIDX! CREA TU PERFIL COMO ARTISTA</h4>
                    </div>
                    <div className="row">
                        <div className= "col-4">
                            <div>
                                <label htmlFor="name">NOMBRE Y APELLIDO *</label><br/>
                                <input className="inputStyle"  name="name" id="nameLastName" type="text" placeholder="nombre y apellido..." required minLength={4} onChange={(e)=> setUser({...user, nameLastName: e.target.value})} />
                            </div>
                            <label htmlFor="email">CORREO ELECTRÓNICO *</label><br/>
                            <input className="inputStyle" name="email" id="email" type="email"  placeholder="correo eletrónico..." required onChange={(e)=> setUser({...user, email: e.target.value})} />
                            <div>
                                <label htmlFor="birthdate">FECHA DE NACIMIENTO </label><br/>
                                <input className="inputStyle" name="birthdate" id="birthdate" type="date" onChange={(e)=> setUser({...user, birthdate: e.target.value})} />
                            </div>
                            <label htmlFor="description">AGREGA UNA PRESENTACIÓN PARA TU PERFIL * </label>
                            <textarea name="description" form="description" required  placeholder="¡Describe tu arte, date a conocer!" minLength={100} onChange={(e)=> setUser({...user, description: e.target.value})}   > </textarea>
                        </div>
                        
                        <div className="col-4">
                        
                            <label htmlFor="password">CONTRASEÑA *</label><br/>
                            <input className="inputStyle" name="password" id="password" type="password" placeholder="****" required minLength={4} onChange={(e)=> setUser({...user, password: e.target.value})} />
                            <input className="inputStyle" type="url"  required placeholder="https://img de perfil.com" id="profilePic" onChange={(e)=> setUser({...user, profilePic: e.target.value})} />    
                            <div>
                                <input className="inputStyle" name="instagramLink" id="instagramLink" type="url" placeholder="@instagram..." onChange={(e)=> setUser({...user, instagramLink: e.target.value})} />
                                <input className="inputStyle" name="facebookLink" id="facebookLink" type="url" placeholder="@facebook..." onChange={(e)=> setUser({...user, facebookLink: e.target.value})} />
                                <input className="inputStyle" name="twitterLink" id="twitterLink" type="url" placeholder="@twitter..." onChange={(e)=> setUser({...user, twitterLink: e.target.value})} />
                                <input className="inputStyle" name="websiteLink" id="websiteLink" type="url" placeholder="www..." onChange={(e)=> setUser({...user, websiteLink: e.target.value})} />
                            </div>
                        </div>

                        <div className="col-4">
                            <label htmlFor="typeArt">¿QUÉ TIPO DE ARTE REALIZAS? *</label><br/>
                            <select name="typeArt" id="typeArt" required className='selectForm2' onChange={(e)=> setUser({...user, typeArt: e.target.value})}>
                                <option value="manualidades">Manualidades</option>
                                <option value="pintura">Pintura</option>
                                <option value="ilustracion">Ilustración</option>
                                <option value="graffiti">Graffiti</option>
                                <option value="ceramica">Cerámica</option>
                            </select>
                            <select name="region" id="region" className='selectForm2' onChange={(e)=> setUser({...user, region: e.target.value})}>
                                <option value="R.M.">R.M.</option>
                                <option value="R. OHiggins">Región de OHiggins</option>
                                <option value="R. Valparaíso">Región de Valparaíso</option>
                                <option value="R. Coquimbo">Región de Coquimbo</option>
                            </select>
                        
                            
                            <label htmlFor="birthdate">AGREGA IMÁGENES * </label><br/>
                            <input className="inputStyle" type="url" name="url" id="url" required placeholder="https://img.com" pattern="https://.*" onChange={(e)=> setUser({...user, images: e.target.value})} />
                            <input className="inputStyle" type="url" name="url" id="url" required placeholder="https://img.com" pattern="https://.*" onChange={(e)=> setUser({...user, images: e.target.value})} />
                            <input className="inputStyle" type="url" name="url" id="url" required placeholder="https://img.com" pattern="https://.*" onChange={(e)=> setUser({...user, images: e.target.value})} />
                
                            <div>
                                <input className="inputStyle" name="hstash" id="hstash" type="text" placeholder="#tu arte en hashtags favoritos..." onChange={(e)=> setUser({...user, hstash: e.target.value})} />
                            </div>
                            <div className="createUserStyle">
                                <input className="checkStyle" type="checkbox" id="checkbox" name="checkbox" value="checkbox" required/>
                                <label for="checkbox"> Terminos y condiciones </label><br/>
                                <button className="buttonCreate">Crear Usuario</button>
                                {/* <Button onClick={handlePirateSubmit} disabled={!isValidPirate}>Crear Usuario</Button> */}
                            </div>
                        </div>
                    </div>
                    <p className="subText" >campos requeridos (*) validamos que todos los perfiles cumplan con nuestras politicas y estandares en menos de 24 hrs.</p>
                </div>
            </div>
        </div>
    );
};
