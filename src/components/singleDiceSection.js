import React, { Component } from 'react';
import SingleDiceRow from './singleDiceRow';


class SingleDiceSection extends Component {
    constructor() {
        super();
        
    }

    passAddCount(props) {
        //expecting a single value representing the fValue to add in count to
        //this value is then passed up to it's parent (yahtzee level) to handle
        if (props) {
            let passingValue = props;
            //console.log('passed ' + passingValue); 
            this.props.aDiceCount(passingValue);
        }
    }

    passDecrCount(props) {
        //expecting a single value representing the fValue to decrease in count 
        //this value is then passed up to it's parent (yahtzee level) to handle
        if (props) {
            let passingValue = props;
            //console.log('passed ' + passingValue); 
            this.props.dDiceCount(passingValue);
        }
    }

    render() {
        //console.log(this.props.uScores); //test component is receiving an array of uScores

        let diceArray
        if (this.props.uScores) {
            diceArray = this.props.uScores.map(dice => {
                //console.log(dice); //test reception of an array of dice faces
                return (
                    <SingleDiceRow key={dice.fValue} diceInstance={dice} aDiceCount={this.passAddCount.bind(this)} dDiceCount={this.passDecrCount.bind(this)}/>
                );
            }

            );
        }

        return (
            <div className="upper-board">
                {diceArray}
            </div>
        );
    }
}

export default SingleDiceSection;
