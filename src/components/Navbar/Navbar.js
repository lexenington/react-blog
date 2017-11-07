import React from "react";
import "./Navbar.css";
import {Adinkra} from "react-adinkra";

class Navbar extends React.Component {
  render() {
    return(
      <div>
        <nav id="nav" className="navbar navbar-expand-md  navbar-toggleable-sm ">
          <div className="container"> <a href="#" className="navbar-brand adinkra"><Adinkra name={this.props.logo} /></a>
            <a className="navbar-toggler float-right hidden-md-up" data-toggle="collapse" data-target=".navbar-collapse">☰</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="nav ml-auto navbar-nav">
              {this.props.links.map((item, index)=>{
                return (<li className="nav-link" key={item+index}><a href={item.local}>{item.name}</a></li>
              )})}
          </ul>
        </div>
      </div>
      </nav>
    </div>
    )
  }
}

export default Navbar;
