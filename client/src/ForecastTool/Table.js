import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  
class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  
      
    DeleteData= () =>{  
     axios.delete('https://localhost:44300/api/dataforecast/DeleteData?id='+this.props.obj.Id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  
  render() {  
    return (  
        <tr>  
          <td>  
            {this.props.obj.ID}  
          </td>  
          <td>  
            {this.props.obj.Year}  
          </td>  
          <td>  
            {this.props.obj.January}  
          </td>  
          <td>  
            {this.props.obj.Feb}  
          </td>  
          <td>  
            {this.props.obj.Mar}  
          </td>  
          <td>  
            {this.props.obj.April}  
          </td>  
          <td>  
            {this.props.obj.May}  
          </td>  
          <td>  
            {this.props.obj.June}  
          </td>  
          <td>  
            {this.props.obj.July}  
          </td>  
          <td>  
            {this.props.obj.August}  
          </td>  
          <td>  
            {this.props.obj.September}  
          </td>  
          <td>  
            {this.props.obj.October}  
          </td>  
          <td>  
            {this.props.obj.November}  
          </td>  
          <td>  
            {this.props.obj.December}  
          </td>  
          <td>  
            {this.props.obj.Total}  
          </td>  
          <td>  
            {this.props.obj.CAT}  
          </td>  
          <td>  
            {this.props.obj.UpdatedBy}  
          </td>  
          <td>  
            {this.props.obj.UpdatedMonth}  
          </td>  
          <td>  
          <Link to={"/edit/"+this.props.obj.Id} className="btn btn-success">Edit</Link>  
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteData} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
    );  
  }  
}  
  
export default Table; 