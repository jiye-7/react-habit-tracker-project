/* eslint-disable testing-library/no-render-in-setup */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';
import HabitAddForm from '../habitAddForm';

describe('HabitAddForm', () => {
  /** 컴포넌트가 정상적으로 렌더링되는지 스냅샷테스트를 통해 확인 */
  it('render', () => {
    // 스냅샷 테스트 실행
    // 컴포넌트 만들기
    const component = renderer.create(<HabitAddForm onAdd={jest.fn()} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  /** Form이 제대로 Submit되는지에 대한 테스트는 별도로 분리 */
  describe('Form Submit', () => {
    let onAdd;
    let input;
    let button;

    /*  const setup = () => {
      render(<HabitAddForm onAdd={onAdd} />);
    };
 */
    beforeEach(() => {
      onAdd = jest.fn(); // jest의 mock함수를 이용
      // setup();
      render(<HabitAddForm onAdd={onAdd} />);
      input = screen.getByPlaceholderText('Habit');
      button = screen.getByText('Add');
    });

    // onAdd 함수는 버튼이 클릭되면 호출한다. habit은 유효한 값이어야 된다.
    it('calls onAdd when button is clicked and valid habit is entered', () => {
      userEvent.type(input, 'new habit');
      userEvent.click(button);

      expect(onAdd).toHaveBeenCalledWith('new habit'); // onAdd함수가 입력한 'New Habit'과 함께 호출되어야 한다.
    });

    it('does not call onAdd when the habit is empty', () => {
      userEvent.type(input, '');
      userEvent.click(button);

      // expect(onAdd).toHaveBeenCalledWith(''); // 문자열이 비어있으면 호출하면 안되니까 callTimes로 0번 호출되었는지를 검사하면 된다.
      expect(onAdd).toHaveBeenCalledTimes(0);
    });
  });
});
