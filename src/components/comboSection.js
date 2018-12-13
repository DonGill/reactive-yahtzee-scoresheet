import React, { Component } from 'react';

class ComboSection extends Component {
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

    calculateLowerSectionScores(props) {
        var tempTotal = 0;
        let tempArray = props;
        console.log(tempArray);
        for (var i; i <= tempArray.length; i++) {
            //console.log(tempArray[i].name + ' ' + tempArray.score);
            tempTotal += tempArray[i].score;
        }
        return (
            <h1>{tempTotal}</h1>
        );

    }
    render() {
        var comboArray;
        var lScores = this.props.lScores;
        let possibleScores = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35];
        

        var optionsArray = possibleScores.map(score => {
                return (<option key={score} value={score}>{score}</option>)
            })
        
            
        if (lScores) {
            if(lScores.length > 0){
            comboArray = lScores.map(combo => {
                //console.log(combo); //test reception of an array of score combos
                return (
                    <div className='combo-row'>
                        <div className='combo-row-item'><p><strong>{combo.name}</strong></p></div>
                        <div><p>{combo.description}</p></div>
                        <div className='combo-row-input'>
                            <select value={combo.score} ref="boobie">
                                {optionsArray}
                            </select>
                        </div>
                    </div>
                );
            }
            );
        }
        }
        
        //calculate the lower score total
        var tempTotal = 0;
        if (lScores) {
            if (lScores.length > 0) {
                for (var x = 0; x < lScores.length; x++) {
                    tempTotal += lScores[x].score;
                }
            }
        }

        //calculcate the upperScore total
        let uscores = this.props.uScores;
        var subTotal = 0;
        var bonusScore = 0;
        var upperTotal = 0;

        //calculate the subtotal
        for (var i in uscores) {
            subTotal += (uscores[i].count * uscores[i].fValue);
        }

        //calculate if there is a section bonus
        if (subTotal >= 63) {
            bonusScore = 35
        } else {
            bonusScore = 0;
        }

        //calculate the upper section total
        upperTotal = subTotal + bonusScore;

        return (
            <div>
                {comboArray}
                <div className='grandTotalsSection'>
                    <div>Total of lower section</div>
                    <div className="bump">{tempTotal}</div>
                    <div>Total of upper section</div>
                    <div className="bump">{upperTotal}</div>
                    <div>GRAND TOTAL </div>
                    <div className="bump">{upperTotal + tempTotal}</div>
                </div>
            </div>
        );
    }
}

export default ComboSection;
