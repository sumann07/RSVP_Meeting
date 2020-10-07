import React, { Component } from 'react';
import axios from 'axios';

export class Report extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            msg:"",
            msg1:"",
            msg2:"",
            studentcount:'',
            EmployedCount:'',
            sum:"",
            n:"",
            arr:[]
         
        }
    }
     componentDidMount(){

      axios.get('http://localhost:8000/api/report').then(res=>{
          this.setState({msg:res.data.message});
      });
      axios.get('http://localhost:8000/api/report2').then(res=>{
        this.setState({msg1:res.data.message});
      })
      axios.get('http://localhost:8000/api/report3').then(res=>{
        this.setState({msg2:res.data.message});
      })
      axios.get('http://localhost:8000/api/report5').then(res=>{
        this.setState({studentcount:res.data.message});
      })
      axios.get('http://localhost:8000/api/report6').then(res=>{
        this.setState({EmployedCount:res.data.message});
      })
      axios.get('http://localhost:8000/api/report7').then(res=>{
        this.setState({sum:res.data.message[0].sum,n:res.data.msg});
      })
      axios.get('http://localhost:8000/api/report4').then(res=>{
        this.setState({arr:res.data.message});
      })

     
     }
    render() {
        return (
            <div className="mt-5">
                <div className="card col col-10 mx-auto">
                {"Age between "+this.state.msg}
                <br/>
                {"Age between "+this.state.msg1}
                <br/>
                {"Age more than "+this.state.msg2}
                </div>
                <div className="card col col-10 mx-auto mt-3">
                {"Student Count: "+this.state.studentcount}
                <br/>
                {"Employed Count: "+this.state.EmployedCount}
                <br/>
               
                </div>
                <div className="card col col-10 mx-auto">
                     {this.state.arr.map(ele=>{
                         return(
                         <div key={ele._id}>{ele.Locality}</div>
                         )
                     })}
                </div>
                <div className="card col col-10 mx-auto">
                     Avearage Guest count : {Math.ceil(parseInt(this.state.sum)/parseInt(this.state.n))}
                </div>

            </div>
        )
    }
}

export default Report
