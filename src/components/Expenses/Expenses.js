import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesChart from './ExpenseChart';

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    let filteredExpense = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    filteredExpense.sort((e1, e2) => {
        return e1.date < e2.date ? -1 : 1;
    });
    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear}
                    onChangeFilter={filterChangeHandler}/>
                <ExpensesChart expenses={filteredExpense}/> {
                filteredExpense.length > 0 && filteredExpense.map((expense) => {
                    return (
                        <ExpenseItem key={
                                expense.id
                            }
                            title={
                                expense.title
                            }
                            amount={
                                expense.amount
                            }
                            date={
                                expense.date
                            }/>
                    )
                })
            }
                {
                filteredExpense.length === 0 && <h2>No expenses to show for this year</h2>
            } </Card>
        </div>
    );
};

export default Expenses;
