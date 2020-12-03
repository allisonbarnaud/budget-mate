import React, { Component } from 'react'

class Savings extends Component {
    state = {
        mainSavings: '',
        savingsGoals: []

    }

    // newSavingsGoal = (goal) => {
    //     this.setState(state => ({
    //         savingsGoal: [goal, ...{name: this.state.}]
    //     }))
    // }


    render () {
        return (
            <div>
                <h1>Savings goals</h1>

                
                <section>
                    <h2>Savings goals trackers</h2>
                    <form>
                        <input type="text" placeholder="add $ to savings goal"/>
                        <input type="submit" value="add"/>
                    </form>
                </section>
                

                <form onSubmit={this.newSavingsGoal}>
                    <h2>add new savings goal</h2>
                    <input type="text" placeholder="add goal name (holiday, new car, etc.)"/>
                    <input type="number" placeholder="add savings target, in $ "/>
                    <input type="submit" value="add"/>
                </form>
            </div>





        )
    }

}

export default Savings