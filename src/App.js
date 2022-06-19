import React from 'react';
// 위 라인을 쓸 필요는 없다. 강의에서 JSX코드를 사용할 때 사실 리액트가 사용되고 있음을 강조하고자 썼다고 함
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return React.createElement(
    'div',
    {},
    React.createElement(Expenses, { items: expenses })
  );

  // return (
  //   <div>
  //     <Expenses items={expenses} />
  //   </div>
  // );
}

export default App;
