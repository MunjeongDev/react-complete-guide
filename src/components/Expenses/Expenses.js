import React from 'react';
// 위 라인을 쓸 필요는 없다. 강의에서 JSX코드를 사용할 때 사실 리액트가 사용되고 있음을 강조하고자 썼다고 함
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';

function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
