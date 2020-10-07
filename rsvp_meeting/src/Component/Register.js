import React, { Component,history } from 'react';
import "../Css/register.css";
import axios  from "axios";

export class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state ={Name:"",Age:0,DOB:"",Guest:0,Locality:"",Address:"",profession:""}
    }
    
    handleSubmit=(e)=>{
        e.preventDefault();
        const {Name,Age,DOB,Guest,Locality,Address,profession}=this.state;
        console.log(this.state)
        if(Name==="" || Age===0 || DOB==="" || Locality==="" || Address==="" || profession===""){
            return;
        }
        axios.post('http://localhost:8000/api/adduser',{
            Name:Name,
            Age:Age,
            DOB:DOB,
            Profession:profession,
            Locality:Locality,
            No_of_guest:Guest,
            Address:Address
        }).then(res=>{
            console.log(`successfully submitted`);
            this.setState({Name:"",Age:0,DOB:"",Guest:0,Locality:"",Address:"",profession:""})
        }).catch(err=>{
            console.log(`something went wrong`);
        })
        console.log(`hello`);
    }
    onHandleChange =(e)=>{
        this.setState({[e.target.name]:e.target.value});
       // console.log(this.state);
    }
render (){
    window.addEventListener('popstate', function(event) {
    
         alert("You pressed a Back button! Are you sure?!");
    
    
    });
    return (
        <>
       
 <form className="col col-10 mx-auto mt-5 form ">
                <label className="col col-10 mx-auto text-center" style={{fontWeight:"bolder",marginTop:"30px"}} >Registration Form</label>
 <div className="form-group row mt-2">
    {/* <label for="staticEmail" class="col-sm-2 col-form-label">Name</label> */}
    <div className="col-sm-10 ml-5">
      <input type="text"  className="form-control" placeholder="Enter your name" value={this.state.Name} name="Name" onChange={this.onHandleChange}/>
    </div>
  </div>
  <div className="form-group row">
    {/* <label  className="col-sm-2 col-form-label">Age</label> */}
    <div className="col-sm-10 ml-5">
      <input type="text" className="form-control" placeholder="Enter your age" value={this.state.Age} name="Age" onChange={this.onHandleChange}/>
    </div>
  </div>
  <div className="form-group row">
    {/* <label  className="col-sm-2 col-form-label">DOB</label> */}
    <div className="col-sm-10 ml-5">
      <input type="text" className="form-control"  placeholder="Enter date of birth" value={this.state.DOB}name="DOB" onChange={this.onHandleChange}/>
    </div>
  </div>
  <div className="form-group row">
    {/* <label  className="col-sm-2 col-form-label">Locality</label> */}
    <div className="col-sm-10 ml-5">
      <input type="text" className="form-control" placeholder="Enter your locality" value={this.state.Locality}name="Locality" onChange={this.onHandleChange}/>
    </div>
  </div>
  <div className="form-group row">
    {/* <label  className="col-sm-2 col-form-label">Profession</label> */}
    <div className="col-sm-10 ml-5">
    <select className="form-control" id="exampleFormControlSelect1 " placeholder="Enter your profession" value={this.state.profession} name="profession" onChange={this.onHandleChange}>
      <option value="Employed">Employed</option>
      <option value="Student">Student</option>
    
    </select>
    </div>
  </div>
  <div className="form-group row">
    {/* <label  className="col-sm-2 col-form-label">Guest(No.)</label> */}
    <div className="col-sm-10 ml-5">
    <select class="form-control" id="exampleFormControlSelect1"  value={this.state.Guest}name="Guest" onChange={this.onHandleChange}>
    <option value="1">Enter no of guests</option>
    <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
    
    </select>
    </div>
  </div>
  <div className="form-group row">
    {/* <label  className="col-sm-2 col-form-label">Address</label> */}
    <div className="col-sm-10 ml-5">
    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Enter your address" rows="3" value={this.state.Address} name="Address" onChange={this.onHandleChange}></textarea>
    </div>
  </div>
  <button onClick={this.handleSubmit} className="mb-3 btn btn-outline-success my-2 my-sm-0">Submit</button>
</form>

  
        </>
    )
}
}
export default Register;