import React, { Component } from 'react';
import Equation from './Equation';
import { Button } from 'react-bootstrap';
import "./QuizSheet.css";

class QuizSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equations : [],
            answers : new Map(),
            isChecking : false,
        };
    }

    check (state) {
        var temp = state.equations;
        for (var i = 0; i < temp.length; i++) {
            var correctAnswer = temp[i].answer;
            var inputAnswer = Number.parseInt(state.answers.get("ans"+i), 10);
            if (correctAnswer === inputAnswer) {
                temp[i].resultImg = "correct.png";
            } else {
                temp[i].resultImg = "Error.png";
            }
        }
        this.setState({equations : temp,
                       isChecking : true});
    }

    updateAnswer (event) {
        var answerId = event.target.id;
        // var temp = this.state.answers;
        // temp.set(answerId, event.target.value);
        // this.setState({answers : temp});
        this.state.answers.set(answerId, event.target.value);
    }

    render () {
        if (!this.state.isChecking) {
            // Initialize quiz equations
            this.state.equations.splice(0, this.state.equations.length);
            this.state.answers.clear();
            for (var i = 0; i < this.props.numEqns; i++) {
                var sum = getRandomInteger(25, this.props.maxSum);
                var oprnd1 = getRandomInteger(10, sum-10);
                var oprnd2 = sum - oprnd1;
                // Default for addition
                var eqn = {
                    operand1 : oprnd1,
                    operand2 : oprnd2,
                    operator : "+",
                    answer : sum,
                    input : "",
                    id : i,
                    resultImg : "blank.png",
                };
                // Change it to subtraction if needed
                var coinFlip = getRandomInteger(1, 10);
                if (this.props.qType === "Subtraction" ||
                    (this.props.qType !== "Addition" && coinFlip > 5)) {
                    eqn.operand1 = sum;
                    eqn.operand2 = oprnd1;
                    eqn.operator = "-";
                    eqn.answer = oprnd2;
                }
                this.state.equations.push(eqn);
            }
        } else {
            // eslint-disable-next-line
            this.state.isChecking = false;
        }

        var eqns = [];
        var numEqns = this.state.equations.length;
        for (var j = 0; j < numEqns; j++) {
            var eqn1 = this.state.equations[j];
            eqns.push(<Equation operand1={eqn1.operand1} 
                                operand2={eqn1.operand2}
                                operator={eqn1.operator} 
                                key={eqn1.id} 
                                resultImage={eqn1.resultImg} 
                                id={eqn1.id}
                                onBlur={(event) => this.updateAnswer(event)} />);
        }
        var sliceIdx = numEqns / 3;
        var col1 = eqns.slice(0, sliceIdx);
        var col2 = eqns.slice(sliceIdx, sliceIdx*2);
        var col3 = eqns.slice(sliceIdx*2, numEqns);
        return (
            <div className="QuizSheet">
                <div className="QuestionArea">
                <table>
                    <tbody>
                        <tr>
                            <td><table><tbody>{col1}</tbody></table></td>
                            <td><table><tbody>{col2}</tbody></table></td>
                            <td><table><tbody>{col3}</tbody></table></td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="ButtonAera">
                    <Button bsStyle="success"
                            onClick={() => this.check(this.state)}
                            bsSize="large" block>
                            Check!
                    </Button>
                </div>
            </div>
        )
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default QuizSheet;