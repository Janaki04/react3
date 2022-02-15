import React,{Component} from "react";
import FormDisplay from "./FormDisplay"
import './style.css'

class Form extends Component {
  state={
    name:"",
    department:"",
    rating:"",
    details:[],
    display:false,
  }
  manageChange=(e)=>{
    this.setState({[e.target.name]:e.target.value})
  }
  manageSubmission=(e)=>{
    e.preventDefault();

      const tempObj={
    name:this.state.name,
    department:this.state.department,
    rating:this.state.rating,
     }

      const tempArr=this.state.details
      tempArr.push(tempObj)
      this.setState({details:tempArr})
      
      this.setState({name:"",
      department:"",
      rating:"",
      display:true})

  }
  render() {
    return (
      <div>
        
        {!this.state.display &&<form >
            <h1 className="heading">Employee Feedback Form</h1>
          <label className="text1">Name : 
          <input required className="box1" 
           type="text"
           name="name"
            id="name"
             value={this.state.name} 
             onChange={(e) => this.manageChange(e)}/>
          </label>
          <label className="text2">Department : 
          <input required className="box1" 
           type="text"
           name="department"
            id="department"
            value={this.state.department} 
            onChange={(e) => this.manageChange(e)}/>
          </label >
          <label className="text3">Rating : 
          <input required className="box1" 
           type="number"
           name="rating" 
           id="rating"
            value={this.state.rating}
             onChange={(e) => this.manageChange(e)}/> 
          </label>
          <button className="box2" type="submit" onClick={(e) => this.manageSubmission(e)}>SUBMIT</button>
        </form> }
        
        {this.state.display &&<FormDisplay formdetails={this.state.details}/>  }
        {this.state.display && <button className="back" type="submit" onClick={() => this.setState({display:false})}>GO BACK</button> }
      </div>
    );
  }
}

export default Form;

          
    
