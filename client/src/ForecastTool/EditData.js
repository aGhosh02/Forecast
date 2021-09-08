import React from 'react';
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios'
import '../ForecastTool/AddData.css'
class Edit extends React.Component {
    constructor(props) {
        super(props)

        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangeJanuary = this.onChangeJanuary.bind(this);
        this.onChangeFeb = this.onChangeFeb.bind(this);
        this.onChangeMar = this.onChangeMar.bind(this);
        this.onChangeApril = this.onChangeApril.bind(this);
        this.onChangeMay = this.onChangeMay.bind(this);
        this.onChangeJune = this.onChangeJune.bind(this);
        this.onChangeJuly = this.onChangeJuly.bind(this);
        this.onChangeAugust = this.onChangeAugust.bind(this);
        this.onChangeSeptember = this.onChangeSeptember.bind(this);
        this.onChangeOctober = this.onChangeOctober.bind(this);
        this.onChangeNovember = this.onChangeNovember.bind(this);
        this.onChangeDecember = this.onChangeDecember.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onChangeCAT = this.onChangeCAT.bind(this);
        this.onChangeUpdatedBy = this.onChangeUpdatedBy.bind(this);
        this.onChangeUpdatedMonth = this.onChangeUpdatedMonth.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            Year: '',
            January: '',
            Feb: '',
            Mar: '',
            April: '',
            May: '',
            June: '',
            July: '',
            August: '',
            September: '',
            October: '',
            November: '',
            December: '',
            Total: '',
            CAT: '',
            UpdatedBy: '',
            UpdatedMonth: ''
        }
    }

    componentDidMount() {
        axios.get('https://localhost:44300/api/dataforecast/GetSingleRecord?id=' + this.props.match.params.id)
            .then(response => {
                this.setState({
                    ID: response.data.ID,
                    Year: response.data.Year,
                    January: response.data.January,
                    Feb: response.data.Feb,
                    Mar: response.data.Mar,
                    April: response.data.April,
                    May: response.data.May,
                    June: response.data.June,
                    July: response.data.July,
                    August: response.data.August,
                    September: response.data.September,
                    October: response.data.October,
                    November: response.data.November,
                    December: response.data.December,
                    Total: response.data.Total,
                    CAT: response.data.CAT,
                    UpdatedBy: response.data.UpdatedBy,
                    UpdatedMonth: response.data.UpdatedMonth
                });

            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }
    onChangeJanuary(e) {
        this.setState({
            January: e.target.value
        });
    }
    onChangeFeb(e) {
        this.setState({
            Feb: e.target.value
        });
    }
    onChangeMar(e) {
        this.setState({
            Mar: e.target.value
        });
    }
    onChangeApril(e) {
        this.setState({
            April: e.target.value
        });
    }
    onChangeMay(e) {
        this.setState({
            May: e.target.value
        });
    }
    onChangeJune(e) {
        this.setState({
            June: e.target.value
        });
    }
    onChangeJuly(e) {
        this.setState({
            July: e.target.value
        });
    }
    onChangeAugust(e) {
        this.setState({
            August: e.target.value
        });
    }
    onChangeSeptember(e) {
        this.setState({
            September: e.target.value
        });
    }
    onChangeOctober(e) {
        this.setState({
            October: e.target.value
        });
    }
    onChangeNovember(e) {
        this.setState({
            November: e.target.value
        });
    }
    onChangeDecember(e) {
        this.setState({
            December: e.target.value
        });
    }
    onChangeTotal(e) {
        this.setState({
            Total: e.target.value
        });
    }
    onChangeCAT(e) {
        this.setState({
            CAT: e.target.value
        });
    }
    onChangeUpdatedBy(e) {
        this.setState({
            UpdatedBy: e.target.value
        });
    }
    onChangeUpdatedMonth(e) {
        this.setState({
            UpdatedMonth: e.target.value
        });
    }


    onSubmit(e) {
        debugger;
        e.preventDefault();
        const obj = {
            Id: this.props.match.params.id,
            Year: this.state.Year,
            January: this.state.January,
            Feb: this.state.Feb,
            Mar: this.state.Mar,
            April: this.state.April,
            May: this.state.May,
            June: this.state.June,
            July: this.state.July,
            August: this.state.August,
            September: this.state.September,
            October: this.state.October,
            November: this.state.November,
            December: this.state.December,
            Total: this.state.Total,
            CAT: this.state.CAT,
            UpdatedBy: this.state.UpdatedBy,
            UpdatedMonth: this.state.UpdatedMonth
        };
        axios.post('https://localhost:44300/api/dataforecast/AddorUpdateRecord/', obj)
            .then(res => console.log(res.data));
        debugger;
        this.props.history.push('/Forecastlist')
    }
    render() {
        return (
            <Container className="App">
                <h4 className="PageHeading">Update Forecast Record Informations</h4>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup row>
                            <Label for="year" sm={2}>Year</Label>
                            <Col sm={10}>
                                <Input type="text" name="Year" onChange={this.handleChange} value={this.state.Year} onChange={this.onChangeYear} placeholder="Enter Year" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="january" sm={2}>January</Label>
                            <Col sm={10}>
                                <Input type="text" name="January" onChange={this.handleChange} value={this.state.January} onChange={this.onChangeJanuary} placeholder="Enter January data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="feb" sm={2}>Feb</Label>
                            <Col sm={10}>
                                <Input type="text" name="Feb" onChange={this.handleChange} value={this.state.Feb} onChange={this.onChangeFeb} placeholder="Enter Feb data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="mar" sm={2}>Mar</Label>
                            <Col sm={10}>
                                <Input type="text" name="Mar" onChange={this.handleChange} value={this.state.Mar} onChange={this.onChangeMar} placeholder="Enter Mar data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="april" sm={2}>April</Label>
                            <Col sm={10}>
                                <Input type="text" name="April" onChange={this.handleChange} value={this.state.April} onChange={this.onChangeApril} placeholder="Enter April data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="may" sm={2}>May</Label>
                            <Col sm={10}>
                                <Input type="text" name="May" onChange={this.handleChange} value={this.state.May} onChange={this.onChangeMay} placeholder="Enter May data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="june" sm={2}>June</Label>
                            <Col sm={10}>
                                <Input type="text" name="June" onChange={this.handleChange} value={this.state.June} onChange={this.onChangeJune} placeholder="Enter June data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="july" sm={2}>July</Label>
                            <Col sm={10}>
                                <Input type="text" name="July" onChange={this.handleChange} value={this.state.July} onChange={this.onChangeJuly} placeholder="Enter July data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="august" sm={2}>August</Label>
                            <Col sm={10}>
                                <Input type="text" name="August" onChange={this.handleChange} value={this.state.August} onChange={this.onChangeAugust} placeholder="Enter August data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="september" sm={2}>September</Label>
                            <Col sm={10}>
                                <Input type="text" name="September" onChange={this.handleChange} value={this.state.September} onChange={this.onChangeSeptember} placeholder="Enter September data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="october" sm={2}>October</Label>
                            <Col sm={10}>
                                <Input type="text" name="October" onChange={this.handleChange} value={this.state.October} onChange={this.onChangeOctober} placeholder="Enter October data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="november" sm={2}>November</Label>
                            <Col sm={10}>
                                <Input type="text" name="November" onChange={this.handleChange} value={this.state.November} onChange={this.onChangeNovember} placeholder="Enter November data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="december" sm={2}>December</Label>
                            <Col sm={10}>
                                <Input type="text" name="December" onChange={this.handleChange} value={this.state.December} onChange={this.onChangeDecember} placeholder="Enter December data" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="total" sm={2}>Total</Label>
                            <Col sm={10}>
                                <Input type="text" name="Total" onChange={this.handleChange} value={this.state.Total} onChange={this.onChangeTotal} placeholder="Enter Total" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="cat" sm={2}>CAT</Label>
                            <Col sm={10}>
                                <Input type="text" name="CAT" onChange={this.handleChange} value={this.state.CAT} onChange={this.onChangeCAT} placeholder="Enter CAT information" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="updatedBy" sm={2}>UpdatedBy</Label>
                            <Col sm={10}>
                                <Input type="text" name="UpdatedBy" onChange={this.handleChange} value={this.state.UpdatedBy} onChange={this.onChangeUpdatedBy} placeholder="Enter Updated By" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label for="updatedMonth" sm={2}>UpdatedMonth</Label>
                            <Col sm={10}>
                                <Input type="date" name="UpdatedMonth" onChange={this.handleChange} value={this.state.UpdatedMonth} onChange={this.onChangeUpdatedMonth} placeholder="Enter Updated Month" />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <Button type="submit" color="success">Submit</Button>{' '}
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

export default Edit;