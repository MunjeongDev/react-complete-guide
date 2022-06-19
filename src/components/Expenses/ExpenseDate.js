import React from 'react';
// 위 라인을 쓸 필요는 없다. 강의에서 JSX코드를 사용할 때 사실 리액트가 사용되고 있음을 강조하고자 썼다고 함
import './ExpenseDate.css';

function ExpenseDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
