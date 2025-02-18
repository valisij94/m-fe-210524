import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import AttemptsList from './AttemptsList';

const testAttempts = [
  { attemptData: 'First attempt', id: 1 },
  { attemptData: 'Second attempt', id: 2 }
]

describe('AttemptsList', () => {
  it('renders AttemptsList component', () => {
    render(<AttemptsList attempts={testAttempts}/>);
    const firstAttempt = screen.getByText(`${testAttempts[0].attemptData} ${testAttempts[0].id}`)
    expect(firstAttempt).toBeInTheDocument();
  });
  it('AttemptsList click handler', () => {
    // делаем заглушку - типа функцию обработчик клика
    const dropAttemptMock = jest.fn();
    // рендерим компонент с пропсами
    render(<AttemptsList attempts={[ {id:1, attemptData: 'SimpleAttempt'} ]} dropAttempt={dropAttemptMock} />);
    // ищем нечто с текстом SimpleAttempt 1
    const attemptEl = screen.getByText('SimpleAttempt 1');
    expect(attemptEl).toBeInTheDocument();
    // генерируем событие клика на этом элементе
    fireEvent.click(attemptEl);
    // ожидаем, что после этого наша функция-обработчик будет вызвана один раз
    expect(dropAttemptMock).toBeCalled();
  });
});