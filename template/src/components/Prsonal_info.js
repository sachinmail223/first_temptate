import React from 'react'
import logo from "../logo.png"
import "./Prsonal_info.css"

const Prsonal_info = () => {
    return (
        <div className="container ">
            
            <div className="row">
                <div className="col-md-4">

                    <img src={logo} alt="" className=" border border-white rounded-circle p-md-2 p-1 m-0 logo" />

                </div>
                <div className="col-md-8 ">
                    <p className="info font-weight-normal text-white mb-0" >My name is sachin.</p>
                    <p className="info display-4 font-weight-normal text-white">Digital Product Designer</p>
                    <p className=" lead font-weight-bold text-black">Head of design at Calvino</p>
                    
            </div>
            
            </div>
           

        </div>
    )
}

export default Prsonal_info
