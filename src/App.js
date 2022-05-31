import { useEffect } from 'react'

import './app.css'
import Header from "./components/Header/Header.component";
import Home from './components/Home/Home.component';
import Checkout from './components/Checkout/Checkout.component';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.component';
import { auth } from './utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useStateValue } from './context/StateProvider';

const App = () => {

  const [{ }, dispatch] = useStateValue()

  useEffect(() => {

    onAuthStateChanged(auth, (AuthUser) => {
      if (AuthUser) {
        dispatch({
          type: 'SET_USER',
          user: AuthUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    });
  }, [])
  return (

    <div className='app'>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={
          <>
            <Header />
            <Home />
          </>} />

        <Route path='/checkout' element={<Checkout />} />
      </Routes>


    </div>

  );
}

export default App;
