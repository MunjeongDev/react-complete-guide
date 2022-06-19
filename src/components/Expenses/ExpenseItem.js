import React from 'react';
// 위 라인을 쓸 필요는 없다. 강의에서 JSX코드를 사용할 때 사실 리액트가 사용되고 있음을 강조하고자 썼다고 함
import ExpenseDate from './ExpenseDate.js';
import './ExpenseItem.css';
import Card from '../UI/Card.js';

function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
