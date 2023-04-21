import React from "react";
import {SliderCarousel, NavCategories, Footer} from '../Components';

import './Home.css'

export const Home = () => {
    return (
        <div>
            <div className="header">
            </div>
            <div className="body">
                <div class="container" >
                    <div class="row">

                        <div className= "col-6">
                        <SliderCarousel/>
                        </div>

                        <div className="col-6">
                            <div className="textTitle"><h3>ENCUENTRA UN ARTISTA LOCAL</h3></div>
                            <div className="navCategories"><NavCategories /></div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
};




