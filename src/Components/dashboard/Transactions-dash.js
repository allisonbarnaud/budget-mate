import React, { Component } from 'react'
import '../transactions.css'
const axios = require('axios')

const id = 1

class TransactionsDash extends Component {
    state = {
        amount: '',
        details: '',
        date: '',
        category: '',
        additional: '',
        toggle: false,
        transactions: []
    }

    showTransactions = () => {
        axios
            .get(`/new_transactions5`)
            .then(result => {
                this.setState({
                    transactions: result.data.data.results
                })
                console.log(result.data.data.results)
            }
            )
    }

    componentDidMount = () => {
        this.showTransactions()
    }
    
    render() {
// transactions should be able to be edited or deleted

        return (
            <div style={{margin: "auto",
                width: "50%"}}>
                <div>
                    <h2 style={{margin: "20px 0px 0px 10px", width:"100%"}}>Latest Transactions</h2>
                    {this.state.transactions.map(transaction => (
                        <div key={transaction.id} className="transactionItem">
                            <div style={{textAlign: "left"}}>{transaction.details}</div>
                            {transaction.depositwithdraw? <div style={{textAlign: "right"}}>+${transaction.amount}</div>: <div style={{textAlign: "right"}}>-${transaction.amount}</div>}
                            <div style={{textAlign: "left"}}>{transaction.category}</div>
                            <div style={{textAlign: "left"}}>{transaction.transactiondate.slice(0,10)}</div>
                            <div style={{textAlign: "left"}}>{transaction.additionalinfo}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default TransactionsDash