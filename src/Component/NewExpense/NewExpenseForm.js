import React, { useState } from 'react';
import './NewExpenseForm.css'

const NewExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmout, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const handleTitle = (event) => {
        setEnteredTitle(event.target.value)
    }

    const handleAmount = (event) => {
        setEnteredAmount(event.target.value)
    }

    const handleDate = (event) => {
        setEnteredDate(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmout,
            date: new Date(enteredDate)
        }

        props.onSaveExpense(expenseData)
        
        setEnteredDate('')
        setEnteredTitle('')
        setEnteredAmount('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={handleTitle} />
                </div>
                <div className="new-expense__control">
                    <label>amount</label>
                    <input type='number' value={enteredAmout} min='0.01' step="0.01" onChange={handleAmount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={handleDate} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;