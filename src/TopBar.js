import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { FormControl } from 'react-bootstrap';
import { FormGroup } from 'react-bootstrap';
import { ControlLabel } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import "./TopBar.css";

class TopBar extends Component {
    render () {
        return (
            <div className="TopBar">
            <br/>
            <Form inline>
                <FormGroup controlId="numQuestions">
                    <ControlLabel>Make</ControlLabel>
                    {' '}
                    <FormControl type="text" 
                                 placeholder="30" 
                                 onBlur={this.props.onChangeNumQuestions}/>
                </FormGroup>
                {' '}
                <FormGroup controlId="questionType">
                    <ControlLabel>questions of</ControlLabel>
                    {' '}
                    <FormControl componentClass="select" placeholder="Mixed"
                                 onChange={this.props.onChangeQuestionType}>
                        <option value="Mixed">Addition and Subtraction</option>
                        <option value="Addition">Addition</option>
                        <option value="Subtraction">Subtraction</option>
                     </FormControl>
                </FormGroup>
                {' '}
                <FormGroup controlId="maxNumber">
                    <ControlLabel>up to</ControlLabel>
                    {' '}
                    <FormControl type="text" 
                                 placeholder="100" 
                                 onBlur={this.props.onChangeMaxNumber} />
                </FormGroup>
                {' '}
                <Button bsStyle="primary"
                        onClick={this.props.onClickGo}>
                    Go!
                </Button>
            </Form>
            </div>
        )
    }
}

export default TopBar;