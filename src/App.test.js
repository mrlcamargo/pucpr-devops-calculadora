import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

// testes unitarios

// Renderização Painel
test('renders number 1.00 in the panel', () => {
  render(<App />);
  const panelElement = screen.getByText(/1.00/i);
  expect(panelElement).toBeInTheDocument();
});

// Renderização botão
test('renders all buttons with correct text and class', () => {
  render(<App />);

  // Teste botões operacoes
  const operations = ['/', '*', '-', '+'];
  operations.forEach(op => {
    const button = screen.getByText(op);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('botao-operacao');
  });

  // Testa botões de número
  const numbers = ['7', '8', '9', '4', '5', '6', '1', '2', '3'];
  numbers.forEach(num => {
    const button = screen.getByText(num);
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('botao-numero');
  });

  // Testa botão AC
  const acButton = screen.getByText('AC');
  expect(acButton).toBeInTheDocument();
  expect(acButton).toHaveClass('botao-ac');
});