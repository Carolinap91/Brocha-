import React from "react";

import {ArtistView, ArtistPic, ArtistPhotos, ChatUser } from '../Components'


export const UsersView = ()  => {
    return (
        <div>
            <div className="body">
                <div class="container" >
                    <div class="row">
                        <div className= "col-6">
                            <ArtistView/> 
                        </div>
                        <div className="col-6">
                            {/* <ArtistPic /> */} 2
                        </div>
                    </div>
                    <hr/>
                    <div class="row">
                        <div className= "col-8">
                            {/* <ArtistPhotos /> */} 3
                        </div>
                        <div className="col-4">
                            {/* <ChatUser/> */} 4
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};