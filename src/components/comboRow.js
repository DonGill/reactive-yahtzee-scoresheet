import React, { Component } from 'react';


class ComboRow extends Component {

    handleAddClick() {
        //console.log(this.props.diceInstance.fValue);
        //this.props.aDiceCount(this.props.diceInstance.fValue);
    }

    handleDecrClick() {
        //console.log('Decr count clicked on diceInstance - ' + this.props.diceInstance.fValue);
        //this.props.dDiceCount(this.props.diceInstance.fValue);
    }

    render() {
        //<input type="number" value={this.props.comboInstance.score}></input> 
        //console.log(this.props.diceInstance.fValue); //test component is recieving diceInstance
         //map the categoryOptions array to option values of select dropdown
         let combos = this.props.comboInstance.map(score => {
            return <option key={score} value={score}>{score}</option>
        })
        
        return (
            <div className='combo-row'>
                <div className='combo-row-item'><p><strong>{this.props.comboInstance.name}</strong></p></div>
                <div><p>{this.props.comboInstance.description}</p></div>
                <div className='combo-row-input'>
                   <select ref="boobie">
                        {combos}
                   </select>

                </div>
            </div>
        );
    }
}

export default ComboRow;