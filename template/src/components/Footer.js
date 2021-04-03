import React from 'react'
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars} from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faInstagram, faPinterestP, faGoogle} from '@fortawesome/free-brands-svg-icons' 

const Footer = () => {
    return (
        <div className="footer-div container-fluid   ">
            <div className="container h-100">
            <div className="row h-100 justify-content-between">
                <div className="col-md-5 pt-5">
                    <h1 className="font-weight-bold pb-3">BSK,s</h1>
                    <p className="font-weight-bold pb-md-5 lead text-light">In the mean time shall soon find out the cause of this: What was the epicurus towards their children. </p>
                    
                </div>
                <div className="col-md-5 pt-5 pb-5">  
                    <a href="#" className="col-2 lead  ">
                    <FontAwesomeIcon icon={faTwitter} className="FaBars social-icon"/>
                    </a>
                    <a href="#" className="col-2 lead">
                    <FontAwesomeIcon icon={faFacebookF} className="FaBars social-icon"/>
                    </a>
                    <a href="#" className="col-2 lead">
                    <FontAwesomeIcon icon={faInstagram} className="FaBars social-icon"/>
                    </a>
                    <a href="#" className="col-2 lead">
                    <FontAwesomeIcon icon={faPinterestP} className="FaBars social-icon"/>
                    </a>
                    <a href="#" className="col-2 lead">
                    <FontAwesomeIcon icon={faGoogle} className="FaBars social-icon"/>
                    </a>
                </div>
                <div className="col-md-5 align-self-end pb-4">
                <p className="font-weight-bold text-light">Copyright ©2021 All rights reserved | This template is made with by BSK's. </p>
                </div>
                <div className="col-md-5"></div>
            </div>
            </div>
          
        </div>
    )
}

export default Footer
