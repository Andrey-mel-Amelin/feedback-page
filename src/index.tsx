import ReactDOM from 'react-dom/client';
import './index.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';
import { store } from './redux';
import { Provider } from 'react-redux';

const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
