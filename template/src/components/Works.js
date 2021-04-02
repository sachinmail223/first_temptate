import React from 'react'
import "./Works.css"

const Works = () => {
    return (
        <div className="container-lg   bg-light pb-4">
            <div className="row  ">
                <div className="col-12 mt-5 h-0">
                    <h1 className="mt-5 display-4 font-weight-bolder">My Work</h1>
                </div>
            </div>
            <div className="row  work-div pb-4">
            <img src="/images/1.jpg" alt="" className="col-sm-6 work-col p-3 h-50" />
            <img src="/images/2.jpg" alt="" className="col-sm-6 work-col p-3 h-50" />
            <img src="/images/3.jpg" alt="" className="col-sm-6 work-col p-3 h-50" />
            <img src="/images/4.jpg" alt="" className="col-sm-6 work-col p-3 h-50" />
                
            </div>
          

        </div>
    )
}

export default Works
