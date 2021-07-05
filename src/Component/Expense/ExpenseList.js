import React from 'react';
import ExpenseItem from './ExpenseItem'
import './ExpenseList.css'

const ExpenseList = ({ filteredExpenses }) => {

    if (filteredExpenses.length === 0) {
        return <h2 className="expenses-list__fallback">No expense Found!</h2>
    }
    return (
        <ul className="expenses-list">
            {
                filteredExpenses.map(expense => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))
            }
        </ul>
    );
};

export default ExpenseList;