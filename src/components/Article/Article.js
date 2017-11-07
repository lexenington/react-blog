import React from "react";
import "./Article.css";

class Article extends React.Component {
  render() {
    return (
      <div className="articles col-md-8 offset-2" >
        {this.props.data.map((item, index)=>{
          return (
            <div className="container my-4" key={item.author + index}>
              <div className="card text-center">
                <div className="card-header">
                  Article by <span className="author">{item.author}</span>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={item.img} alt="..." className="img-thumbnail img-fluid"/>
                    </div>
                    <div className="col-md-8">
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-text">{item.article}</p>
                    </div>
                  </div>
                </div>
                <div className="card-footer text-muted">
                  Dated: {item.date}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default Article;
