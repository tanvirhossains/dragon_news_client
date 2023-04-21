import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Components/Routes/Routes';
import Main from './Components/layout/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <RouterProvider router={router}>
      <Main />
      {/* <Toaster/> */}
    </RouterProvider>
  );
}

export default App;
