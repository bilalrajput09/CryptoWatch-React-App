import { MemoryRouter } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

test('should render homepage when clicked on home link element in navigation', () => {
  <MemoryRouter>
    render(
    <MainNavigation />
    ); const linkElement = screen.getByText(/Home/i); const expectedResult =
    screen.getByText(/search any coin/i); fireEvent.click(linkElement);
    expect(expectedResult).toBeInTheDocument();
  </MemoryRouter>;
});
