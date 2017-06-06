import React, { Component } from 'react';
import Equation from './Equation';
import "./QuizSheet.css";

class QuizSheet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            equations : [],
            answers : new Map(),
        };
        // Initialize quiz equations
        for (var i = 0; i < props.numEqns; i++) {
            var sum = getRandomInteger(20, props.maxSum);
            var oprnd1 = getRandomInteger(10, sum);
            var oprnd2 = sum - oprnd1;
            var eqn = {
                operand1 : oprnd1,
                operand2 : oprnd2,
                operator : "+",
                answer : sum,
                input : "",
                id : i,
                resultImg : "blank.png",
            };
            this.state.equations.push(eqn);
        }
    }

    check (state) {
        var temp = state.equations;
        for (var i = 0; i < temp.length; i++) {
            var correctAnswer = temp[i].answer;
            var inputAnswer = Number.parseInt(state.answers.get("ans"+i), 10);
            if (correctAnswer === inputAnswer) {
                temp[i].resultImg = "correct.png";
            } else {
                temp[i].resultImg = "error.png";
            }
        }
        this.setState({equations : temp});
    }

    updateAnswer (event) {
        var answerId = event.target.id;
        var temp = this.state.answers;
        temp.set(answerId, event.target.value);
        this.setState({answers : temp});
    }

    render () {
        var eqns = [];
        var numEqns = this.state.equations.length;
        for (var i = 0; i < numEqns; i++) {
            var eqn = this.state.equations[i];
            eqns.push(<Equation operand1={eqn.operand1} 
                                operand2={eqn.operand2}
                                operator={eqn.operator} 
                                key={eqn.id} 
                                resultImage={eqn.resultImg} 
                                id={eqn.id}
                                onBlur={(event) => this.updateAnswer(event)} />);
        }
        var sliceIdx = numEqns / 3;
        var col1 = eqns.slice(0, sliceIdx);
        var col2 = eqns.slice(sliceIdx, sliceIdx*2);
        var col3 = eqns.slice(sliceIdx*2, numEqns);
        return (
            <div className="QuizSheet">
                <table>
                    <tbody>
                        <tr>
                            <td><table><tbody>{col1}</tbody></table></td>
                            <td><table><tbody>{col2}</tbody></table></td>
                            <td><table><tbody>{col3}</tbody></table></td>
                        </tr>
                    </tbody>
                </table>
                <div className="ButtonAera">
                    <button className="Button" 
                            onClick={() => this.check(this.state)}>
                        Check!
                    </button>
                </div>
            </div>
        )
    }
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export default QuizSheet;