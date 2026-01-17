// tests/withAuthorization.test.jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import withAuthorization from '../../src/hoc/withAuthorization';
import AccessDenied from '../../src/components/AccessDenied';

// Вспомогательный тестовый компонент
const TestComponent = () => <div>Тестовый компонент</div>;

test('Рендерится защищённый компонент, если у пользователя есть нужная роль', () => {
  const AllowedComponent = withAuthorization(TestComponent, ['admin']);
  render(<AllowedComponent currentUser={{ roles: ['admin'] }} />);

  expect(screen.getByText(/Тестовый компонент/i)).toBeInTheDocument(); // Проверяем, что компонент рендерится
});

test('Рендерится AccessDenied, если у пользователя нет нужных ролей', () => {
  const RestrictedComponent = withAuthorization(TestComponent, ['admin']);
  render(<RestrictedComponent currentUser={{ roles: ['user'] }} />);

  expect(screen.getByText(/У вас нет прав для просмотра этого раздела/i)).toBeInTheDocument(); // Проверяем, что показывается заглушка
});

test('Рендерится AccessDenied, если информация о пользователе отсутствует', () => {
  const UnauthorizedComponent = withAuthorization(TestComponent, ['admin']);
  render(<UnauthorizedComponent />); // Пользователь не указан

  expect(screen.getByText(/У вас нет прав для просмотра этого раздела/i)).toBeInTheDocument(); // Проверяем, что показывается заглушка
});
