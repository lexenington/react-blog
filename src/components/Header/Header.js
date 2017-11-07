import React from "react";
import {Adinkra} from "react-adinkra";
import "./Header.css"

class Header extends React.Component {
  render() {
    return(
      <div className= "header-container">
      <div className="header-background"></div>
      <div className="container-fluid">
        <div className="row head ">
          <div className="col-md-12 justify-content-center logo ">
          </div>
        </div>
        <div className="row head-low pt-3">
          <div className="col-md-12">
            <h1 className="text-center display-4 text-light">The African Herald</h1>
            <hr/>
            <p className="text-center text-light lead-par">An African Perspective to African Stories </p>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Header;
