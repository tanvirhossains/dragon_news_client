import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routes';
import Main from './Components/layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <RouterProvider router={router}>
      <Main />
    </RouterProvider>
  );
}

export default App;
