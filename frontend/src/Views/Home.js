import React from "react";
import {SliderCarousel, ArtistSearch} from '../components';

import './Home.css'

export const Home = () => {
    return (
        
        <div class="row">
            <div className= "col-6">
                <SliderCarousel/>
            </div>

            <div className="col-6">
                <ArtistSearch/>
            </div>
        </div>
    )
        };
