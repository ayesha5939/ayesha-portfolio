import { render, screen } from '@testing-library/react';
import App from './App';

test('renders specific text in Banner component', () => {
  render(<App />);

  // Use `getAllByText` to handle multiple elements with the same text
  const textElements = screen.getAllByText(/I am a passionate front-end developer with a strong foundation in HTML, CSS, JavaScript, and React.js. With experience in designing and iterating user interfaces for web and mobile products, I excel at translating user feedback and business requirements into elegant solutions for complex problems. My collaborative approach involves working closely with product managers, analysts, and engineers to conceptualize new features and maintain scalable and well-documented codebases./i);
  
  // Check if the correct number of elements is rendered
  expect(textElements.length).toBeGreaterThan(0); // Adjust this according to your needs
});
