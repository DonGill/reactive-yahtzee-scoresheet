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
                <div>
                    <button onClick={this.handleDecrClick.bind(this)}>-</button>
                </div>
                <div>
                    <img src={'./' + this.props.diceInstance.fValue + '.svg'} />
                </div>
                <div>
                    <button onClick={this.handleAddClick.bind(this)}>+</button>
                </div>
                <div>
                    {this.props.diceInstance.count}
                </div>
                <div>
                    {this.props.diceInstance.count * this.props.diceInstance.fValue}
                </div>
            </div>
        );
    }
}

export default SingleDiceRow;