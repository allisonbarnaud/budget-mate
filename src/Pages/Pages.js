import React from "react";
import Transactions  from '../Components/Transactions'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import Savings from '../Components/Savings'
import Profile from '../Components/Profile-settings'
import Spending from '../Components/Spending-performance'
import MonthlyBreakdown from '../Components/Monthly-breakdown'
import { NavLink } from "react-router-dom";
import TransactionsDash from "../Components/dashboard/Transactions-dash"
import './pages.css'


//define all pages here, with corresponding components inside

export const dashboard = () => (
    <div>
        <div style={{display: "grid", gridTemplateColumns:"1fr 0.5fr", marginTop: "10px"}}>
            <h1 style={{marginLeft: "58%", marginBottom:"5px"}}>Welcome to your Budget-Mate</h1>
            <NavLink style={{position: "relative", right: '-81%', color: "black"}} to='/login'>
                <h2>Login</h2>
            </NavLink >
            <div></div>
            <NavLink style={{position: "relative", right: '-71%', color: "black"}} to='/profilePage'>
              <h2 style={{fontSize:"18px", color: "black"}}>Profile Settings</h2>
            </NavLink>
            <h2 style={{marginLeft: "62%", marginTop: "0", color: "black"}}>What would you like to do?</h2>
            <NavLink style={{position: "relative", right: '-44%', marginTop:"5px"}} to='/signup'>
                <h2 style={{fontSize:"18px", color: "black"}}>Don't have an account? Sign-up here!</h2>
            </NavLink>
        </div>
        
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr 1fr", textAlign: "center", marginTop: "30px", rowGap:"200px"}}>
            <NavLink style={{color: "black"}} to='/savingsTracking'>
              <h2>savings tracking</h2>
            </NavLink>
            <NavLink style={{color: "black"}} to='/spendingStats'>
                <h2>Spending Statistics</h2>
            </NavLink>
            <NavLink style={{color: "black"}} to='/monthlyBreakdown'>
              <h2>Monthly finance Breakdown</h2>
            </NavLink>
            <NavLink style={{color: "black"}} to='/transactions'>
                <TransactionsDash />
            </NavLink>
            
            
            
        </div>
    </div>
);

//transactions page
export const transactions = () => (
    <div>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <Transactions />
    </div>
);
  
export const spendingStats = () => (
    <div>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <Spending />
        
    </div>
);

export const monthlyBreakdown = () => (
    <div  className='page-container'>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <h1 style={{textAlign:"center"}}>Breakdown of expenses of the last 30 days</h1>
        <MonthlyBreakdown />
    </div>
);

export const profilePage = () => (
    <div className='page-container'>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <Profile />
    </div>
);

export const login = () => (
    <div>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <Login />
    </div>
);

export const signup = () => (
    <div className='page-container'>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <Signup />
    </div>
);

export const savingsTracking = () => (
    <div className='page-container'>
        <NavLink to='/'>
            <h2>Back to Dashboard</h2>
        </NavLink>
        <Savings />
    </div>
);