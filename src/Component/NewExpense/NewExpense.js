import React from 'react';
import NewExpenseForm from './NewExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const SaveExpenseHandler = (enteredExpense) => {
        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        props.onExpense(expenseData)
    }
    return (
        <div className="new-expense">
            <NewExpenseForm onSaveExpense={SaveExpenseHandler} />
        </div>
    );
};

export default NewExpense;