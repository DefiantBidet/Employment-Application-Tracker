import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// import { ExerciseContext, IExerciseContext } from 'Contexts/ExerciseContext';
// import { createMockExercise, createMockExerciseContext } from 'utils/utils';

// import ExercisePanel from './index';

describe('<ExperimentPanel />', () => {
  /*
  test('renders a container', () => {
    render(<ExercisePanel />);

    const element = document.querySelector('div.exerciseContainer');
    expect(element).toBeInTheDocument();
  });

  test('renders a container for TextInput filtering', () => {
    render(<ExercisePanel />);

    const element = document.querySelector('div.filterContainer');
    expect(element).toBeInTheDocument();
  });

  test('renders a container for the ExerciseList', () => {
    render(<ExercisePanel />);

    const element = document.querySelector('div.listContainer');
    expect(element).toBeInTheDocument();
  });

  test('filters list based on input', () => {
    const mockNames = ['aaa', 'bbb', 'ccc'];
    const mockText = mockNames[0];

    const mockList = Array.from({ length: mockNames.length }, (_, i) => i).map((index) =>
      createMockExercise({ name: mockNames[index] }),
    );
    const mockExerciseContext: IExerciseContext = createMockExerciseContext({ exerciseList: mockList });

    render(
      <>
        <ExerciseContext.Provider value={mockExerciseContext}>
          <ExercisePanel />
        </ExerciseContext.Provider>
      </>,
    );

    let unselectedListItemElements: NodeListOf<Element>;
    unselectedListItemElements = document.querySelectorAll('li.listItem');

    expect(unselectedListItemElements.length).toBe(mockNames.length);

    const inputElement: HTMLInputElement = screen.getByRole('textbox');
    userEvent.type(inputElement, mockText);

    unselectedListItemElements = document.querySelectorAll('li.listItem');

    expect(unselectedListItemElements.length).toBe(1);
  });
  */
});
