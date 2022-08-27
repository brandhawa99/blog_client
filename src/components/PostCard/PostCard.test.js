import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PostCard from './PostCard';

describe('<PostCard />', () => {
  test('it should mount', () => {
    render(<PostCard />);
    
    const postCard = screen.getByTestId('PostCard');

    expect(postCard).toBeInTheDocument();
  });
});