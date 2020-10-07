import React, { Component } from 'react';
import axios from 'axios'

export class UserD extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            arr:[],
            loading:true
            // Name:"",
            // Age:"",
            // DOB:"",
            // profession:"",
            // No_of_guest:"",
            // Locality:"",
            // Address:"" 
        }
    }
    componentDidMount(){
        const para=this.props.match.params._id;
        console.log(para)
        axios.get('http://localhost:8000/api/details/'+para).then(res=>{
            console.log(res);
            this.setState({arr:res.data.message,loading:false});
        })
    }
    render() {
        if(this.state.loading){
            return (
                <div>
                   Loading..... 
                </div>
            )
        }
         return(
                <div>
                    {this.state.arr.map(ele=>{
                        return (
                        <div className=" card card-outline-success col col-10 mx-auto mt-5" key={ele._id}>
                            <div style={{fontSize:"30px"}}>{"Name : "+ele.Name}</div>
                            <div style={{fontSize:"30px"}}>{"Age : " + ele.Age}</div>
                            <div style={{fontSize:"30px"}}>{"DOB : " + ele.DOB}</div>
                            <div style={{fontSize:"30px"}}>{"Locality : " + ele.Locality}</div>
                            <div style={{fontSize:"30px"}}>{"No of Guests : " + ele.No_of_guest}</div>
                            <div style={{fontSize:"30px"}}>{"Profession : " + ele.Profession}</div>
                            <div style={{fontSize:"30px"}}>{"Address : " + ele.Address}</div>
                        </div>
                     ) })}
                </div>
         )
        
        
    }
}

export default UserD
