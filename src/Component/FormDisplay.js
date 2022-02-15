import React,{Component} from "react";
import './style.css'


class FormDisplay extends Component {
  render() {
    return(
      <div>
    <div className="box4">
    <h1 className="heading1">EMPLOYEE FEEDBACK DATA</h1>
      {this.props.formdetails.map((user)=>{
    return <p className="text4">Name: {user.name} | Department: {user.department} | Rating: {user.rating}</p>
  })}
  </div>
  </div>
    )
  }
}

export default FormDisplay;
