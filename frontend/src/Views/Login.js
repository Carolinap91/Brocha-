import React from "react";
import {SliderCarousel, LoginUser } from '../components';


export const Login = () => {
    return (
        
        <div class="row">
            <div className= "col-6"> 
                <SliderCarousel/>
            </div>

            <div className="col-6">
                <LoginUser/>
            </div>
        </div>
    )
        };



