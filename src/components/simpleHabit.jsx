import React, { useEffect, useState, useRef, useCallback } from 'react';

const SimpleHabit = (props) => {
  const [count, setCount] = useState(0);
  const spanRef = useRef();

  const handleIncrement = useCallback(() => {
    setCount(count + 1);
  });

  // componentDidMount + componentDidUpdate
  // 두 번째 인자에 어떤 값이 변경되었을 때만 이 함수가 호출되게 만들 수 있다.
  // 아무것도 전달하지 않으면 state나 props이 변경될 때 마다 호출
  // 아무것도 전달하지 않는 [] 빈 배열을 넣으면 처음 마운트 될 때만 호출
  useEffect(() => {
    console.log(`mounted & update!: ${count}`);
  }, [count]);

  return (
    <li className='habit'>
      <span ref={spanRef} className='habit-name'>
        Reading
      </span>
      <span className='habit-count'>{count}</span>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className='fas fa-plus-square'></i>
      </button>
    </li>
  );
};

export default SimpleHabit;
