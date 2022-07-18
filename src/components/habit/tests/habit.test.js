import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import Habit from '../habit';

describe('Habit component', () => {
  const habit = { name: 'Habit', count: 4 }; // 필요한 habit object를 만듦
  let HabitComponent; // Habit 컴포넌트
  let onIncrement; // 3개의 콜백함수를 정의할 수 있는 변수 선언
  let onDecrement;
  let onDelete;

  beforeEach(() => {
    // 각 3개의 mocking 함수 연결, Habit 컴포넌트에 가지고 있는 컴포넌트와 mock 함수를 이용하여 만듦
    onIncrement = jest.fn();
    onDecrement = jest.fn();
    onDelete = jest.fn();
    HabitComponent = (
      <Habit
        habit={habit}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDelete={onDelete}
      />
    );
  });

  // render 함수 정의 -> snapshot에서 확인
  it('renders', () => {
    const component = renderer.create(HabitComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  // 버튼이 클릭 됐을 때의 각 테스트들 정의
  describe('Button Click', () => {
    beforeEach(() => {
      render(HabitComponent);
    });

    it('calls onIncrement when clicking "increment" button', () => {
      const button = screen.getByTitle('increase');
      userEvent.click(button);

      expect(onIncrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDecrement when clicking "decrement" button', () => {
      const button = screen.getByTitle('decrease');
      userEvent.click(button);

      expect(onDecrement).toHaveBeenCalledWith(habit);
    });

    it('calls onDelete when clicking "delete" button', () => {
      const button = screen.getByTitle('delete');
      userEvent.click(button);

      expect(onDelete).toHaveBeenCalledWith(habit);
    });
  });
});
