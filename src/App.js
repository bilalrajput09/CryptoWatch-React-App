import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import HomePage from './components/HomePage';
import CoinDetailsPage from './components/CoinDetailsPage';
import Root from './components/Root';
import fetchCoinsData from './redux/coinsActions';
import Error from './components/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/coins/:coinID', element: <CoinDetailsPage /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoinsData());
  }, [dispatch]);

  return <RouterProvider router={router} />;
}

export default App;
