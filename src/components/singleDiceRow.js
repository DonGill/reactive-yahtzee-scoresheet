import React, { Component } from 'react';


class SingleDiceRow extends Component {

    handleAddClick() {
        //console.log(this.props.diceInstance.fValue);
        this.props.aDiceCount(this.props.diceInstance.fValue);
    }

    handleDecrClick() {
        //console.log('Decr count clicked on diceInstance - ' + this.props.diceInstance.fValue);
        this.props.dDiceCount(this.props.diceInstance.fValue);
    }

    render() {

        //console.log(this.props.diceInstance.fValue); //test component is recieving diceInstance
        return (
            <div className="dice-row">
                <div className="dice-row-label">
                    <div><p><strong>{this.props.diceInstance.name}</strong></p></div>
                    <div><p><image src={'./' + this.props.diceInstance.fValue + '.svg'}/></p></div>
                    <div><p><strong>= {this.props.diceInstance.fValue}</strong></p></div>
                </div>
                <div className="dice-row-howto">
                    <p>Count and Add Only {this.props.diceInstance.name}</p>
                </div>
                <div className="dice-row-buttons">
                    <button onClick={this.handleDecrClick.bind(this)}> - </button>
                    <button onClick={this.handleAddClick.bind(this)}>+</button>
                </div>
                <div className="dice-row-counts">
                    {this.props.diceInstance.count}
                </div>
                <div className="dice-row-counts">
                    {this.props.diceInstance.count * this.props.diceInstance.fValue}
                </div>
            </div>
        );
    }
}

export default SingleDiceRow;