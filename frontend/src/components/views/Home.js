// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from 'axios';
// import "./ListarProductos.css";
import React from "react";
import NavBarMenu from '../navBarMenu/NavBarMenu'
import Slider from '../slideCarousel/Slider';
import NavCategories from '../navCategories/NavCategories'
import Footer from '../footer/Footer'

import './Home.css'


function Home () {
    return (
        <div>
            <div className="header">
                <NavBarMenu/>
            </div>
            <div className="body">
                <div class="container" >
                    <div class="row">

                        <div className= "col-6">
                        <Slider/>
                        </div>

                        <div className="col-6">
                            <div className="textTitle"><h3>ENCUENTRA UN ARTISTA LOCAL</h3></div>
                            <div className="navCategories"><NavCategories /></div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;


    // const [listaProductos, setListaProductos] = useState([{}]);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     console.log("Inicio el componente");
    //     axios.get("http://localhost:8080/productos/listar").then(result => {
    //         console.log(result.data);
    //         setListaProductos(result.data);
    //     });
    // }, []);

    // const irAlCrear = () => {
    //     navigate("/");
    // }

