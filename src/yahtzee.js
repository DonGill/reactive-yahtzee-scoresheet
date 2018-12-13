import React, { Component } from 'react';
import SingleDiceSection from './components/singleDiceSection.js';
import SingleDiceSectionScore from './components/singleDiceScore.js';
import CombinationSection from './components/comboSection';
import './yahtzee.css';


class Yahtzee extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }

    //load the initializing data
    componentDidMount() {
        this.setState({
            uScores: [
                {
                    fValue: 1,
                    count: 0,
                    name: 'Aces'
                },
                {
                    fValue: 2,
                    count: 0,
                    name: 'Twos'
                },
                {
                    fValue: 3,
                    count: 0,
                    name: 'Threes'
                },
                {
                    fValue: 4,
                    count: 0,
                    name: 'Fours'
                },
                {
                    fValue: 5,
                    count: 0,
                    name: 'Fives'
                   
                },
                {
                    fValue: 6,
                    count: 0,
                    name: 'Sixes'
                  
                }
            ],
            lowerScores: [
                {
                    name: '3 of a kind',
                    description: 'Score total of all 5 dice',
                    score: 19
                },
                {
                    name: '4 of a kind',
                    description: 'Score total of all 5 dice',
                    score:13
                },
                {
                    name: 'Full House',
                    description: 'SCORE 25',
                    score: 14
                },
                {
                    name: 'Small straight',
                    description: 'SCORE 30',
                    score: 6
                },
                {
                    name: 'YAHTZEE',
                    description: 'SCORE 50',
                    score: 0
                },
                {
                    name: 'Chance',
                    description: 'Score total of all 5 dice',
                    score: 0
                }

            ]
        });
    }

    handleAddDiceCount(props) {
        //grab a mutable version of current state.uScores
        let scores = this.state.uScores;

        if (props) {
            
            //arrays are zero based (dice 1 = array[0])
            let newIndex = props - 1; 

            //limit count to a max of 6
            if(scores[newIndex].count <=5 ){
                scores[newIndex].count = scores[newIndex].count + 1;
                //persist the multable version to state.uScores
                //should refresh with state updates
                this.setState({ uScores: scores });
            }else{
                console.log('Max dice count is 6.')
            }
            
            
        }else{
            //props outides of expected range or were not passed
            console.log('Expected a dice face value (1-6)');
        }
    }

    handleDecrDiceCount(props) {
         //grab a mutable version of current state.uScores
         let scores = this.state.uScores;

         if (props) {
             
             //arrays are zero based (dice 1 = array[0])
             let newIndex = props - 1; 
 
             //limit count to a max of 6
             if(scores[newIndex].count >=1 ){
                 scores[newIndex].count = scores[newIndex].count - 1;
                 //persist the multable version to state.uScores
                 //should refresh with state updates
                 this.setState({ uScores: scores });
             }else{
                 console.log('Min dice count is 0.')
             }
             
             
         }else{
             //props outides of expected range or were not passed
             console.log('Expected a dice face value (1-6)');
         }
    }


    render() {
        return (
            <div className="yahtzee-game">
                <h1>Reactive-Yahtzee Scoresheet</h1>
                <SingleDiceSection aDiceCount={this.handleAddDiceCount.bind(this)} dDiceCount={this.handleDecrDiceCount.bind(this)} uScores={this.state.uScores} />
                <SingleDiceSectionScore uScores={this.state.uScores} />
                <CombinationSection lScores={this.state.lowerScores} uScores={this.state.uScores} />
            </div>
        );
    }
}

export default Yahtzee;
