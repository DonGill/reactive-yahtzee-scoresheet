import React, { Component } from 'react';


class SingleDiceScore extends Component {
    render() {
        let scores = this.props.uScores;
        var subTotal = 0;
        var bonusScore = 0;
        var upperTotal = 0;
        
        //calculate the subtotal
        for (var i in scores){
            subTotal = subTotal + (scores[i].count * scores[i].fValue);
        }
        
        //calculate if there is a section bonus
        if(subTotal >=63 ){
            bonusScore = 35
        }else{
            bonusScore = 0;
        }

        //calculate the upper section total
        upperTotal = subTotal + bonusScore;

        return (
            <div className='singleDiceScoreSection'>
                <div>Total Score:</div>
                <div className='bump'>{subTotal}</div>
                <div>Bonues Score: </div>
                <div className='bump'>{bonusScore}</div>
                <div>Upper Section Total: </div> 
                <div className='bump'>{upperTotal}</div>
            </div>
        );
    }
}

export default SingleDiceScore;