import React from "react";
import './LoginUser.css'

export const LoginUser = () => {

    return (
        
        <div class="colStyle">
            <h3 className="tittleLogin">Inicia Sesión</h3>
            
            <label htmlFor="email">CORREO ELECTRÓNICO *</label><br/>
            <input className="inputStyle" name="email" id="email" type="email"  placeholder="correo eletrónico..." required  />
            <div>
            <label htmlFor="password">CONTRASEÑA *</label><br/>
            <input className="inputStyle" name="password" id="password" type="password" placeholder="****" required minLength={4}  />
            </div>      
            <input className="checkStyle" type="checkbox" id="checkbox" name="checkbox" value="checkbox"/>
            <label for="checkbox"> Recordar Contraseña </label><br/>

            <button className="buttonCreate">Ingresar</button>                                   
        </div>
    )
        };


