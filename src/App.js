import './App.css';
import { HashRouter, Route, Switch, NavLink } from "react-router-dom";
import { dashboard, transactions, spendingStats, monthlyBreakdown, profilePage, login, signup, savingsTracking } from "./Pages";
// import TransactionsComp from './Transactions'

export const App = () => {
  return (
      <HashRouter>
      <Switch>
        <Route exact path='/' component={dashboard}/>
        <Route path='/transactions' component={transactions}/>
        <Route path='/spendingStats' component={spendingStats}/>
        <Route path='/monthlyBreakdown' component={monthlyBreakdown}/>
        <Route path='/profilePage' component={profilePage}/>
        <Route path='/login' component={login}/>
        <Route path='/signup' component={signup}/>
        <Route path='/savingsTracking' component={savingsTracking}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
