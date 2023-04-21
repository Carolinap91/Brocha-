import React from "react";
import { useParams , Link ,useNavigate } from "react-router-dom";

import NavBarMenu  from '../navBarMenu/NavBarMenu';
import Footer from '../footer/Footer'



import './Home.css'


const UsersView = ()  => {




    return (
        <div>
            <div className="header">
                <NavBarMenu/>
            </div>
            <div className="body">
                <div class="container" >
                    <div class="row">
                        <div className= "col-6">
                            1
                        </div>
                        <div className="col-6">
                            2
                        </div>
                    </div>
                    <div class="row">
                        <div className= "col-8">
                            3
                        </div>
                        <div className="col-4">
                            4
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default UsersView;