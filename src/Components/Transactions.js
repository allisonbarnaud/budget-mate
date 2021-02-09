import React, { Component } from 'react'
import '../switch.css'
import './transactions.css'
import { Dropdown } from 'semantic-ui-react'
import { transactions } from '../Pages'
const axios = require('axios')

const id = 1

const categoryArray = [
    {text: "Housing", value:"Housing"},
    {text: "Transportation", value:"Transportation"},
    {text: "Food", value:"Food"},
    {text: "Utilities", value:"Utilities"},
    {text: "Clothing", value:"Clothing"},
    {text: "Healthcare", value:"Healthcare"},
    {text: "Household items", value:"Household items"},
    {text: "Personal", value:"Personal"},
    {text: "Savings", value:"Savings"},
    {text: "Entertainment", value:"Entertainment"},
    {text: "Other", value:"Other"}
]

class Transactions extends Component {
    state = {
        amount: '',
        details: '',
        date: '',
        category: '',
        additional: '',
        toggle: false,
        transactions: []
    }

    handleInputChange = (event) => {
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
        console.log(value)
    }

    handleSwitch = () => {
        this.setState(state => ({
            toggle: !state.toggle
        }))
    }
    handleCategory = (event) => {
        this.setState(({
            //finds the index of the clicked array item of the dropdown menu
            category: categoryArray[categoryArray.findIndex(item => item.text === event.target.textContent)].value
        }))
    }

    onSubmit = (event) => {
        event.preventDefault();
        axios.post('/new_transactions', {
            body: this.state
        })
        .then(res => {
        //   this.showTransactions()
          alert('transaction successfully added')
        })
        .catch(err => {
          console.error(err);
          alert('Error adding new transaction');
        });
    }

    // showTransactions = () => {
    //     axios
    //         .get(`/new_transactions/${id}`)
    //         .then(result => {
    //             this.setState({
    //                 transactions: result.data.data.results
    //             })
    //             console.log(result.data.data.results)
    //         }
    //         )
    // }

    componentDidMount = () => {
        this.showTransactions()
    }
    
    render() {
// transactions should be able to be edited or deleted

        return (
            <div style={{margin: "auto",
                width: "50%"}}>
                <section style={{margin: "auto",
                width: "50%"}}>
                <h1 style={{marginLeft: "4%"}}>Add new transaction</h1>
                <form onSubmit = {this.onSubmit}>
                    <section>
                        <input className="input"
                            type="number"
                            name="amount"
                            onChange={this.handleInputChange} 
                            value={this.state.amount}
                            placeholder="$"
                            required
                        />
                        
                    </section>
                    <section>
                        <input className="input"
                            type="text"
                            name="details"
                            onChange={this.handleInputChange} 
                            value={this.state.details}
                            placeholder="Description"
                            required
                        />
                    </section>
                    <section>
                        <input className="input"
                            type="date"
                            name="date"
                            onChange={this.handleInputChange} 
                            value={this.state.date}
                            placeholder="date of transaction"
                            required
                        />
                    </section>
                    <section className="input">
                        <Dropdown 
                            placeholder='Select category'
                            fluid
                            selection
                            name="category"
                            onChange={this.handleCategory}
                            options={categoryArray}
                            value={this.state.category}
                        />
                    </section>
                    <section>
                        <input className="input"
                            type="text"
                            name="additional" 
                            onChange={this.handleInputChange}
                            value={this.state.additional}
                            placeholder="additional info (optional)"
                        />
                    </section>
                    <h3 className="switchLabel">spend</h3>
                    <label className="switch">
                        <input 
                        type="checkbox"
                        name="toggle"
                        onClick={this.handleSwitch}
                        value={this.state.toggle}
                    />
                    <span className="slider round"></span>    
                    </label>
                    <h3 className="switchLabel">deposit</h3>
                    <input type="submit" value="Confirm"/>
                </form>
                </section>
                
                <div>
                    <h1 style={{margin: "20px 0px 0px 260px"}}>Transactions History</h1>
                    {this.state.transactions.map(transaction => (
                        <div key={transaction.id} className="transactionItem">
                            <div style={{display: "inline"}}>{transaction.details}</div>
                            {transaction.depositwithdraw? <div style={{textAlign: "right"}}>+${transaction.amount}</div>: <div style={{textAlign: "right"}}>-${transaction.amount}</div>}
                            <div>{transaction.category}</div>
                            <div>{transaction.transactiondate.slice(0,10)}</div>
                            <div>{transaction.additionalinfo}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

}

export default Transactions