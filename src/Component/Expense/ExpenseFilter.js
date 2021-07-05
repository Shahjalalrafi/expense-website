import React from 'react';
import './ExpenseFilter.css'

const ExpenseFilter = (props) => {
    const dropDownHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div>
            <div className="expenseFilter">
                <label className='expenseFilter__label'>Filter by Year</label>
                <select className="expenseFilter__select" value={props.selected} onChange={dropDownHandler}>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                </select>
            </div>
        </div>
    );
};

export default ExpenseFilter;