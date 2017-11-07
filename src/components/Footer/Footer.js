import React from "react";
import FontAwesome from "react-fontawesome";
import "./Footer.css"

class Footer extends React.Component {
  render() {
    return (
      <div>
          <footer className="footer text-default py-4">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                          <h5 className="text-center"><i className="fa fa-road"></i> The African Perspective</h5>
                          <div className="row">
                              <div className="col-md-4 offset-md-4">
                                <div className="col-xs-6">
                                    <ul className="list-unstyled justify-content-center">
                                      {this.props.footer.map((item, index)=>{
                                        return <li className="text-center" key={index+item}><a href="local">{item.name}</a></li>
                                      })}
                                    </ul>
                                </div>
                              </div>

                          </div>
                        <div className="row d-flex ">
                          <div className="col-md-12 ">
                              <ul className="nav nav-inline justify-content-center ">
                                  {this.props.social.map((item, index)=>{
                                    return <li className="nav-item mx-3" key={index+item}><a href={item.local}><FontAwesome name={item.iconName} className="fa-2x"/></a></li>
                                  })}
                            </ul>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </footer>
      </div>
    )
  }
}

export default Footer;
