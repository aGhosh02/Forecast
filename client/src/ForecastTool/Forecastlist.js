import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class Forecastlist extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){    
      axios.get('https://localhost:44300/api/dataforecast/GetAllRecords')  
      // axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => { 
          this.setState({ business: response.data }); 
          console.log(response.data) ;
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  
  
    render() {  
      return (  
        <div>  
          <h4 align="center">Forecast Record List</h4>  
          <table className="table table-striped" style={{ marginTop: 10 }}>  
            <thead>  
              <tr>  
                <th>ID</th>  
                <th>Year</th>  
                <th>January</th>  
                <th>Feb</th> 
                <th>Mar</th>  
                <th>April</th>  
                <th>May</th>  
                <th>June</th>
                <th>July</th>  
                <th>August</th>  
                <th>September</th>  
                <th>October</th>
                <th>November</th>  
                <th>December</th>  
                <th>Total</th>  
                <th>CAT</th> 
                <th>UpdatedBy</th>
                <th>UpdatedBy</th>
                <th colSpan="4">Action</th>  
              </tr>  
            </thead>  
            <tbody>  
             { this.tabRow() }   
            </tbody>  
          </table>  
        </div>  
      );  
    }  
  }  