import React from 'react';
import './Footer.css'

import LogoIg from '../../img/icons/igIcon2.png'
import LogoTwitter from '../../img/icons/twitterIcon2.png'
import LogoFb from '../../img/icons/fbIcon2.png'

export const Footer = () => {
    return (
        <footer className="footerBar">   
                <div className="row">
                        <p className='pRights'>2023 My Company, Inc. All rights reserved. 
                            <span> 
                                <img className='logoFooter' src={LogoIg} alt='logo ig footer'/> 
                                <img className='logoFooter' src={LogoTwitter} alt='logo twitter footer'/> 
                                <img className='logoFooter' src={LogoFb} alt='logo fb footer'/> 
                            </span>
                        </p> 
                </div>
        </footer>
    );
    }
