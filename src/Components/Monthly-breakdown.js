import React, { Component } from 'react'
import {
  PieChart, Pie, Legend, Tooltip, Cell
} from 'recharts';
const axios = require('axios')

const data01 = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

class MonthlyBreakdown extends Component {
    state = {
        categories: []
    }

    showTransactions = () => {
        axios
            .get(`/new_transactionsForPie`)
            .then(result => {
                this.setState({
                    categories: result.data.data.results
                })
                console.log(result.data.data.results)
            }
        )
    }

    renderPieChart = (data, colors) => (
        <PieChart width={800} height={700}>
          <Pie dataKey="amount" data={data} cx={400} cy={300} outerRadius={250} fill="lightBlue" label > 
            {
                data.map((entry, index) => <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />)
		    }
          </Pie>
          <Legend />
          <Tooltip />
        </PieChart>
    )

    componentDidMount = () => {
        this.showTransactions()
    }

    render () {
        const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#6E2C35', '#142F3A', '#FFB6B6', '#8C198C', '#15FB00', '#000000'];

        const data = this.state.categories.map(result => (
            {
                name: result.category,
                amount: parseInt(result.sumamount)
            }
        ))

        return (
            <div>
                <h2 style={{marginLeft:"28%"}}>{this.renderPieChart(data, COLORS)}</h2>
            </div>
        )
    }

}

export default MonthlyBreakdown