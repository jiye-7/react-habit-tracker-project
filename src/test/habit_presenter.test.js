import HabitPresenter from '../habit_presenter';

describe('HabitPresenter', () => {
  const habits = [
    {
      id: 1,
      name: 'Reading JavaScript Deep Dive',
      count: 1,
    },
    {
      id: 2,
      name: 'Reading Do It TypeScript',
      count: 0,
    },
  ];

  let presenter;
  let update;

  beforeEach(() => {
    presenter = new HabitPresenter(habits);
    update = jest.fn();
  });

  it('inits with habits', () => {
    expect(presenter.getHabits()).toEqual(habits);
  });

  it('increments habit count and call update callback', () => {
    presenter.increment(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(2);
    checkUpdateIsCalled();
  });

  it('decrements habit count and call update callback', () => {
    presenter.decrement(habits[0], update);

    expect(presenter.getHabits()[0].count).toBe(0);
    checkUpdateIsCalled();
  });

  it('does not set th count value below 0 when decrements', () => {
    presenter.decrement(habits[1], update);
    presenter.decrement(habits[1], update);

    expect(presenter.getHabits()[1].count).toBe(0);
  });

  it('deletes habit form the list', () => {
    presenter.delete(habits[0], update);

    expect(presenter.getHabits().length).toBe(1);
    expect(presenter.getHabits()[0].name).toBe('Reading Do It TypeScript');
    checkUpdateIsCalled();
  });

  it('adds habit to the list', () => {
    presenter.add('eat a cookie', update);

    expect(presenter.getHabits()[2].name).toBe('eat a cookie');
    expect(presenter.getHabits()[2].count).toBe(0);
    expect(presenter.getHabits().length).toBe(3);
    checkUpdateIsCalled();
  });

  it('reset', () => {
    presenter.reset(update);

    expect(presenter.getHabits()[0].count).toBe(0);
    expect(presenter.getHabits()[1].count).toBe(0);
    checkUpdateIsCalled();
  });

  /**
   * test에서도 반복적으로 작성되는 코드가 있다면 함수 이름을 명확하게 정의해줘서 따로 정의하는 것 가능
   */
  // 계속 반복되는 코드를 함수로 따로 정의
  function checkUpdateIsCalled() {
    expect(update).toHaveBeenCalledTimes(1);
    // update를 호출할 때 presenter에 있는 getHabits로 호출이 잘 되었는지? -> update할 때 정확한 배열이 전달되었는지?
    expect(update).toHaveBeenCalledWith(presenter.getHabits());
  }
});
