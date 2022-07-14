/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HabitAddForm from '../habitAddForm';

describe('HabitAddForm', () => {
  let onAdd;
  let input;
  let button;

  const setup = () => {
    render(<HabitAddForm onAdd={onAdd} />);
  };

  beforeEach(() => {
    onAdd = jest.fn(); // jest의 mock함수를 이용
    setup();
    input = screen.getByPlaceholderText('Habit');
    button = screen.getByText('Add');
  });

  // onAdd 함수는 버튼이 클릭되면 호출한다. habit은 유효한 값이어야 된다.
  it('calls onAdd when button is clicked and valid habit is entered', () => {
    userEvent.type(input, 'New Habit');
    userEvent.click(button);

    expect(onAdd).toHaveBeenCalledWith('New Habit'); // onAdd함수가 입력한 'New Habit'과 함께 호출되어야 한다.
  });

  it('does not call onAdd when the habit is empty', () => {
    userEvent.type(input, '');
    userEvent.click(button);

    // expect(onAdd).toHaveBeenCalledWith(''); // 문자열이 비어있으면 호출하면 안되니까 callTimes로 0번 호출되었는지를 검사하면 된다.
    expect(onAdd).toHaveBeenCalledTimes(0);
  });
});
