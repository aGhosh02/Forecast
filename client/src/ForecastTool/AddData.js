import React from 'react';  
import axios from 'axios';  
import '../ForecastTool/AddData.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class AddData extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
Name:'',  
RollNo:'',  
Class:'',  
Address:''  
}  
}   
AddData=()=>{  
  axios.post('https://localhost:44300/api/dataforecast/AddorUpdateRecord/', {Year:this.state.Year,  
  January:this.state.January, Feb:this.state.Feb,Mar:this.state.Mar, April:this.state.April,May:this.state.May, 
  June:this.state.June, July:this.state.July,August:this.state.August, September:this.state.September, 
  October:this.state.October,November:this.state.November, December:this.state.December, Total:this.state.Total,CAT:this.state.CAT, UpdatedBy:this.state.UpdatedBy,
  UpdatedMonth:this.state.UpdatedMonth})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/Forecastlist')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/Forecastlist')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Forecast Informations</h4>  
    <Form className="form">  
      <Col>  
      <FormGroup row>  
          <Label for="year" sm={2}>Year</Label>  
          <Col sm={10}>  
            <Input type="text" name="Year" onChange={this.handleChange} value={this.state.Year} placeholder="Enter Year" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="january" sm={2}>January</Label>  
          <Col sm={10}>  
            <Input type="text" name="January" onChange={this.handleChange} value={this.state.January} placeholder="Enter January data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="feb" sm={2}>Feb</Label>  
          <Col sm={10}>  
            <Input type="text" name="Feb" onChange={this.handleChange} value={this.state.Feb} placeholder="Enter Feb data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="mar" sm={2}>Mar</Label>  
          <Col sm={10}>  
            <Input type="text" name="Mar" onChange={this.handleChange} value={this.state.Mar} placeholder="Enter Mar data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="april" sm={2}>April</Label>  
          <Col sm={10}>  
            <Input type="text" name="April" onChange={this.handleChange} value={this.state.April} placeholder="Enter April data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="may" sm={2}>May</Label>  
          <Col sm={10}>  
            <Input type="text" name="May" onChange={this.handleChange} value={this.state.May} placeholder="Enter May data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="june" sm={2}>June</Label>  
          <Col sm={10}>  
            <Input type="text" name="June" onChange={this.handleChange} value={this.state.June} placeholder="Enter June data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="july" sm={2}>July</Label>  
          <Col sm={10}>  
            <Input type="text" name="July" onChange={this.handleChange} value={this.state.July} placeholder="Enter July data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="august" sm={2}>August</Label>  
          <Col sm={10}>  
            <Input type="text" name="August" onChange={this.handleChange} value={this.state.August} placeholder="Enter August data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="september" sm={2}>September</Label>  
          <Col sm={10}>  
            <Input type="text" name="September" onChange={this.handleChange} value={this.state.September} placeholder="Enter September data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="october" sm={2}>October</Label>  
          <Col sm={10}>  
            <Input type="text" name="October" onChange={this.handleChange} value={this.state.October} placeholder="Enter October data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="november" sm={2}>November</Label>  
          <Col sm={10}>  
            <Input type="text" name="November" onChange={this.handleChange} value={this.state.November} placeholder="Enter November data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="december" sm={2}>December</Label>  
          <Col sm={10}>  
            <Input type="text" name="December" onChange={this.handleChange} value={this.state.December} placeholder="Enter December data" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="total" sm={2}>Total</Label>  
          <Col sm={10}>  
            <Input type="text" name="Total" onChange={this.handleChange} value={this.state.Total} placeholder="Enter Total" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="cat" sm={2}>CAT</Label>  
          <Col sm={10}>  
            <Input type="text" name="CAT" onChange={this.handleChange} value={this.state.CAT} placeholder="Enter CAT information" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="updatedBy" sm={2}>UpdatedBy</Label>  
          <Col sm={10}>  
            <Input type="text" name="UpdatedBy" onChange={this.handleChange} value={this.state.UpdatedBy} placeholder="Enter Updated By" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="updatedMonth" sm={2}>UpdatedMonth</Label>  
          <Col sm={10}>  
            <Input type="date" name="UpdatedMonth" onChange={this.handleChange} value={this.state.UpdatedMonth} placeholder="Enter Updated Month" />  
          </Col>  
        </FormGroup>   
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddData} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default AddData;  
   