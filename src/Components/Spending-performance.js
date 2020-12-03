import React, { Component } from 'react'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Legend, Tooltip } from 'recharts';
const axios = require('axios')




class Spending extends Component {
    state = {
        spending: [],
        saving: []
    }

    

    renderLineChart = (theData) => (
        <LineChart width={1000} height={500} data={theData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
          <Line name="spending" type="linear" dataKey="spending" strokeWidth="3px" stroke="blue" />
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <Tooltip />
        </LineChart>
      );
    
    showTransactions = () => {
    axios
        .get(`/new_transactionsForGraph`)
        .then(result => {
            this.setState({
                spending: result.data.data.results
            })
            console.log(result.data.data.results)
        }
        )
    }

    showTransactions2 = () => {
        axios
            .get(`/new_transactionsForGraph2`)
            .then(result => {
                this.setState({
                    saving: result.data.data.results
                })
                console.log(result.data.data.results)
            }
        )
    }

    componentDidMount = () => {
        this.showTransactions()
    }

    render () {

        const data = this.state.spending.map(result => (
            {
                name: result.transactiondate.slice(0,10),
                spending: parseInt(result.sumamount)
            }
        ))

        console.log("hello", data)

        return (
            
            <div>
                <h1 style={{textAlign:"center"}}>Spending vs. Saving performance</h1>
                <div style={{marginLeft:"18%"}}>{this.renderLineChart(data)}</div>
            </div>





        )
    }

}

export default Spending