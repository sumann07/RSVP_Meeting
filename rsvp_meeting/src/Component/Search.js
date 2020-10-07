import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import "../Css/register.css";

export class Search extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value:"",
             arr:[]
        }
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.value===""){
            return;
        }
        axios.post('http://localhost:8000/api/search',{
            Name:this.state.value
        }).then(res=>{
            console.log(res.data);
            this.setState({
                value:"",
                arr:res.data.message
            })
        })
    }
    handleChange=e=>{
        this.setState({
            value:e.target.value
        })
    }
    render() {
        return (
           <> 
          <div className="col col-10 mx-auto mt-5 ">     
             <form class=" col col-10 mx-auto form-inline my-2 my-lg-0  ">
         <input className="form-control mr-sm-2 formsearch" type="search" value={this.state.value} onChange={this.handleChange} placeholder="Enter name or Locality" aria-label="Search" />
          <button onClick={this.handleSubmit} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
        </div>
        <div>
        {this.state.arr.map((ele,idx)=>{
           return(
               <div  className="row col col-10" key={ele._id}>
                   <div className="col col-4"></div>
                   <div className="col col-1 mx-3 text" style={{marginLeft:"0px"}} ><NavLink to={"/details/"+ele._id}>{ele.Name}</NavLink></div>
                   <div className="col col-1 mx-3 text"> {ele.Locality}</div>
                   <div className="col col-4"></div>
               </div>
               
           )   
        })}
        </div>

           </>
        )
    }
}

export default Search;
